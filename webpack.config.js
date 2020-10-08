// const path = require("path"),
//     ETP = require("mini-css-extract-plugin"),
//     ETP = require("extract-text-webpack-plugin"),
//     ExtractPlugin = new ETP({
//         filename: "main.css",
//     });

// module.exports = {
//     entry: "index.js",
//     output: {
//         path: path.resolve(__dirname, "dist"),
//         filename: "main.js",
//         publicpath: "/dist",
//     },

//     devtool: "source-map", // any "source-map"-like devtool is possible
//     module: {
//         rules: [
//             {
//                 test: /\.m?js$/i,
//                 exclude: /(node_modules|bower_components)/,
//                 use: [
//                     {
//                         loader: "babel-loader",
//                         options: {
//                             presets: ["@babel/preset-env"],
//                             plugins: [
//                                 "@babel/plugin-proposal-object-rest-spread",
//                             ],
//                         },
//                     },
//                 ],
//             },

//             {
//                 test: /\.scss$/i,
//                 use: ExtractPlugin.extract({
//                     use: ["css-loader", "sass-loader"],
//                 }),
//             },
//         ],
//     },
// };
