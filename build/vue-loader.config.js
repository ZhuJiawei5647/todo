module.exports = (isDev) => {
  return {
    preserveWhitespace: true,
    extractCSS: !isDev,
    cssModules: {
      localIdentName: isDev ? '[path]-[name]-[hash:base64:5]' : '[hash:base64:5]',
      camelCase: true
    }
    // hotReload: false, //自动根据环境变量生成,
    // loaders: {} //模板解析
    // preLoader: {}, //解析之前
    // postLoader: {} //解析之后
  }
}
