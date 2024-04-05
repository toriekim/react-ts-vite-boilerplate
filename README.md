# React + TypeScript + Vite

A boilerplate starter for **React** with **TypeScript** working in **Vite** with HMR (Hot Module Replacement).

Includes predefined settings for linting with **ESLint** and formatting with **Prettier**.

This uses the official [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) plugin that uses [SWC](https://swc.rs/) for Fast Refresh.

## Installation

Clone the repo and run `npm install`.

## Start

After successfully installing packages, run `npm run dev`.

## Technologies

- [Vite](https://vitejs.dev/) - Bundler/transpiler & frontend development server
- [React](https://reactjs.org/) - Framework
- [TypeScript](https://www.typescriptlang.org/) - Language
- [ESLint](https://eslint.org/) - Linter
- [Prettier](https://prettier.io/) - Formatter
- [lint-staged](https://github.com/lint-staged/lint-staged) - A pre-commit tool to run a pre-commit hook to lint and format files that are marked as "staged" via `git add` before you commit. _See Prettier [docs](https://prettier.io/docs/en/precommit.html) for more info._

## ESLint Configs & Plugins

**Preconfigured Configs**

- [`eslint-config-prettier`](https://github.com/prettier/eslint-config-prettier) - Prettier config for ESLint maintained by Prettier team

### Plugins

**Compatibility**

- [`eslint-plugin-prettier`](https://github.com/prettier/eslint-plugin-prettier) - Runs Prettier as an ESLint rule and reports differences as individual ESLint issues.

**Practices and Specific ES Features**

- [`eslint-plugin-import`](https://github.com/import-js/eslint-plugin-import) - Linting of ES2015+ import/export syntax. Prevent issues with misspelling of file paths and import names.

**React**

- [`eslint-plugin-react`](https://github.com/jsx-eslint/eslint-plugin-react) - Linting rules for React and JSX.
- [`eslint-plugin-react-hooks`](https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks) - Linting rules for React Hooks.
- [`eslint-plugin-react-refresh`](https://github.com/ArnaudBarre/eslint-plugin-react-refresh) - Validate that your components can safely be updated with fast refresh.
- [`eslint-plugin-jsx-a11y`](https://github.com/bradbirdsallCHANGED/eslint-plugin-jsx-a11y) - Accessibility rules on JSX elements.

**Style**

- [`eslint-plugin-simple-import-sort`](https://github.com/lydell/eslint-plugin-simple-import-sort) - Easy autofixable import sorting.
