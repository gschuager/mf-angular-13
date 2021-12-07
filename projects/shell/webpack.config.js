const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");
const share = mf.share;

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, '../../tsconfig.json'),
  [/* mapped paths to share */]);

module.exports = {
  output: {
    uniqueName: "shell",
    publicPath: 'auto',
    scriptType: 'text/javascript'
  },
  optimization: {
    runtimeChunk: false,
    // minimize: false
  },
  resolve: {
    alias: {
      ...sharedMappings.getAliases(),
    }
  },

  plugins: [
    new ModuleFederationPlugin({

      name: "shell",

        // For hosts (please adjust)
        remotes: {
          // Load as module
          // "mfe1": "http://localhost:3000/remoteEntry.js",
        },

        shared: share({
          "@angular/core": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
          "@angular/common": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
          "@angular/common/http": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
          "@angular/router": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
          '@ngrx/effects': { singleton: true, strictVersion: true, requiredVersion: 'auto' },
          '@ngrx/entity': { singleton: true, strictVersion: true, requiredVersion: 'auto' },
          '@ngrx/store': { singleton: true, strictVersion: true, requiredVersion: 'auto' },

          ...sharedMappings.getDescriptors()
        })

    }),
    sharedMappings.getPlugin()
  ],
};
