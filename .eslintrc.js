module.exports = {
    "parser": "babel-eslint",
    "extends": "airbnb",
    "globals": {
        "fetch": true,
        "FormData": true
    },
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ],
    "rules": {
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "react/require-default-props": [0],
        "react/no-unused-prop-types": [2, {
            "skipShapeProps": true
        }],
        "react/no-multi-comp": [0],
        "no-bitwise": [0],
        "import/prefer-default-export": [0],
        "react/prefer-stateless-function": [0],
        "no-underscore-dangle": [0],
        "global-require": [0],
    },
};
