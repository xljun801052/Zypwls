const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  lintOnSave: false,
  // 配置别名alias
  chainWebpack: (config) => {
    config.resolve.alias
      // set第一个参数：设置的别名，第二个参数：设置的路径
      .set('assets', resolve('src/assets'))
      .set('common', resolve('src/common'))
      .set('network', resolve('src/network'))
      .set('components', resolve('src/components'))
      .set('views', resolve('src/views'))
  }
};


