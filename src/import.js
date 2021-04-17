import path from "path";
export default (dir) => {
    let modules = [];
    for (module of config.modules) {
        if (typeof module.module == "function") {
            if (!module.errorHandler)
                modules.push({ module: module.module, data: module });
            else
                modules.errorHandler = { module: module.module, data: module };
        }
        else if (typeof module.module == "string") {
            if (!module.errorHandler)
                ;
            else
                modules.errorHandler = { module: require(module.module), data: module };
        }
    }
    return [modules, config.port];
};
