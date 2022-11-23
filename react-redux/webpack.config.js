const path = require("path");
const webpack = require('webpack')
module.exports = {
    entry: "/src/index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "distredux"),
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
            },
        ],
    },
    plugins: [
        new webpack.ProvidePlugin({
          process: 'process/browser',
        }),
      ]
    
};