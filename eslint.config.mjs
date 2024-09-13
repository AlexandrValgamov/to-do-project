// eslint.config.mjs в корне проекта

import apiConfig from "./api/eslint.config.mjs";
import webConfig from "./web/eslint.config.mjs";

export default [
  {
    // Общие настройки для всего проекта
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
    },
    rules: {
      "no-console": "warn",
      "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    },
  },
  ...apiConfig,
  ...webConfig,
];
