module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: ['plugin:vue/essential', '@vue/airbnb'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production'
                  ? 'error'
                  : 'off',
    'no-debugger': process.env.NODE_ENV === 'production'
                   ? 'error'
                   : 'off',

    // enable additional rules
    // override default options for rules from base configurations
    'arrow-parens': ['error', 'always'],
    'comma-dangle': ['error', 'only-multiline'],

    // disable rules from base configurations
    indent: ['off', 2],
    'spaced-comment': 'off',
    'prefer-const': 'off',
    'template-curly-spacing': 'off'
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
