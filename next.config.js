module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }) => {
    config.module.rules.push({
      test: /\.md$/,
      use: [
        {
          loader: 'html-loader',
        },
        {
          loader: 'markdown-loader',
          options: {
            // Pass options to marked
            // See https://marked.js.org/using_advanced#options
          },
        },
      ],
    });
    return config;
  },
};
