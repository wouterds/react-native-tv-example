const { readdirSync } = require('fs');

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          ...readdirSync('./src', { withFileTypes: true }).reduce(
            (res, entry) => {
              let key = entry.name;
              if (!entry.isDirectory()) {
                // remove extension
                const parts = entry.name.split('.');
                parts.pop();

                key = parts.join('');
              }

              return {
                ...res,
                [key]: `./src/${entry.name}`,
              };
            },
            {},
          ),
          resources: './resources',
        },
      },
    ],
  ],
};
