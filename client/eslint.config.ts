import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import react from "eslint-plugin-react";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
  { 
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    plugins: { 
      js, 
      react 
    },
    extends: ["js/recommended"],
    languageOptions: 
    { 
      globals: globals.browser,
      parserOptions: {
        projectService: true,
        defaultProject: ['tsconfig.json'],
        sourceType: "module"
      }
    },
    settings: {
      react: { version: "19" }
    }
  },
  tseslint.configs.strictTypeChecked,
  tseslint.configs.stylisticTypeChecked,
  pluginReact.configs.flat.recommended,
  pluginReact.configs.flat['jsx-runtime'],
  [globalIgnores(["*.config.ts", "*.config.js", "*.config.mjs"])]
]);
