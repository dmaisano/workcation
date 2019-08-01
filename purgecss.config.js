module.exports = {
  content: ['./src/**/*.vue', './src/**/*.js', './src/**/*.html'],
  whitelist: ['body', 'html', 'img', 'a'],
  extractors: [
    {
      extractor: TailwindExtractor,
      extensions: ['vue', 'js', 'html'],
    },
  ],
};
