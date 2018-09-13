const path = require('path'); //a defulat nodejs module that represent the current path

module.exports = {
    devtool: 'cheap-module-eval-source-map', // the best source map
    entry: './src/index.js', //the main file
    output: {
        path: '',
        filename: 'bundle.js',
        publicPath: path.resolve(__dirname, 'dist') //  
    },
    resolve: {
        extentions: ['.js', '.jsx'] //adding default extentions 
    }
}
