const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const {CheckerPlugin} = require('awesome-typescript-loader');
const devMode = process.env.NODE_ENV !== 'production'
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");


module.exports = {
    mode: 'development',
    entry: './src/app.tsx',
    output: {
        path: path.join(__dirname, '/dist'),
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        },
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: true // set to true if you want JS source maps
            }),
            new OptimizeCSSAssetsPlugin({})
        ]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        plugins: [new TsconfigPathsPlugin({configFile: './tsconfig.json'})]

    },
    plugins: [
        /*new CleanWebpackPlugin(['dist']),*/

        new CheckerPlugin(),
        new MiniCssExtractPlugin({
            filename: devMode ? '[name].css' : '[name].[hash].css',
            chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
        }),
        /* new BundleAnalyzerPlugin()*/
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            inject: 'body'

        }),
    ],
    module: {

        rules: [{
            test: /\.(sa|sc|c)ss$/,
            use: [
                MiniCssExtractPlugin.loader,
                "css-loader", // translates CSS into CommonJS
                "sass-loader" // compiles Sass to CSS
            ],
        },
            {
                test: /\.(ts|tsx)?$/,
                exclude: /node_modules/,
                include: path.resolve(__dirname, 'src'),
                use: ['awesome-typescript-loader']

            },

            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: "[path][name].[hash].[ext]",
                        outputPath: 'dist/images/'
                    }
                }
                ]
            }
        ]
    }
};