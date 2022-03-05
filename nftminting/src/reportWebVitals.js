const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};
const webpack = require("webpack");

exports.onCreateWebpackConfig = ({ actions }) => {
    actions.setWebpackConfig({
        plugins: [
            new webpack.ProvidePlugin({
                Buffer: [require.resolve("buffer/"), "Buffer"],
            }),
        ],
        resolve: {
            fallback: {
                "crypto": false,
                "stream": require.resolve("stream-browserify"),
                "assert": false,
                "util": false,
                "http": false,
                "https": false,
                "os": false
            },
        },
    })
}

export default reportWebVitals;
