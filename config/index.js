'use strict'
const path = require('path')
const server_url = 'http://127.0.0.1'
module.exports = {
    dev: {
        assetsSubDirectory: 'static',
        assetsPublicPath:'/',
        proxyTable: {"/h5":{target:server_url, changeOrigin:true},},
        host:'localhost',
        port: 8081,
        autoOpenBrowser: false,
        errorOverlay: true,
        notifyOnErrors: false,
        poll: false,
        useEslint: false,
        showEslintErrorsInOverlay: false,
        devtool: '#cheep-source-map',
        cacheBusting: true,
        cssSourceMap: false
    },
    build: {
        index: path.resolve(__dirname, '../dist/index.html'),
        assetsRoot: path.resolve(__dirname, '../dist'),
        assetsSubDirectory: 'static',
        assetsPublicPath: './',
        productionSourceMap:false,
        devtool:'#source-map',
        productionGzip: false,
        productionSourceExtensions:['js', 'css'],
        bundleAnalyzerReport: process.env.npm_config_report
    }
}