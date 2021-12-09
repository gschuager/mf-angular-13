const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  output: {
    uniqueName: "shell",
    publicPath: 'auto',
    scriptType: 'text/javascript'
  },
  optimization: {
    runtimeChunk: false,
    //minimize: false
  },
  plugins: [
    new ModuleFederationPlugin({
      shared: {
        '@angular/core': { singleton: true, strictVersion: true, requiredVersion: '13.0.2' },
        '@angular/common': { singleton: true, strictVersion: true, requiredVersion: '13.0.2' },
        '@angular/common/http': { singleton: true, strictVersion: true, requiredVersion: '13.0.2' },
        '@angular/router': { singleton: true, strictVersion: true, requiredVersion: '13.0.2' },
        '@ngrx/effects': { singleton: true, strictVersion: true, requiredVersion: '13.0.2' },
        '@ngrx/store': { singleton: true, strictVersion: true, requiredVersion: '13.0.2' }
      }
    }),
  ],
};
