const { merge } = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

const baseConfig = require('./webpack.base.config')
const { PUBLIC_PATH } = require('./config')

module.exports = merge(
	{
		mode: 'production',
		output: {
			publicPath: PUBLIC_PATH
		},
		optimization: {
			minimizer: [new CssMinimizerPlugin(), '...'],
			minimize: true
		},
		module: {
			rules: [
				{
					test: /\.css$/i,
					use: [
						{
							loader: MiniCssExtractPlugin.loader
						},
						'css-loader',
						'postcss-loader'
					],
					exclude: /node_modules/
				}
			]
		},
		plugins: [
			new MiniCssExtractPlugin({
				filename: 'asset/css/[contenthash].css'
			})
		]
	},
	baseConfig
)
