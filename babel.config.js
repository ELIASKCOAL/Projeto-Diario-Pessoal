module.exports = {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            '@/components': './components',
            '@/scripts': './scripts',
            '@/assets': './assets'
          },
        },
      ],
    ],
  };
  