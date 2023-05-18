import { Cache, Loader } from "./three.module.js";
import { log } from "./logger";

const loading = {};

class HaltableFileLoader extends Loader {
  constructor(manager) {
    super(manager);
  }

  load(url, onLoad, onProgress, onError, signal) {
    log("load", url);
    if (url === undefined) url = "";

    if (this.path !== undefined) url = this.path + url;

    url = this.manager.resolveURL(url);

    const cached = Cache.get(url);

    if (cached !== undefined) {
      log("cached", url);
      this.manager.itemStart(url);

      setTimeout(() => {
        if (onLoad) onLoad(cached);

        this.manager.itemEnd(url);
      }, 0);

      return cached;
    }

    // Check if request is duplicate

    if (loading[url] !== undefined) {
      loading[url].push({
        onLoad: onLoad,
        onProgress: onProgress,
        onError: onError,
      });
      log("return", url, loading[url]);
      return;
    }

    // Initialise array for duplicate requests
    loading[url] = [];

    loading[url].push({
      onLoad: onLoad,
      onProgress: onProgress,
      onError: onError,
    });
    log("push", url, loading[url]);

    // create request
    const req = new Request(url, {
      headers: new Headers(this.requestHeader),
      credentials: this.withCredentials ? "include" : "same-origin",
      // An abort controller could be added within a future PR
    });

    // record states ( avoid data race )
    const mimeType = this.mimeType;
    const responseType = this.responseType;

    // start the fetch
    log("started fetch", url);
    fetch(req, signal)
      .then((response) => {
        if (response.status === 200 || response.status === 0) {
          // Some browsers return HTTP Status 0 when using non-http protocol
          // e.g. 'file://' or 'data://'. Handle as success.

          if (response.status === 0) {
            console.warn("THREE.FileLoader: HTTP Status 0 received.");
          }

          // Workaround: Checking if response.body === undefined for Alipay browser #23548

          if (
            typeof ReadableStream === "undefined" ||
            response.body === undefined ||
            response.body.getReader === undefined
          ) {
            return response;
          }

          const callbacks = loading[url];
          const reader = response.body.getReader();
          const contentLength = response.headers.get("Content-Length");
          const total = contentLength ? parseInt(contentLength) : 0;
          const lengthComputable = total !== 0;
          let loaded = 0;

          // periodically read data into the new stream tracking while download progress
          const stream = new ReadableStream({
            start(controller) {
              readData();

              function readData() {
                reader
                  .read()
                  .then(({ done, value }) => {
                    if (done) {
                      controller.close();
                    } else {
                      loaded += value.byteLength;

                      const event = new ProgressEvent("progress", {
                        lengthComputable,
                        loaded,
                        total,
                      });
                      for (let i = 0, il = callbacks.length; i < il; i++) {
                        const callback = callbacks[i];
                        if (callback.onProgress) callback.onProgress(event);
                      }

                      controller.enqueue(value);
                      readData();
                    }
                  })
                  .catch((err) => {
                    delete loading[url];  // clean up callbacks - user cancelled load
                  });
              }
            },
          });

          return new Response(stream);
        } else {
          throw Error(
            `fetch for "${response.url}" responded with ${response.status}: ${response.statusText}`
          );
        }
      })
      .then((response) => {
        switch (responseType) {
          case "arraybuffer":
            return response.arrayBuffer();

          case "blob":
            return response.blob();

          case "document":
            return response.text().then((text) => {
              const parser = new DOMParser();
              return parser.parseFromString(text, mimeType);
            });

          case "json":
            return response.json();

          default:
            if (mimeType === undefined) {
              return response.text();
            } else {
              // sniff encoding
              const re = /charset="?([^;"\s]*)"?/i;
              const exec = re.exec(mimeType);
              const label = exec && exec[1] ? exec[1].toLowerCase() : undefined;
              const decoder = new TextDecoder(label);
              return response.arrayBuffer().then((ab) => decoder.decode(ab));
            }
        }
      })
      .then((data) => {
        // Add to cache only on HTTP success, so that we do not cache
        // error response bodies as proper responses to requests.
        Cache.add(url, data);

        const callbacks = loading[url];
        log("then delete", url, loading[url]);
        delete loading[url];

        for (let i = 0, il = callbacks.length; i < il; i++) {
          const callback = callbacks[i];
          if (callback.onLoad) callback.onLoad(data);
        }
      })
      .catch((err) => {
        // Abort errors and other errors are handled the same

        const callbacks = loading[url];
        log("err delete", url, loading[url]);
        delete loading[url];

        if (callbacks === undefined) {
          // When onLoad was called and url was deleted in `loading`
          this.manager.itemError(url);
          throw err;
        }

        for (let i = 0, il = callbacks.length; i < il; i++) {
          const callback = callbacks[i];
          if (callback.onError) callback.onError(err);
        }

        this.manager.itemError(url);
      })
      .finally(() => {
        log("finally delete", url, loading[url]);
        delete loading[url];
        this.manager.itemEnd(url);
      });

    this.manager.itemStart(url);
  }

  setResponseType(value) {
    this.responseType = value;
    return this;
  }

  setMimeType(value) {
    this.mimeType = value;
    return this;
  }
}

export { HaltableFileLoader };