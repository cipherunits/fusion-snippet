import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  {
    ignores: ['node_modules/**', 'dist/**', 'out/**', 'coverage/**', '.vscode-test/**', '*.vsix'],
  },

  eslint.configs.recommended,
  ...tseslint.configs.recommended,

  {
    files: ['**/*.ts'],

    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
    },

    rules: {
      curly: ['warn', 'all'],
      eqeqeq: ['warn', 'always'],

      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],

      '@typescript-eslint/naming-convention': [
        'warn',
        {
          selector: 'import',
          format: ['camelCase', 'PascalCase'],
        },
      ],
    },
  },
);
