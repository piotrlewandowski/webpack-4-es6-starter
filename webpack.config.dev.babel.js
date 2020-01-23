// Import webpack
import webpack from 'webpack';

// Import webpack plugins
import webpackMerge from 'webpack-merge';

// Import common configuration
import baseConfig from './webpack.config.base.babel';

export default webpackMerge(baseConfig, {
  mode: 'development',

  devtool: 'source-map',

  devServer: {
    // Enable gzip compression of generated files.
    compress: true,

    historyApiFallback: true,

    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000,
    },

    stats: {
      colors: true,
    },

    // Enable hot reloading server. It will provide /sockjs-node/ endpoint
    // for the WebpackDevServer client so it can learn when the files were
    // updated. The WebpackDevServer client is included as an entry point
    // in the Webpack development configuration. Note that only changes
    // to CSS are currently hot reloaded. JS changes will refresh the browser.
    hot: true,

    // embed the webpack-dev-server runtime into the bundle
    inline: true,

    disableHostCheck: true,
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
});
