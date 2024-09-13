// eslint.config.mjs в каталоге api

import prettier from 'eslint-plugin-prettier';
import importPlugin from 'eslint-plugin-import';
import node from 'eslint-plugin-node';

const baseRules = {
  'prettier/prettier': ['error', { endOfLine: 'auto' }],
  'no-console': 'off',
  'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
};

export default [
  {
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
    },
    plugins: {
      prettier,
      import: importPlugin,
      node,
    },
    rules: baseRules,
  },
];
