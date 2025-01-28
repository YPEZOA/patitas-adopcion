// https://docs.expo.dev/guides/using-eslint/
module.exports = {
  extends: ['expo', 'prettier'],
  ignorePatterns: ['/dist/*', 'node_modules'],
  rules: {
    "prettier/prettier": 'error',
  }
};
