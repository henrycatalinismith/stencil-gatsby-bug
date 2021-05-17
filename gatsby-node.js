const fs = require("fs")
const { renderToString } = require("./hydrate")
exports.onPostBuild = async () => {
  const before = fs.readFileSync("public/index.html", "utf-8")
  const after = await renderToString(before, {})
  fs.writeFileSync("public/index.html", after.html)
}
