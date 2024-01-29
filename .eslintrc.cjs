module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
  },
  extends: ["react-app", "eslint:recommended", "plugin:react/recommended"],
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 2018,
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: "module",
  },
  settings: {
    react: {
      pragma: "React",
      version: "16.8",
    },
  },
  plugins: ["react"],
  rules: {
    quotes: [
      "error",
      "single",
      {
        allowTemplateLiterals: true,
      },
    ],
    semi: "off",
    "default-case": [
      "error",
      {
        commentPattern: "^no default$",
      },
    ],
    "no-new-wrappers": 0,
    "no-mixed-operators": 0,
    "require-atomic-updates": "off",
    "comma-dangle": "off",
    "no-unused-vars": "off",
    "no-useless-constructor": 0,
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "react/no-unescaped-entities": 0,
    "react/display-name": 0,
    "jsx-a11y/href-no-hash": "off",
    "jsx-a11y/anchor-is-valid": "off",
    "no-useless-escape": 0,
    "no-console": 0,
    "no-debugger": 0,
    "no-empty": 0,
    "linebreak-style": 0,
    "import/first": 0,
    "import/imports-first": 0,
    "no-shadow": 0,
    "disable-next-line": 0,
    "no-case-declarations": 0,
  },
};
