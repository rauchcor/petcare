module.exports = {
  name: 'petcareadmin',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/petcareadmin',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
