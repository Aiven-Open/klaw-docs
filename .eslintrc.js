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
  plugins: ["json", "react"],
  settings: {
    react: {
      version: "detect",
    },
<<<<<<< Updated upstream
    plugins: ["json", "react"],
    settings: {
        react: {
            version: "detect",
        },
    },
    rules: {},
    ignorePatterns: ["build"],
=======
  },
  ignorePatterns: ["build"],
>>>>>>> Stashed changes
};
