const withCss = require('@zeit/next-css');

if (require) {
  require.extensions['.css'] = file => {}
}

module.exports = withCss({})