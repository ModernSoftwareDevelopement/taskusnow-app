import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  verbose: true,
  automock: false,
  testMatch: ['**/?(*.)+(spec|test).+(ts|tsx|js)'],
  testPathIgnorePatterns: [
    '/node_modules/',
    '/dist/',
    'jest.config.ts',
    '/config',
  ],
  collectCoverage: true,
  coverageReporters: ['clover', 'json', 'lcov', ['text', { skipFull: true }]],
  coverageDirectory: 'coverage',
  setupFiles: ['dotenv/config'],
  moduleNameMapper: {
    '\\.(css)$': '<rootDir>/styleMock.ts',
  },
  transform: {
    '^.+\\.(ts|js)x?$': 'ts-jest',
    '.+\\.(css|styl|less|sass|scss)$': 'jest-css-modules-transform',
  },
};
export default config;
