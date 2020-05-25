/**
 * @file vue.config
 * @author qianjing
 */

const path = require('path');

function resolve(dir) {
    return path.join(__dirname, dir);
}

module.exports = {

    publicPath: './', // 基本路径

    productionSourceMap: false,

    configureWebpack: {
        resolve: {
            // 别名短标签
            alias: {
                '@': resolve('src'),
                'api': resolve('src/api'),
                'common': resolve('src/common'),
                'components': resolve('src/components'),
                'config': resolve('src/config'),
                'router': resolve('src/router'),
                'store': resolve('src/store'),
                'stylus': resolve('src/stylus'),
                'utils': resolve('src/utils'),
                'views': resolve('src/views'),
                'static': resolve('src/static'),
                'assets': resolve('src/assets')
            }
        }
    },

    pluginOptions: { // 第三方插件配置
        'style-resources-loader': {
            preProcessor: 'stylus',
            patterns: [
                resolve('src/stylus/autoload/*.styl')
            ]
        }
    },

    // https://webpack.js.org/configuration/dev-server/
    devServer: {
        contentBase: [
            resolve('public')
        ],
        open: true,
        host: '0.0.0.0',
        https: false,
        hotOnly: true
    }
};
