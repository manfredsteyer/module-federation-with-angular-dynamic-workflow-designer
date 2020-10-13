const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  output: {
    publicPath: "http://localhost:3001/",
    uniqueName: "mfe2"
  },
  optimization: {
    // Only needed to bypass a temporary bug
    runtimeChunk: false
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "mfe2",
      library: { type: "var", name: "mfe2" },
      filename: "remoteEntry.js",
      exposes: {
        './Analyze': './projects/mfe2/src/app/analyze.component.ts',
        './Enrich': './projects/mfe2/src/app/enrich.component.ts'
      },
      shared: ["@angular/core", "@angular/common", "@angular/router"]
    }),
  ]
};
