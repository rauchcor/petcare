module.exports = {
  name: 'petcareadmin-feature-main',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/petcareadmin/feature-main',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
