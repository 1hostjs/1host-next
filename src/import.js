module.exports = (dir) => {
    const config = require(dir + '/1host.config.js')
        for (module of config.modules) {
        console.log(typeof module.module)
        if (typeof module.module == 'function') {
            module.module()
        } else if (typeof module.module == 'string') {
            require(module.module)()
        }
    }

}