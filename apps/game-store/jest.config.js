module.exports = {
  name: 'game-store',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/game-store',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
