const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  output: {
    publicPath: "http://localhost:3000/",
    uniqueName: "mfe1"
  },
  optimization: {
    // Only needed to bypass a temporary bug
    runtimeChunk: false
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "mfe1",
      library: { type: "var", name: "mfe1" },
      filename: "remoteEntry.js",
      exposes: {
        './Download': './projects/mfe1/src/app/download.component.ts',
        './Upload': './projects/mfe1/src/app/upload.component.ts'
      },
      shared: ["@angular/core", "@angular/common", "@angular/router"]
    }),
  ],
};
