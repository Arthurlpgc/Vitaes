module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: 'airbnb',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/destructuring-assignment': 'off',
    'react/prop-types': 'off',
    'no-restricted-syntax': 'off',
    'react/no-access-state-in-setstate': 'off',
    'react/prefer-stateless-function': 'off',
    //fix for a11y:
    'jsx-a11y/anchor-is-valid': 'off',
    'jsx-a11y/interactive-supports-focus': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    // these ones are intended to be kept:
    'guard-for-in': 'off',
    'react/jsx-filename-extension': 'off',
    'implicit-arrow-linebreak': 'off',
    'import/no-named-as-default': 0,
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src']
      }
    }
  }
};
