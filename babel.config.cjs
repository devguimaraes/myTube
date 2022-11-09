module.exports = {
	plugins: ["babel-plugin-styled-components"],
	presets: [
			[ '@babel/preset-env', { targets: { esmodules: true } } ],
			[ '@babel/preset-react', { runtime: 'automatic' } ],
	],
};
