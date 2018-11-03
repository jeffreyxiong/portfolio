const path = require('path');

module.exports = {
  	entry: {
		app: './src/index.ts',
	},
  	output: {
    	filename: '[name].js',
		path: path.resolve(__dirname, 'dist'),
  	},
 	resolve: {
    	extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.js'],
	},
	module: {
		rules: [
			{
				test: /\.ts$/,
				loader: 'ts-loader',
			}
		]
	}
};