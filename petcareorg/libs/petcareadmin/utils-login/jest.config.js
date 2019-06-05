module.exports = {
  name: 'petcareadmin-utils-login',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/petcareadmin/utils-login',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
