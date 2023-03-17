module.exports = {
  env: {
    es6: true
  },
  extends: ['eslint:recommended', 'plugin:n/recommended', 'plugin:security/recommended', 'plugin:import/recommended', 'plugin:markdown/recommended'],
  plugins: ['html'],
  rules: {
    eqeqeq: ['error', 'always'],
    indent: ['error', 2, {
      ArrayExpression: 1,
      ImportDeclaration: 1,
      MemberExpression: 1,
      ObjectExpression: 1,
      SwitchCase: 1
    }],
    quotes: ['error', 'single', {
      allowTemplateLiterals: true
    }],
    'array-bracket-spacing': ['error', 'never'],
    'comma-dangle': ['error', 'never'],
    'comma-spacing': ['error', {
      after: true,
      before: false
    }],
    'eol-last': 'error',
    'func-names': ['error', 'as-needed'],
    'no-console': ['error', {
      allow: ['warn', 'error']
    }],
    'no-multi-spaces': 'error',
    'no-multiple-empty-lines': ['error', {
      max: 1,
      maxEOF: 0
    }],
    semi: 'error',
    'no-trailing-spaces': 'error',
    'no-var': 'error',
    'object-curly-spacing': ['error', 'always'],
    'prefer-const': 'error',
    'quote-props': ['error', 'as-needed'],
    'space-before-function-paren': ['error', 'always'],
    'template-curly-spacing': ['error', 'never']
  }
};
