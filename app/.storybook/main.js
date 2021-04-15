const path = require("path");

module.exports = {
  stories: ['../src/**/*.stories.@(tsx|ts)'],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-controls',
    '@storybook/addon-docs',
    '@storybook/addon-viewport'
  ],
  presets: [path.resolve(__dirname, './next-preset.js')],
};
