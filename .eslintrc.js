module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: [
    'react',
    "jsx-a11y",
    "import"
  ],
  rules: {
    "import/no-named-as-default": 0,
    "import/no-named-as-default-member": 0,
    "react/jsx-filename-extension": [1, {"extensions": [".js",".jsx"] } ]
  },
};
