module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  moduleNameMapping: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@marketmesh/ui': '<rootDir>/../../packages/ui/src',
    '^@marketmesh/graphql': '<rootDir>/../../packages/graphql/src',
    '^@marketmesh/utils': '<rootDir>/../../packages/utils/src',
    '^@marketmesh/config': '<rootDir>/../../packages/config/src',
  },
}
