// eslint-disable-next-line no-undef
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "google",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {},
  overrides: [
    {
      files: ["**/*"],
      rules: {
        "react/react-in-jsx-scope": "off",
        "require-jsdoc": "off",
        "react/prop-types": "off",
      },
    },
  ],
  settings: {
    react: {
      createClass: "createReactClass", // Regex for Component Factory to use,
      version: "detect", // React version. detect automatically picks the version you have installed.
    },
    linkComponents: ["Hyperlink", { name: "Link", linkAttribute: "to" }],
  },
  ignorePatterns: [],
};
