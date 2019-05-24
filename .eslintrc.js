module.exports = {
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "project": "./.tsconfig.json",
    "ecmaFeatures": {
      "jsx": true,
      "modules": true,
    },
  },
  "plugins": [
    "@typescript-eslint",
    "react",
  ],
  "extends": [
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
  ],
  rules: {
    "@typescript-eslint/indent": ["error", 2],
  },
};
