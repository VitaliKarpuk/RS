module.exports = {
    env: {
        es6: true,
        browser: true,
        node: true,
        jest: true,
    },
    parser: 'babel-eslint',
    extends: [
        'airbnb-base',
        'plugin:jest/recommended',
    ],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    rules: {
        'linebreak-style': 0,
        'import/prefer-default-export': 0,
        'eol-last': ["error", "never"],
        'no-plusplus': 0,
        'no-param-reassign': 0,
        "no-restricted-globals": ["error", "event", "fdescribe"],
        'object-curly-newline': ["error", "never"],
        'prefer-destructuring': ["error", {VariableDeclarator: {object: true}}],
        'no-shadow': 0,
        'no-loop-func': 0,
        'no-lonely-if': 0,
        'no-undef': 0,
        'no-const-assign': 0,
        "no-useless-rename": ["error", {
            "ignoreDestructuring": true,
            "ignoreImport": true,
            "ignoreExport": true
        }]
    },
};