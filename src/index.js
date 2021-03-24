const formatting = require("./formatting");
const consola = require("consola");
const importmodules = require("./import");
try {
  console.log(formatting.successBox("Starting"));
  //o.err()
  importmodules(process.cwd());
} catch (err) {
  console.clear();
  console.log(
    formatting.fatalBox("Yikes, we ran into an error running your project\n")
  );
  consola.error(err);
}
