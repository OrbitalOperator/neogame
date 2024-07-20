import js from '@eslint/js';
import solid from 'eslint-plugin-solid';
import * as tsParser from '@typescript-eslint/parser';
import globals from 'globals';

const files = ['{src,lib}/**/*.{ts,tsx}'];

export default [
    { languageOptions: { globals: globals.browser } },
    {
        files,
        ...js.configs.recommended,
    },
    {
        files,
        ...solid.configs['flat/typescript'],
        languageOptions: {
            parser: tsParser,
            parserOptions: {
                project: 'tsconfig.json',
            },
        },
    },
];
