const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.base.config')

const util = require('./util')
const { API_HOST } = require('./config')

module.exports = merge(
	{
		mode: 'development',
		devtool: 'cheap-module-source-map',
		output: {
			publicPath: '/'
		},
		module: {
			rules: [
				{
					test: /\.css$/i,
					use: ['style-loader', 'css-loader', 'postcss-loader'],
					exclude: /node_modules/
				}
			]
		},
		devServer: {
			static: [
				{
					directory: util.resolve('../static'),
					publicPath: '/'
				}
			],
			proxy: [
				{
					context: ['/api'],
					target: API_HOST.MAIN,
					secure: true,
					changeOrigin: true
				},
				{
					context: ['/mock'],
					target: 'http://localhost',
					secure: true,
					changeOrigin: true
				}
			],
			open: ['/'],
			allowedHosts: ['localhost'],
			hot: true,
			compress: true,
			host: 'localhost',
			port: 8080,
			client: {
				overlay: false
			}
		}
	},
	baseConfig
)
