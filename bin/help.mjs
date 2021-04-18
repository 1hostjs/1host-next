import formatting from "../src/formatting.mjs";
import l10n from "../localization/getstring.mjs";
import osLocale from "os-locale";
const locale = osLocale.sync();
var title = l10n("1host.js Help", locale) || "1host.js Help";
console.log(
  formatting.successBox(
    l10n(
      "Commands: \n start: starts 1host.js \n args: directory: changes the directory \n usage: 1host start < directory (optional) >",
      locale
    ),
    title
  )
);
