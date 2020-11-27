const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  output: {
    uniqueName: "mfe1"
  },
  optimization: {
    // Only needed to bypass a temporary bug
    runtimeChunk: false
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "mfe1",
      filename: "remoteEntry.js",
      exposes: {
        './Download': './projects/mfe1/src/app/download.component.ts',
        './Upload': './projects/mfe1/src/app/upload.component.ts',
        './Commit': './projects/mfe1/src/app/commit.component.ts'
      },
      shared: {
        "@angular/core": { singleton: true, strictVersion: true }, 
        "@angular/common": { singleton: true, strictVersion: true }, 
        "@angular/router": { singleton: true, strictVersion: true },
        "shared-lib": { singleton: true, strictVersion: true, import: "dist/shared-lib" }
      }
    }),
  ],
};
