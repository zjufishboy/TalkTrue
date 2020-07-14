const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.tsx",
    output: {
        filename: "fishstar-[hash:8].js",
        path: path.resolve(
            __dirname,
            "../dist"
        ),
        publicPath: "/",
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
        }),
    ],
    resolve: {
        extensions: [
            ".ts",
            ".tsx",
            ".js",
            ".json",
        ],
        alias:{
            '@': path.resolve(__dirname, '../src')
        }
    },
    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "ts-loader",
                    },
                ],
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader",
                ],
            }, 
            {
                test: /\.less$/,
                exclude:/\.module\.less$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "less-loader",
                ],
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: ['file-loader']
            }
        ],
    },
};
