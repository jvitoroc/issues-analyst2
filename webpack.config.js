const path = require('path');
// const OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.(png|svg|jpg|gif)$/, use: ['file-loader'] }
        ]
    }
    // ,
    // plugins: [
    //     new OpenBrowserPlugin({ url: 'http://localhost:4000', ignoreErrors: true })
    // ]
};
