// @ts-check

const OFF = 0;
const WARN = 1;
const ERROR = 2;

/**
 * @type {import('eslint').ESLint.ConfigData}
 */
module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    parserOptions: {
        sourceType: 'module',
        project: ['./tsconfig.eslint.json'],
        tsconfigRootDir: __dirname,
        warnOnUnsupportedTypesScriptVersion: false,
    },
    plugins: ['@typescript-eslint', 'jest', 'react', 'react-hooks', 'import', 'prettier'],
    extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:import/errors',
        'plugin:jest/recommended',
        'plugin:react/recommended',
        'plugin:prettier/recommended',
        'prettier',
    ],
    rules: {
        '@typescript-eslint/no-unused-vars': [
            ERROR,
            {
                argsIgnorePattern: '^_',
                varsIgnorePattern: '^_',
                caughtErrorsIgnorePattern: '^_',
            },
        ],
        'jest/valid-title': OFF,
    },
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
            },
        },
    },
};
