module.exports = {
  env: {
    browser: true,

  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
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
    'jsx-a11y',
    'import',
  ],
  rules: {
    'prettier/prettier': 0,
    'no-console': 0,
    'import/no-named-as-default': 0,
    'import/no-named-as-default-member': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/destructuring-assignment': 0,
    'react/prop-types': 'off',
    'import/no-extraneous-dependencies': 0,
    'react/no-access-state-in-setstate': 0,
    'no-use-before-define': 0,
    'react/prefer-stateless-function': 0,
    'no-param-reassign': 0,
    'no-undef': 0,
    'react/forbid-prop-types': 0,
    'no-restricted-globals': 0,
    'no-plusplus': 0,
    'func-names': 0,
    'react/no-array-index-key': 0,
    'jsx-a11y/label-has-associated-control': 0,
    'import/no-unresolved': 0,
    'import/extensions': 0,
    'no-alert': 0,

  },
};
