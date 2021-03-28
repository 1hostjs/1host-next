module.exports = (key,locale) => {
    const path = require("path");
    const string = require(`./strings.${locale}`)
    // uncomment the code below to test L10N system
    // console.log(string)
    return string[key]
}
