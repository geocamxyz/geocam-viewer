export const store = function (val) {
  let value = val;
  let subscribers = [];

  const fn = function (v,options = {}) {
    if (arguments.length > 0) {
      if (typeof v === "function") {
        options.prepend ?  subscribers.unshift(v) : subscribers.push(v);
        if (!options.dontCallOnRegistration) v(value);  
        return () => {
          const index = subscribers.indexOf(v);
          if (index !== -1) {
            subscribers.splice(index, 1);
          }
        };
      } else {
        if ((value !== v) && (JSON.stringify(value) !== JSON.stringify(v))) {
          value = v;
          subscribers.forEach((s) => s(value));
        }
        return value;
      }
    } else {
      return value;
    }
  };

  return fn;
};
