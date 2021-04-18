#!/usr/bin/env node
if (process.argv[2] === "start") {
  await import("../src/index.mjs");
} else if (process.argv[2] === "config") {
  await import("./config.mjs");
} else {
  await import("./help.mjs");
}
