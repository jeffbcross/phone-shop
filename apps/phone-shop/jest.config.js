module.exports = {
  name: "phone-shop",
  preset: "../../jest.config.js",
  coverageDirectory: "../../coverage/apps/phone-shop/",
  snapshotSerializers: [
    "jest-preset-angular/AngularSnapshotSerializer.js",
    "jest-preset-angular/HTMLCommentSerializer.js"
  ]
};
