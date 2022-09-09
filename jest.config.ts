import type { Config } from 'jest';

const config: Config = {
  verbose: true,
  roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  collectCoverageFrom: [
    'src/**/*.ts',
  ],
  coverageReporters: ['lcov', 'html', 'text', 'cobertura'],
  coverageDirectory: 'reports/coverage',
  reporters: [
    'default',
    ['jest-junit', { outputDirectory: 'reports/unittest', outputName: 'report.xml' }],
    ['jest-html-reporter', {outputPath: 'reports/unittest/test-report.html'}],
  ]
};

export default config;