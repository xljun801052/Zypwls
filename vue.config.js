const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  lintOnSave: false,
  // 配置别名alias
  chainWebpack: config => {
    config.resolve.alias
      // set第一个参数：设置的别名，第二个参数：设置的路径
      .set("assets", resolve("src/assets"))
      .set("common", resolve("src/common"))
      .set("network", resolve("src/network"))
      .set("components", resolve("src/components"))
      .set("views", resolve("src/views"));

    // 配置插件，显示markdown文本【该插件可以将markdown文件加载成vue组件】
    config.module
      .rule("md")
      .test(/\.md/)
      .use("vue-loader")
      .loader("vue-loader")
      .end()
      .use("vue-markdown-loader")
      .loader("vue-markdown-loader/lib/markdown-compiler")
      .options({
        raw: true
      });
  }
};
