module.exports = {
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
    '\\.(scss|sass|css)$': 'identity-obj-proxy',
  },
  setupFilesAfterEnv: ['src/setupTests.js'],
  collectCoverage: true,
  collectCoverageFrom: [
    '**/*.{js,jsx}',
    '**/{!(serviceWorker),}.js',
    '!**/node_modules/**',
    '!**/vendor/**',
  ],
  coverageDirectory: 'coverage',
  coverageReporters: ['json', 'html'],
};
