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

const setEnvironments = (configs, { webpack, wingsConfig, }) => {
	const { DefinePlugin, } = webpack;
	const env = wingsConfig.env();
	const isProduction = wingsConfig.isProduction(env);

	configs.plugins[0] = new DefinePlugin({
		process: { env: {} },
		__DEV__: !isProduction,
		ENV: JSON.stringify(env),
		API_ENDPOINT: JSON.stringify('https://lq92alow55.execute-api.us-east-1.amazonaws.com/dev/graphql'),
	});

	return configs;
};

module.exports = {
	webpackConfigs: [
		splitBundle,
		copyAssets,
		setEnvironments,
	],
	moduleAlias: (isProduction) => {
		return {
			global: {
				'react-native': 'react-native-web',
			},
			web: {
				'react-native-linear-gradient': 'react-native-web-linear-gradient',
			},
		};
	},
};
