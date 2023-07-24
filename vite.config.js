const { resolve } = require('path');
const { defineConfig } = require('vite');

module.exports = defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'views/about.html'),
        info: resolve(__dirname, 'views/camp-information.html'),
        hackathon: resolve(__dirname, 'views/hackathon.html'),
      },
    },
  },
});
