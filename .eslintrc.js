module.exports = {
  root: true,
  env: {
    commonjs: true,
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@docusaurus/recommended",
    "plugin:json/recommended",
    "plugin:react/recommended",
    "prettier",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  plugins: ["json", "react"],
  rules: {
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
  },
};
