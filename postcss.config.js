const tailwind = require('tailwindcss');
const purgecss = require('@fullhuman/postcss-purgecss');
const cssnano = require('cssnano');
const { join } = require('path');

module.exports = {
  plugins: [
    tailwind(join(__dirname, './tailwind.config.js')),
    cssnano({
      preset: 'default',
    }),
    ...(process.env.NODE_ENV === 'production'
      ? [purgecss(require(join(__dirname, './purgecss.config')))]
      : []),
    require('autoprefixer'),
  ],
};
