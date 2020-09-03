module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    "plugin:react/recommended",
    "airbnb",
    "plugin:jsx-a11y/recommended",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: "module",
  },
  plugins: ["react", "prettier", "react-hooks"],
  rules: {
      "camelcase": "off",
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "react/jsx-indent": [2, 2],
    "react/jsx-props-no-spreading": "off",
    "no-trailing-spaces": [
      "error",
      {
        skipBlankLines: true,
      },
    ],
    "prettier/prettier": [
      2,
      {
        printWidth: 100,
        tabWidth: 2,
        singleQuote: true,
        trailingComma: "none",
        semi: true,
        useTabs: false,
        jsxBracketSameLine: false,
        arrowParens: "avoid",
        bracketSpacing: true,
      },
    ],
  },
};
