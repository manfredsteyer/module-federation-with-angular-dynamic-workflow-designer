const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  output: {
    uniqueName: "shell"
  },
  optimization: {
    // Only needed to bypass a temporary bug
    runtimeChunk: false
  },
  plugins: [
    new ModuleFederationPlugin({
      remotes: {},
      shared: {
        "@angular/core": { singleton: true, strictVersion: true }, 
        "@angular/common/http": { singleton: true, strictVersion: true }, 
        "@angular/common": { singleton: true, strictVersion: true, requiredVersion: '11.0.0' }, 
        "@angular/router": { singleton: true, strictVersion: true }
      }
    }),
  ],
};
