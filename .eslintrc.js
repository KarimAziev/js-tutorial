'use strict';

const OFF = 0;
const WARN = 1;
const ERROR = 2;
module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true,
  },
  globals: {
    l: true,
  },
  extends: ['prettier'],
  plugins: ['import', 'babel'],
  parserOptions: {
    ecmaVersion: 9,
    sourceType: 'module',
  },
  rules: {
    'import/no-extraneous-dependencies': OFF,
    'no-underscore-dangle': OFF,
    'no-unused-expressions': [ERROR, { allowShortCircuit: true }],
    'class-methods-use-this': [
      ERROR,
      { exceptMethods: ['renderSlide', 'renderContent'] },
    ],
    'import/imports-first': ['error', 'absolute-first'],
    'space-infix-ops': ['error', { int32Hint: false }],
    'import/prefer-default-export': OFF,
    'import/newline-after-import': 'error',
    'no-console': OFF,
    'no-unused-vars': [ERROR, { args: 'none' }],
    'no-param-reassign': OFF,
    'no-duplicate-imports': ERROR,
    'prefer-object-spread': OFF,
    'no-await-in-loop': WARN,
    'no-magic-numbers': OFF,
    'no-debugger': WARN,
    'no-dupe-keys': WARN,
    'array-callback-return': WARN,
    'block-scoped-var': WARN,
    'no-else-return': WARN,
    'no-empty-function': WARN,
    'no-empty': WARN,
    'array-bracket-spacing': WARN,
    'import/no-unresolved': OFF,
    'import/no-cycle': OFF,
    'func-names': OFF,
    'no-restricted-syntax': OFF,
    'no-nested-ternary': OFF,
    'no-unneeded-ternary': OFF,
    'no-plusplus': OFF,
    'no-continue': OFF,
    'no-case-declarations': OFF,
  },
  overrides: [
    {
      files: ['*.test.js', '*.tests.js'],

      rules: {
        'no-unused-vars': OFF,
      },
    },
    {
      files: ['./scripts/*.js', 'webpack.config.js'],

      rules: {
        'no-restricted-modules': OFF,
        'no-magic-numbers': OFF,
      },
    },
  ],
};
