const webpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');
const openBrowser = require('./open-browser');
const paths = require('./paths');
const config = require('../webpack.config.js');

const options = {
  hot: true,
  host: 'localhost',
  contentBase: paths.build,
};

webpackDevServer.addDevServerEntrypoints(config, options);
const compiler = webpack(config);
const server = new webpackDevServer(compiler, options);

server.listen(3000, 'localhost', () => {
  openBrowser('http://localhost:3000');
  console.log('dev server listening on port 3000');
});
