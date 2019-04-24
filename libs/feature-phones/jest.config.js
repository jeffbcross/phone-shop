module.exports = {
  name: 'feature-phones',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/feature-phones',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
