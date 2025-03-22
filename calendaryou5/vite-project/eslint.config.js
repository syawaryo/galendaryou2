import { fileURLToPath } from 'node:url';
import path from 'node:path';

import js from '@eslint/js';
import globals from 'globals';

import parser from '@typescript-eslint/parser';
import tseslint from '@typescript-eslint/eslint-plugin';

import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import jsxA11y from 'eslint-plugin-jsx-a11y';

import importPlugin from 'eslint-plugin-import';
import prettierPlugin from 'eslint-plugin-prettier';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default [
  {
    ignores: ['dist', '**/*.d.ts'],
  },
  js.configs.recommended,
  {
    files: ['**/*.{js,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        React: 'readonly',
        JSX: 'readonly',
      },
      parser,
      parserOptions: {
        project: [
          path.join(__dirname, 'tsconfig.app.json'),
          path.join(__dirname, 'tsconfig.node.json')
        ],
        tsconfigRootDir: __dirname,
      },
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      '@typescript-eslint': tseslint,
      'jsx-a11y': jsxA11y,
      import: importPlugin,
      prettier: prettierPlugin,
    },
    rules: {
      ...tseslint.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      ...jsxA11y.configs.recommended.rules,
      'react-refresh/only-export-components': 'warn',
      'import/no-extraneous-dependencies': 'error',
      'react/react-in-jsx-scope': 'off',
      '@typescript-eslint/no-unused-vars': 'warn',
      'prettier/prettier': 'error',
      'react/no-unknown-property': ['error', { ignore: ['css'] }],
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
];
