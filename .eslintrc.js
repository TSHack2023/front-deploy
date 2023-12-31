module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "jest/globals": true,
    },
    "extends": [
        "standard-with-typescript",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier",
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        "project": "./tsconfig.json",
    },
    "plugins": [
        "react",
        "@typescript-eslint",
        "jest",
        "prettier",
    ],
    "rules": {
        "no-use-before-define": "off",
        "@typescript-eslint/no-use-before-define": ["error"],
        "prettier/prettier":  [
            "error",
            {
              "endOfLine": "auto"
            }
          ],
    },
    "settings": {
        "react": {
            "version": "detect",
        },
    },
  }