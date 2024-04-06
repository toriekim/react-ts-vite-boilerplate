const js = require('@eslint/js')
const tseslint = require('typescript-eslint')
const eslintPluginPrettierRecommended = require('eslint-plugin-prettier/recommended')
const importRecommended = require('eslint-plugin-import/config/recommended')
const importTypescript = require('eslint-plugin-import/config/typescript')
const reactRecommended = require('eslint-plugin-react/configs/recommended')
const reactJsxRuntime = require('eslint-plugin-react/configs/jsx-runtime')
const globals = require('globals')
const { configs: reactHooksConfigs } = require('eslint-plugin-react-hooks')
const reactRefresh = require('eslint-plugin-react-refresh')
const { configs: jsxA11yConfigs } = require('eslint-plugin-jsx-a11y/lib')
const simpleImportSort = require('eslint-plugin-simple-import-sort')

module.exports = tseslint.config(
  js.configs.recommended,
  // `@typescript-eslint`
  ...tseslint.configs.recommendedTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  ...tseslint.configs.strictTypeChecked,
  reactHooksConfigs.recommended,
  jsxA11yConfigs.recommended,
  // Sets up both `eslint-plugin-prettier` & `eslint-config-prettier` in one go
  eslintPluginPrettierRecommended, // Always last to override other configs
  {
    files: ['**/*.{js,mjs,jsx,mjsx,ts,tsx,mtsx}'],
    ...reactRecommended,
    ...reactJsxRuntime,
    languageOptions: {
      ...reactRecommended.languageOptions,
      ...reactJsxRuntime.languageOptions,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: true,
        tsconfigRootDir: __dirname,
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.serviceworker,
        ...globals.browser,
        ...globals.node,
        ...globals.es2020,
      },
    },
    extends: [importRecommended, importTypescript],
    plugins: {
      'react-refresh': reactRefresh,
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'prettier/prettier': ['error', {}, { usePrettierrc: true }],
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      'jsx-a11y/accessible-emoji': 'off',
      'jsx-a11y/anchor-is-valid': [
        'error',
        {
          components: ['Link'],
          specialLink: ['hrefLeft', 'hrefRight'],
          aspects: ['invalidHref', 'preferButton'],
        },
      ],
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
)
