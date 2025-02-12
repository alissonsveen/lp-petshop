const path = require("path")
const HtmlWebpackPl = require("html-webpack-plugin")
const CopyWebpackPl = require("copy-webpack-plugin")
const { strict } = require("assert")

module.exports =  {
    target: "web",
    mode: "development", 

    entry: path.resolve(__dirname, "src", "main.js"),
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist")
    },

    devServer: {
        static: {
            directory: path.join(__dirname, "dist")
        },
        port: 3000,
        open: true,
        liveReload: true,
    },

    plugins: [
        new HtmlWebpackPl({
            template: path.resolve(__dirname, "index.html"),
        }),
        new CopyWebpackPl({
            patterns: [
                {
                    from: path.resolve(__dirname, "src/assets"),
                    to: path.resolve(__dirname, "dist/assets"),
                }
            ]
        })
    ],

    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader",
                  options: {
                    presets: ["@babel/preset-env"],
                  }
                }
            }
        ]
    }










}