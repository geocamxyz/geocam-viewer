  export const node = (name, attrs = {}, content = "") => {
    const node = document.createElement(name);
    for (let i in attrs) {
      node.setAttribute(i, attrs[i]);
    }
    node.innerHTML = content;
    return node;
  };

  export const injectStyle = (id, rules) => {
    if (!document.getElementById(id)) {
    document
      .getElementsByTagName("head")[0]
      .prepend(node("STYLE", { type: "text/css" }, rules));
    }
    return true;
  };

export const objectUrl = (base, obj) => base.replace(/\(\?\<(.+?)\>[^)]*\)/g, (x, g) => obj[g]);

export const cameraUrls = (base, obj) => {
  if (!Array.isArray(base)) {
    base = base.split('|')
  }
  return base.map((b) =>objectUrl(b,obj));
}

export const rigUrls = (base, obj) => {
   const cameras = [0,1,2];
   return cameras.map((camera) => cameraUrls(base, Object.assign({},obj,{camera})))
}

export const shotUrls = (base,obj) => {
   obj.group = `${Math.floor(parseInt(obj.shot) / 1000)}`.padStart(4, "0");
  return rigUrls(base,obj);
}