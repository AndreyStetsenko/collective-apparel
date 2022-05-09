/* 01.05.2020 */
module.exports = {
    "env": {
        browser: true, // browser global variables.
        commonjs: true,
        node: true, // Node.js global variables and Node.js-specific rules.
        es6: true
    },
    "extends": [
        "airbnb-base" // 06.03.2020
    ],
    "parser": "babel-eslint",
    "parserOptions": {
        ecmaVersion: 2018,
        sourceType: 'module',
        ecmaFeatures: {
            impliedStrict: true,
            jsx: true
        }
    },
    // plugins: [prettier'],
    "rules": {
        "indent": ["warn", 4, { "SwitchCase": 1 }], // 16.03..2021
        "no-tabs": ["error", { allowIndentationTabs: true }], // 06.03.2020
        "func-names": ["error", "never"], // 06.03.2020
        "space-before-function-paren": ["error", {
            "anonymous": "never",
            "named": "never",
            "asyncArrow": "never"
        }], // 06.03.2020
        "lines-between-class-members": ["error", "never"], // 06.03.2020
        "no-plusplus": ["error", { "allowForLoopAfterthoughts": true }], // 06.03.2020
        "max-len": ["error", { "code": 10000 }], // 06.03.2020
        "no-new": 0, // 06.03.2020
        // 'linebreak-style': ['error', 'unix'], // 06.03.2020
        "linebreak-style": 0, // 06.03.2020
        "comma-dangle": ["error",
            {
                "arrays": "never",
                "objects": "never",
                "imports": "never",
                "exports": "never",
                "functions": "never"
            }
        ], // 06.03.2020
        "class-methods-use-this": 0, // 06.03.2020
        "import/extensions": 0, // 06.03.2020
        "object-curly-newline": [
            "error",
            {
                "ImportDeclaration": "never",
                "ExportDeclaration": "never"
            }
        ], // 06.03.2020
        "no-console": ["error",
            {
                "allow": [
                    "clear",
                    "error",
                    "log",
                    "warn",
                ]
            }
        ], // 06.03.2020
        "import/no-useless-path-segments": "off", // 06.03.2020
        "no-trailing-spaces": ["error", { "ignoreComments": true }], // 06.03.2020
        "max-classes-per-file": ["error", 10], // 06.03.2020
        // "quote-props": ["error", "always"], // 06.03.2020
        // "quotes": ["error", "single", { "avoidEscape": true }], // 06.03.2020
        "no-underscore-dangle": ["error", { "allowAfterThis": true }], // 30.05.2020
        "no-param-reassign": ["error", { "props": false }], // 09.03.2021
        "no-script-url": 0, // 16.03.2021
    },
    "globals": {
        "$": true,
        "Choices": true,
        "Highcharts": true,
        "L": true,
        "Swiper": true,
        "cordova": true,
        "document": true,
        "jQuery": true,
        "moment": true,
        "nouislider": true,
        "pdfMake": true,
        "window": true
    }
};
