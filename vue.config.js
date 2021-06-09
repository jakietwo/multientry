// const glob = require('glob')
// glob.sync("./src/pages/**/app.vue").forEach(path=> {
//   console.log(' --- path ---', path);
// })
//
// module.exports = {
//   pages: {
//     first: {
//       entry: "./src/pages/first/app.js",
//       template: "./src/pages/first/index.html",
//       filename: "index.html",
//       chunks: ["chunk-vendors", "chunk-common", "first"],
//     },
//     second: {
//       entry: "./src/pages/second/app.js",
//       template: "./src/pages/second/index.html",
//       filename: "second.html",
//       chunks: ["chunk-vendors", "chunk-common", "second"],
//     },
//     three: {
//       entry: "./src/pages/three/app.js",
//       template: "./src/pages/three/index.html",
//       filename: "three.html",
//       chunks: ["chunk-vendors", "chunk-common", "three"],
//     },
//   },
// };

const fse = require("fs-extra");
const path = require("path");
const glob = require("glob");
const pages = {};

function resolvePath(file) {
  return path.join(__dirname, file);
}

glob.sync("./src/pages/**/app.vue").forEach((path) => {
  const chunk = path.split("./src/pages/")[1].split("/app.vue")[0];
  let entryPath = path.replace("app.vue", "app.js");
  pages[chunk] = {
    entry: entryPath,
    template: `src/pages/${chunk}/index.html`,
    filename: `${chunk}/index.html`,
    chunks: ["chunk-vendors", "chunk-common", chunk],
  };
});
module.exports = {
  publicPath: "/",
  pages,
  configureWebpack: (config) => {
    config.output.filename = "[name]/[name].[hash:8].js";
    config.output.chunkFilename = "[name]/[name].[hash:8].js";
  },
};
