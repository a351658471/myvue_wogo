const path = require('path');
function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
    chainWebpack: (config)=>{
        config.resolve.alias
            .set('@$', resolve('src'))
            .set('assets',resolve('src/assets'))
            .set('components',resolve('src/components'))
            .set('static',resolve('src/static'))
    },

    css: {
        loaderOptions: {
          css: {
            // 这里的选项会传递给 css-loader
            importLoaders: 1,
          },
          less: {
            // 这里的选项会传递给 postcss-loader
            importLoaders: 1,
          }
        }
      }
}
