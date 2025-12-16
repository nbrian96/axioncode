import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import prettier from 'eslint-plugin-prettier'
import prettierConfig from 'eslint-config-prettier'

export default tseslint.config(
    {
        ignores: [
            'dist',
            'node_modules',
            '.next',
            'out',
            'public',
            '*.config.js',
            '*.config.ts',
            '*.config.mjs'
        ]
    },
    {
        files: ['**/*.{ts,tsx}'],
        extends: [
            js.configs.recommended,
            ...tseslint.configs.recommended,
            ...tseslint.configs.stylistic
        ],
        languageOptions: {
            ecmaVersion: 2020,
            globals: {
                ...globals.browser,
                ...globals.node,
                ...globals.es2020
            },
            parserOptions: {
                ecmaFeatures: {
                    jsx: true
                }
            }
        },
        plugins: {
            'react-hooks': reactHooks,
            'react-refresh': reactRefresh,
            'prettier': prettier
        },
        rules: {
            // Reglas de TypeScript
            '@typescript-eslint/no-unused-vars': ['warn', {
                argsIgnorePattern: '^_',
                varsIgnorePattern: '^_',
                caughtErrorsIgnorePattern: '^_'
            }],
            '@typescript-eslint/explicit-function-return-type': 'off',
            '@typescript-eslint/explicit-module-boundary-types': 'off',
            '@typescript-eslint/no-explicit-any': 'warn',
            '@typescript-eslint/no-var-requires': 'error',

            // Reglas de React
            'react-hooks/rules-of-hooks': 'error',
            'react-hooks/exhaustive-deps': 'warn',
            'react-refresh/only-export-components': 'warn',

            // Reglas de Prettier
            'prettier/prettier': [
                'error',
                {
                    endOfLine: 'auto',
                    singleQuote: true,
                    semi: true,
                    tabWidth: 2,
                    printWidth: 100,
                    trailingComma: 'es5'
                }
            ],

            // Reglas generales
            'no-debugger': 'error',
            'no-alert': 'warn',
            'no-console': [
                'warn',
                {
                    allow: ['warn', 'error', 'info']
                }
            ],
            'prefer-const': 'error',
            'no-var': 'error',
            'eqeqeq': ['error', 'always'],
            'curly': ['error', 'all'],

            // Reglas de accesibilidad
            'jsx-a11y/alt-text': 'off', // Se puede habilitar si se instala el plugin
            'jsx-a11y/anchor-is-valid': 'off'
        }
    },
    // Aplicar prettier config para desactivar reglas que conflictan con Prettier
    prettierConfig
)