import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    plugins: { js },
    extends: [
      "js/recommended",
      "plugin:testing-library/react",
      "plugin:vitest/recommended",
      "plugin:react/jsx-runtime",
    ],
    languageOptions: { globals: globals.browser },
    rules: {
      "no-unused-vars": "warn",
      "react/prop-types": "off",
    },
    globals: {
      ...vitest.environments.env.globals,
    },
  },
  pluginReact.configs.flat.recommended,
]);
