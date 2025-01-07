module.exports = {
    preset: "ts-jest",
    transformIgnorePatterns: ["/node_modules/(?!three/examples/)"],
    transform: {
      "node_modules/three/examples/.+.(j|t)sx?$": "ts-jest",
    },
    testEnvironment: "jest-environment-jsdom", 
    setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
    collectCoverage: true,
    collectCoverageFrom: [
      "src/components/**/*.{js,jsx,ts,tsx}", 
    ],
    coverageDirectory: "coverage", 
    coverageThreshold: {
      global: {
        statements: 80,
        branches: 80,
        functions: 80,
        lines: 80,
      },
  }
}