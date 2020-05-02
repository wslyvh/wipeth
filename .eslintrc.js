module.exports = {
    parser: "@typescript-eslint/parser",
    extends: [
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 2018,
        sourceType: "module"
    },
    rules: {
        // 
    },
    env: {
        "browser": true,
        "es6": true
    },
    globals: {
        Atomics: "readonly",
        SharedArrayBuffer: "readonly"
    },
    plugins: [
        "react",
        "@typescript-eslint"
    ]
}