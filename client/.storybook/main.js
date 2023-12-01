const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

module.exports = {
  webpackFinal: async config => {
    config.resolve.plugins = [new TsconfigPathsPlugin()]

    /**
     * storybook file loader
     */
    const fileLoaderRule = config.module.rules.find(rule => {
      const reg = rule.test

      if (reg && reg instanceof RegExp) {
        return reg.test('.svg')
      }
    })

    /**
     * exclude default svg loader
     */
    fileLoaderRule.exclude = /\.svg$/

    /**
     * add custom svg loader with inline svg loader
     */
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack', 'url-loader'],
    })

    return config
  },
  stories: [
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  framework: "@storybook/react",
  core: {
    "builder": "@storybook/builder-webpack5"
  }
}