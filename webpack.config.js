var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'app');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');

module.exports = {
	entry: {
		app: path.resolve(APP_PATH, 'index.jsx')
	},
	output: {
		path: BUILD_PATH,
		filename: 'bundle.js'
	},
	// devtool: 'eval-source-map',
	devServer: {
		historyApiFallback: true,
		hot: true,
		inline: true,
		progress: true,
		port: 8000
	},
	module: {
		loaders: [
			{
				test: /\.jsx$/,
				loader: 'babel-loader',
				include: APP_PATH,
				query: {
					presets: ['es2015', 'react']
				}
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'React App'
		})
	],
	resolve: {
		extensions: ['*', '.js', '.jsx']
	}
}