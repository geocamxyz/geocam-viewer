import { TextureLoader, Cache, CanvasTexture } from "./three.module.js";
import { HaltableFileLoader as FileLoader } from "./haltable-file-loader.js";
import { log } from "./logger.js";

export const AjaxTextureLoader = function (abortController) {
  /**
   * Three's texture loader doesn't support onProgress events, because it uses image tags under the hood.
   *
   * A relatively simple workaround is to AJAX the file into the cache with a FileLoader, create an image from the Blob,
   * then extract that into a texture with a separate TextureLoader call.
   *
   * The cache is in memory, so this will work even if the server doesn't return a cache-control header.
   */

  const cache = Cache;
  const { signal } = abortController;

  // Turn on shared caching for FileLoader, ImageLoader and TextureLoader
  cache.enabled = true;

  const textureLoader = new TextureLoader();
  const fileLoader = new FileLoader();
  fileLoader.setResponseType("blob");

  function load(url, onLoad, onProgress, onError, brightness = 1) {
    fileLoader.load(
      url,
      cacheImage,
      onProgress,
      (err) => {
        console.error("loader err", err);
        onError();
      },
      { signal }
    );

    /**
     * The cache is currently storing a Blob, but we need to cast it to an Image
     * or else it won't work as a texture. TextureLoader won't do this automatically.
     */
    function cacheImage(blob) {
      // ObjectURLs should be released as soon as is safe, to free memory
      log("cache image called", url, blob);
      if (blob.tagName != "IMG") {
        const objUrl = URL.createObjectURL(blob);
        const image = document.createElementNS(
          "http://www.w3.org/1999/xhtml",
          "img"
        );

        image.onload = () => {
          cache.add(url, image);
          URL.revokeObjectURL(objUrl);
          document.body.removeChild(image);
          if (brightness == 1) {
            loadImageAsTexture();
          } else {
            loadImageFromCanvas(image);
          }
          //loadImageAsTexture();
        };

        image.src = objUrl;
        image.style.visibility = "hidden";
        document.body.appendChild(image);
      } else {
        if (brightness == 1) {
          loadImageAsTexture();
        } else {
          loadImageFromCanvas(blob);
        }
      }
    }

    function loadImageAsTexture() {
      textureLoader.load(url, onLoad, () => {}, onError);
    }

    function loadImageFromCanvas(image) {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      canvas.width = image.width;
      canvas.height = image.height;
      ctx.filter = `brightness(${brightness})`;
      ctx.drawImage(image, 0, 0, image.width, image.height);
      const tex = new CanvasTexture(canvas);
      onLoad(tex);
      canvas.remove();
    }
  }

  return Object.assign({}, textureLoader, { load });
};
