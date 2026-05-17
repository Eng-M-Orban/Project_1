import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: { globals: globals.browser },
  },
  tseslint.configs.recommended,
  {
    files: ["**/*.{ts,mts,cts}"],
    rules: {
      // General code quality
      "prefer-const": "error",
      "eqeqeq": ["error", "always"],
      "curly": "error",
      "no-var": "error",
      "no-console": "warn",

      // TypeScript-specific
      "@typescript-eslint/consistent-type-imports": ["error", { "prefer": "type-imports" }],
      "@typescript-eslint/no-unused-vars": ["warn", { "argsIgnorePattern": "^_", "varsIgnorePattern": "^_" }],
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/explicit-function-return-type": "off",
    },
  },
  {
    // Test-specific overrides for Playwright tests
    files: ["tests/**/*.ts", "**/*.spec.ts", "**/*.spec.mts"],
    languageOptions: {
      globals: {
        test: "readonly",
        expect: "readonly",
        describe: "readonly",
        beforeAll: "readonly",
        afterAll: "readonly",
        beforeEach: "readonly",
        afterEach: "readonly",
        page: "readonly",
      },
    },
    rules: {
      "no-console": "off",
      "@typescript-eslint/no-empty-function": "off",
    },
  },
]);
