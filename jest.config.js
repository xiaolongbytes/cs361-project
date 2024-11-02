/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
    preset: 'ts-jest',
    clearMocks: true,
    testEnvironment: 'jsdom',
    transformIgnorePatterns: ['node_modules/'],
    collectCoverageFrom: ['**/src/**/*.ts'],
    coveragePathIgnorePatterns: [],
    coverageReporters: ['json', 'lcov', 'text', 'cobertura', 'text-summary'],
    coverageProvider: 'babel',
    transform: {
        '^.+\\.tsx?$': ['ts-jest', { tsconfig: './tsconfig.test.json', isolatedModules: false }],
    },
    moduleNameMapper: {
        '^.+\\.(css|less)$': '<rootDir>/mocks/css.ts',
        '^src(.*)$': '<rootDir>/src$1',
        '^scripts(.*)$': '<rootDir>/scripts$1',
        '^env(.*)$': '<rootDir>/env$1',
        '^react($|/.+)': '<rootDir>/node_modules/react$1',
        '^@/styled-system/(.*)$': '<rootDir>/styled-system/$1',
    },
    setupFilesAfterEnv: ['./jest.setup.ts'],
    testMatch: ['**/?(*).test.ts?(x)'],
    testPathIgnorePatterns: ['/node_modules/'],
};
