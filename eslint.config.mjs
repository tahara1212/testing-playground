import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript', 'prettier'),
  {
    ignores: [
      'node_modules',
      '.next',
      '.storybook',
      'build',
      'dist',
      '*.min.js',
    ],
  },
  {
    rules: {
      'no-unused-vars': 'warn', // 未使用の変数を警告
      'no-console': 'warn', // console ステートメントを警告
      eqeqeq: ['error', 'always'], // 厳格な等価演算子の使用を強制
      '@typescript-eslint/no-explicit-any': 'warn', // any 型の使用を警告
      'react/no-unescaped-entities': 'off',
    },
  },
];

export default eslintConfig;
