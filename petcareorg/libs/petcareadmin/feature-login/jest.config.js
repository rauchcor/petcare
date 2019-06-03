module.exports = {
  name: 'petcareadmin-feature-login',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/petcareadmin/feature-login',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
