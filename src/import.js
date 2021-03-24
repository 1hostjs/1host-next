module.exports = (dir) => {
  const config = require(dir + "/1host.config.js");
  for (module of config.modules) {
    if (typeof module.module == "function") {
      module.module();
    } else if (typeof module.module == "string") {
      require(module.module)();
    }
  }
};
