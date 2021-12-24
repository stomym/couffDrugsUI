let devServer = {};
if (process.env.NODE_ENV === 'development') {
  devServer = {
    host: 'localhost',
    public: 'localhost',
    hotOnly: false,
    disableHostCheck: true,
    clientLogLevel: 'warning',
    inline: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, content-type, Accept',
    },
  };
}
module.exports = {
  pluginOptions: {
    i18n: {
      locale: 'fr',
      fallbackLocale: 'fr',
      localeDir: 'locales',
      enableInSFC: false,
    },
  },
  devServer,
  transpileDependencies: ['vuetify'],
  publicPath: '/ui',
  css: {
    extract: {
      filename: 'css/[name].css',
      chunkFilename: 'css/[name].css',
    },
  },
  configureWebpack: {
    output: {
      filename: 'js/[name].bundle.js',
      chunkFilename: 'js/[name].min.js',
    },
  },
};
