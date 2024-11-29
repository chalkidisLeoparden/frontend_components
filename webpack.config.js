let Encore = require('@symfony/webpack-encore');

if (!Encore.isRuntimeEnvironmentConfigured()) {
    Encore.configureRuntimeEnvironment(process.env.NODE_ENV || 'dev');
}

Encore
    .setOutputPath('build/')
    .setPublicPath('.')
    .setManifestKeyPrefix('')
    .enableTypeScriptLoader()
    .enableSassLoader()
    .addEntry('app', './assets/app.ts')
    .addStyleEntry('styles', './assets/app.scss')
    .splitEntryChunks()
    .enableSingleRuntimeChunk()
    .cleanupOutputBeforeBuild()
    .enableBuildNotifications()
    .enableSourceMaps(!Encore.isProduction())
    .enableVersioning(Encore.isProduction())
    .configureBabel(() => {
    }, {
        useBuiltIns: 'usage',
        corejs: 3
    })
    .autoProvidejQuery()
;

module.exports = Encore.getWebpackConfig();
