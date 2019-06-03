module.exports = {
  name: 'petcareadmin-ui',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/petcareadmin/ui',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
