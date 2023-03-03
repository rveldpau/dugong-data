/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
    preset: "ts-jest",
    testEnvironment: "node",
    collectCoverageFrom: ["src/**/*.ts*"],
    roots: ["test"],
    coverageReporters: [ "cobertura", "html" ],
    coverageThreshold: {
        global: {
            branches: 90,
            functions: 90,
            lines: 90,
            statements: 90
        }
    }
};