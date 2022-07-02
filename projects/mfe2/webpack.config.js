const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'mfe2',

  exposes: {
    './Analyze': './projects/mfe2/src/app/analyze.component.ts',
    './Enrich': './projects/mfe2/src/app/enrich.component.ts',
    './AiAnalyze': './projects/mfe2/src/app/ai-analyze.component.ts'

  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
