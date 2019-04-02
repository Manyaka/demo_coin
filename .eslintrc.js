module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',

    // enable additional rules
    // override default options for rules from base configurations
    // disable rules from base configurations
    'indent': ['off', 2]
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
