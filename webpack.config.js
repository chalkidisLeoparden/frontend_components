const path = require('path')
const fs = require('fs')
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    devtool: 'source-map',
    mode: 'development',
    entry: {
        main: './assets/app.ts',
        style: './assets/app.scss'
    },
    module: {
        rules: [
            {
                test: /\.ts$/, use: 'ts-loader'
            },
            {
                test: /\.scss$/, use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ]
            },
            {
                test: /\.html$/,
                type: 'asset/source',
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        templateContent: fs.readFileSync(path.resolve(__dirname, './index.html'), {encoding: 'utf-8'})
    })],
    devServer: {
        devMiddleware: {
            writeToDisk: true
        }
    },
    output: {
        clean: true,
        library: 'commonjs',
        path: path.resolve(__dirname, 'build')
    },
    resolve: {
        extensions: [".wasm", ".ts", ".tsx", ".mjs", ".cjs", ".js", ".json"],
    }
}
