const path = require('path'),
	  getFileRelativeConfigFile = (filePath) => path.resolve(__dirname, filePath),
	  {
	  	getBuildMode,
		getDefaultPlugins,
		getResolveExtensions,
		getStyleRules,
		getScriptRules,
		getFileRules,
		getAliasFromFile
	  } = require('webpack-config-create-utils')()



const {
		isDev,
		isProd,
		buildModeByNodeEnv,
		getFileNameByMode,
		optimizationSettingsByMode
	} = getBuildMode(),
    extensions = getResolveExtensions(),
    alias = getAliasFromFile(__dirname),
    defaultPlugins = getDefaultPlugins({isProd}),
    fileRules = getFileRules(),

	styleRules = getStyleRules({
		sassFilesForImport: [
			getFileRelativeConfigFile('src/common/style/smart-grid.scss'),
			getFileRelativeConfigFile('node_modules/scss-coding-helpers/index.scss')
		]
	}),
	scriptRules = getScriptRules()


module.exports = {
	context: getFileRelativeConfigFile('src'),
	mode: buildModeByNodeEnv,
	devtool: isDev ? 'source-map' : false,
	entry: ['@babel/polyfill', './index.tsx'],
	output: {
		publicPath: '/',
		filename: getFileNameByMode('js'),
		path: getFileRelativeConfigFile( 'dist')
	},
	resolve: {
		extensions,
		alias
	},
	optimization: optimizationSettingsByMode,
	devServer: {
		overlay: true,
		// TODO: Why was src/index.tsx?
		contentBase: 'src/',
		historyApiFallback: true,
	},
	plugins: [
		...defaultPlugins
	],
	module: {
		rules: [
			...styleRules,
			scriptRules,
            ...fileRules
		]
	}
}
