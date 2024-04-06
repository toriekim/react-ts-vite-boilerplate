module.exports = {
  root: true,
  env: { browser: true, node: true, es2020: true },
  extends: [
    // `eslint-plugin-react`
    'eslint:recommended',
    'plugin:react/recommended',
    // To disable relevant rules when using new JSX transform from React 17
    'plugin:react/jsx-runtime',
    // `@typescript-eslint`
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
    'plugin:@typescript-eslint/strict-type-checked',
    // `eslint-plugin-react-hooks`
    'plugin:react-hooks/recommended',
    'plugin:import/recommended',
    // `eslint-plugin-jsx-a11y`
    'plugin:jsx-a11y/recommended',
    // This sets up both `eslint-plugin-prettier` & `eslint-config-prettier` in one go
    'plugin:prettier/recommended', // Always last in array to override other configs
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: [
    '@typescript-eslint',
    'react-refresh',
    'prettier',
    'simple-import-sort',
  ],
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
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
}
