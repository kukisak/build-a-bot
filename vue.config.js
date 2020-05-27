module.exports = {
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.coffee$/,
          use: ['coffee-loader'],
        },
      ],
    },
  },
  devServer: { // webpack config
    proxy: {
      '/api': {
        target: 'http://localhost:8081',
        changeOrigin: true,
      },
    },
  },
};
