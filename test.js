module.exports = (req, res) => {
  console.log(req.url);
  const fs = require("fs");
  if (req.url === "/") {
    res.add(fs.readFileSync("./index.html", 'utf8'));
  }
};
