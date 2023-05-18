export const PromiseManager = function () {
  let promises = {};

  const remove = function (idx) {
    delete promises[idx];
  };

  this.add = function (pm) {
    const i = performance.now() + "";
    promises[i] = pm;

    pm.then(() => remove(i));
    return pm;
  };

  this.done = function (fn) {
    Promise.all(Object.values(promises)).then(() => {
      fn();
    });
  };
};
