module.exports = {
  name: 'petcareadmin-feature-animals',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/petcareadmin/feature-animals',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
