'use strict'
const webpackDevServer = require('webpack-dev-server')
const config = require('../build/webpack.dev.config')
const webpack = require('webpack')
const path = require('path')
const compiler = webpack(config)

const server = new webpackDevServer(compiler, {
    contentBase: path.resolve(__dirname, '../public/'),
    historyApiFallback: true,
    port: 9090,
    publicPath: '/'
})

server.listen(9090, 'localhost', (err) => {
    if (err) throw err
})