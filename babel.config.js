module.exports = {
	presets: ["babel-preset-expo"],
	plugins: [
		[
			"module-resolver",
			{
				cwd: "babelrc",
				root: ["./src"],
				extensions: [".js", ".jsx", ".ios.js", ".android.js"],
			},
		],
	],
};
