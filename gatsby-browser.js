const { defineCustomElements } = require("./dist/custom-elements")
exports.onClientEntry = () => {
  defineCustomElements()
}
