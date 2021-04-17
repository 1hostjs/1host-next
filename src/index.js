import formatting from "./formatting.js";
import consola from "consola";
import l10n from "../localization/getstring.js";
import osLocale from "os-locale";
import serve from "./serve.js";
const locale = osLocale.sync();
try {
    console.log(formatting.successBox(l10n("Starting...", locale)));
    //o.err()
    importdata = require("./import")(process.cwd());
    serve(importdata[0], importdata[1]);
}
catch (err) {
    console.clear();
    console.log(formatting.fatalBox(l10n("Yikes, we ran into an error running your project\n", locale)));
    consola.error(err);
}
