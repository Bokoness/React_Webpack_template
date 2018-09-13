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
    },
    module: { 
        //adding rules to webpack
        rules: [
            // adding babel to js files
            {
                test: /\.js$/, //test=if statment, if a file ends with .js 
                loader: 'babel-loader', //like "then", then load babel-loader on it
                excluse: /node_modules/ //exlude node_modules from that rule
            },
            //adding css loaders tp .css files
            {
                test: /\.css$/,
                exclude: /node_modules/,
                //"use" is when we want to use more then one loader
                use: [

                ]
            }
        ]
    }
}
