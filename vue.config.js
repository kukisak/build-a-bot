module.exports = {
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.coffee$/,
          use: ['coffee-loader'],
        },
        {
          test: /\.(png|jpe?g|gif|webp)(\?.*)?$/,
          use: [
            {
              loader: 'C:\\Petr\\Git\\build-a-bot\\node_modules\\url-loader\\dist\\cjs.js',
              options: {
                limit: 10000,
                fallback: {
                  loader: 'C:\\Petr\\Git\\build-a-bot\\node_modules\\file-loader\\dist\\cjs.js',
                  options: {
                    name: 'img/[name].[hash:8].[ext]',
                  },
                },
              },
            },
          ],
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
