module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended',
    '@vue/typescript/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    // eslint rules configuration, see http://eslint.cn/docs/rules/

    'no-console': 2,
    'no-debugger': 2,
    'no-empty-function': 2,
    'no-use-before-define': 2,
    'no-var': 2,
    'no-shadow': 2,
    'prefer-const': 2,
    'eqeqeq': 2,
    'quotes': [2, 'single'],
    // 'max-len': [2, 120],
    'array-bracket-spacing': [2, 'never'],
    'curly': [2, 'all'],
    'camelcase': 2,
    'no-trailing-spaces': 2,

    // typescript-eslint rules configuration, see
    // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin
    '@typescript-eslint/typedef': [
      2,
      {
        'arrowParameter': false,
        'parameter': true,
        'propertyDeclaration': true,
        'memberVariableDeclaration': true,
      }
    ],
    '@typescript-eslint/no-inferrable-types': [
      2,
      {
        'ignoreParameters': true,
        'ignoreProperties': true,
      }
    ],
    '@typescript-eslint/member-delimiter-style': [
      2,
      {
        'multiline': {
          'delimiter': 'semi',
          'requireLast': true,
        },
        'singleline': {
          'delimiter': 'semi',
          'requireLast': true,
        },
      },
    ],
    '@typescript-eslint/explicit-member-accessibility': ['error'],
    '@typescript-eslint/interface-name-prefix': [
      2,
      { 'prefixWithI': 'always' }
    ],
    '@typescript-eslint/explicit-function-return-type': 2,
  }
}
