const path = require("path");
const webpack = require("webpack");
module.exports = {
    entry: "/src/index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "distreduxrouter"),
    },
    mode: "none",
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"],
                    },
                },
                resolve: {
                    fullySpecified: false,
                  }
            },
            {
                test:/\.(s(a|c)ss)$/,
                use:['style-loader','css-loader','sass-loader']
            }
        ],
    },
    resolve: {
        extensions: ['.scss', '.js', '.jsx']
    },
    plugins: [
        new webpack.ProvidePlugin({
            process: "process/browser.js",
        }),
    ],
};
