const path = require('path');
const webpack = require('webpack');
const CURRENT_WORKING_DIR = process.cwd();

const reactRules = {
	test: /\.jsx?$/,
	exclude: /node_modules/,
	use: ['babel-loader'],
};

const config = {
	mode: 'production',
	entry: [
		path.join(CURRENT_WORKING_DIR, 'client/main.js'),
	],
	output: {
		path: path.join(CURRENT_WORKING_DIR, '/dist'),
		filename: 'bundle.js',
		publicPath: '/dist/',
	},
	module: {
		rules: [reactRules],
	},
};

module.exports = config;
