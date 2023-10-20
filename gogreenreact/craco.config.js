module.exports = {
    webpack: {
      alias: {},
      plugins: [],
      configure: (webpackConfig, { env, paths }) => {
        // Add the resolve fallback configuration for 'stream' and 'querystring'
        webpackConfig.resolve.fallback = {
          stream: require.resolve('stream-browserify'),
          querystring: require.resolve('querystring-es3'),
        };
  
        return webpackConfig;
      },
    },
  };
  