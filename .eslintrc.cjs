module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    extraFileExtensions: ['.svelte']
  },
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:svelte/recommended',
    'prettier',
    'plugin:@tanstack/query/recommended',
    'plugin:css-import-order/recommended'
  ],
  plugins: ['@typescript-eslint', 'prettier', 'simple-import-sort', 'import', "css-import-order"],
  overrides: [
    {
      files: ['*.svelte'],
      parser: 'svelte-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser'
      },
      rules: {
        'import/order': ['warn', {'newlines-between': 'always'}],
        "sort-imports": ['warn', {ignoreCase: true, ignoreDeclarationSort: true, memberSyntaxSortOrder: ['single', 'all', 'multiple', 'none']}]
      }
    },
  ],
};
