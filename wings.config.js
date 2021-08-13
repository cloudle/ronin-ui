const { resolve, } = require('path');
const CopyPlugin = require('copy-webpack-plugin');

const splitBundle = (configs, globalModules) => {
	configs.entry = {
		app: {
			...configs.entry.app,
			dependOn: 'react-core',
		},
		'react-core': {
			import: [
				'react',
				'react-dom',
				'react-native',
				'react-art',
				'@react-native-community/async-storage',
			],
		}
	};

	return configs;
};

const copyAssets = (configs) => {
	configs.plugins.push(new CopyPlugin({
		patterns: [{ from: resolve(process.cwd(), 'assets/'), to: './', }, ],
	}));

	return configs;
};

module.exports = {
	webpackConfigs: [
		splitBundle,
		copyAssets,
	],
	moduleAlias: (isProduction) => {
		return {
			global: {
				'react-native': 'react-native-web',
			},
		};
	},
};
