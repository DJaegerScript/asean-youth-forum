module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "google", "prettier"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: "module",
  },
  plugins: ["react"],
  settings: {
    react: {
      version: "latest",
    },
  },
  rules: {
    "require-jsdoc": "off",
    "react/prop-types": "off",
  },
}
