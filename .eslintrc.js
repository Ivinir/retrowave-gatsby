module.exports = {
  extends: [
    'airbnb-base',
    'plugin:react/recommended',
  ],
  parser: 'babel-eslint',
  settings: {
    react: {
      version: '16.12.0',
    },
  },
  rules: {
    indent: ['error', 2],
  },
};
