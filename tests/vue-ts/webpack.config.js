const baseConfig = require('@fbi-js/webpack-config-base').default
const vueConfig = require('@fbi-js/webpack-config-vue').default

const webpackConfig = baseConfig({
  options: {
    isTs: true
  }
})

module.exports = vueConfig({ webpackConfig })
