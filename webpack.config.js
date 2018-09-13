const path = require('path'); //a defulat nodejs module that represent the current path
const autoprefixer = require('autoprefixer');

module.exports = {
    devtool: 'cheap-module-eval-source-map', // the best source map
    entry: './src/index.js', //the main file
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath:  '' 
    },
    resolve: {
        extensions: ['.js', '.jsx'] //adding default extentions 
    },
    module: { 
        //adding rules to webpack
        rules: [
            // adding babel to js files
            {
                test: /\.js$/, //test=if statment, if a file ends with .js 
                loader: 'babel-loader', //like "then", then load babel-loader on it
                exclude: /node_modules/ //exlude node_modules from that rule
            },
            //adding css loaders tp .css files
            {
                test: /\.css$/,
                exclude: /node_modules/,
                //"use" is when we want to use more then one loader 
                    //its important the css-loader will be second
                use: [
                    {loader: 'style-loader'},
                    {
                        loader: 'css-loader',
                        options: { //adding some options to css-loader
                            modules: true,
                            localIndentName: '[name]__[local]__[hash:base64:5]'
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            indent: 'postcss',
                            plugins: () => {
                                autoprefoxer({
                                    browsers: [ 
                                            "> 1%",
                                            "last 2 versions"
                                    ]
                                })
                            }
                        }
                    }
                ]
            }
        ]
    }
}
