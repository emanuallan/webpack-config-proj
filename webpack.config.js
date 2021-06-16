module.exports = {
	entry: ["./src/index.js"],
	output: {
		path: __dirname + "/dist",
		publicPath: "/", // url to output directory in relation to html page
		filename: "bundle.js",
	},
	devServer: {
		contentBase: "./dist",
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/, //regex- any files that matches .js || .jsx
				exclude: /node_modules/, // not nessecary for node modules
				use: ["babel-loader"],
			},
			{
				test: /\.(js|jsx)$/, //regex- any files that matches .js || .jsx
				exclude: /node_modules/, // not nessecary for node modules
				use: ["eslint-loader"],
			},
		],
	},
	resolve: {
		extensions: [".js", ".jsx"], // dont need to put extensions for imports
	},
};

// WE WROTE THIS
