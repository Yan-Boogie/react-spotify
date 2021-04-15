const path = require('path');

module.exports = {
  webpackFinal: async (baseConfig, options) => {
    // Modify or replace config. Mutating the original reference object can cause unexpected bugs.
    const { module = {} } = baseConfig;

    const newConfig = {
      ...baseConfig,
      module: {
        ...module,
        rules: [...(module.rules || [])]
      }
    };

    // scss
    newConfig.module.rules.push({
      test: /\.(s*)css$/,
      use: [
        'style-loader',
        'css-loader',
        {
          loader: 'sass-loader',
          options: {
            sassOptions: {
              includePaths: [path.resolve(__dirname, '../src')],
            }
          },
        },
      ],
      include: path.resolve(__dirname, '../src'),
    });

    return newConfig;
  }
};