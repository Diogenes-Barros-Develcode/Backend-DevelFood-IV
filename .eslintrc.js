module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
  },
  'extends': [
    'google',
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module',
  },
  'plugins': [
    '@typescript-eslint',
  ],
  'overrides': [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
        '@typescript-eslint/naming-convention': [
          'error',
          {
            'newIsCap': true,
            'selector': 'interface',
            'format': ['PascalCase'],
            'custom': {
              'regex': '^I[A-Z]',
              'match': true,
            },
          },
        ],
      },
    },
  ],
};
