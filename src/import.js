import path from 'path';
export default (dir) => {
  let cfng = path.join(dir,"1host.config.js");
  import cfng from cfng;
  let modules = [];
  for (module of cfng.modules) {
    if (typeof module.module == "function") {
      if (!module.errorHandler)
        modules.push({ module: module.module, data: module });
      else modules.errorHandler = { module: module.module, data: module };
    } else if (typeof module.module == "string") {
      if (!module.errorHandler)
        modules.push({ module: require(module.module), data: module });
      else
        modules.errorHandler = { module: require(module.module), data: module };
    }
  }
  return [modules, cfng.port]
};