// eslint.config.mjs в каталоге web

import tsParser from "@typescript-eslint/parser";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import pluginReact from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";

const baseRules = {
  "react/react-in-jsx-scope": "off",
  "react/prop-types": "off",
  "react-refresh/only-export-components": [
    "warn",
    { allowConstantExport: true },
  ],
};

const baseSettings = {
  react: {
    version: "detect",
  },
};

export default [
  {
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 2021,
      sourceType: "module",
    },
    settings: baseSettings,
    plugins: {
      "@typescript-eslint": tsPlugin,
      react: pluginReact,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: baseRules,
  },
];
