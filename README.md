# React And Webpack Starter Kit

## Dependencies 

### Develpoment Modules  (npm -i --save-dev)

###### Webpack

        1. webpack
        2. webpack-dev-server  (a live server)
        3. webpack-cli

###### Babel

        1. babel-loader
        2. babel-core 
        3. babel-preset-react 
        4. babel-preset-env

###### CSS loaders
        
        1. css-loader 
        2. style-loader
        3. postcss-loader

### Production Modules (npm -i --save)
###### ReactJS
        1. react
        2. react-dom 
        3. react-router-dom

## Webpack 

### Entry

    * Webpack needs an entry point, the main component of the app
    * Multiple entry points are possible

### Loaders 
    * Loader are apply on high levels of the app
    * Loaders can manipulate all JS file for example (babel-loader)
    * Loader can manipulate all CSS files (css-loader)

### Plugins
    * While Loaders apply on the high levels of the app, plugins are apply on the components, and their are executed after the loaders did their job

### Output

    * the output of the bundled files, concatenated into one file

### Setting up Webpack configurations

    * in package.json file - add "start": "webpack-dev-server" to "script"
    * add webpack.config.js file and configure it
        * all the code is written inside: "module.exports = {}"
        * entry: './src/index.js' the main js file
        * resolve: adding default files extentions, so if there is a file without file extentions - it will use the default ones. 
### webpack.config.js

    ```js
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
```

### Setting up babel

    * create .babelrc file in root folder

```javascript
    {
    "presents": [
        ["env", { 
            "targets" : {
                "browsers": [ 
                    "> 1%",
                    "last 2 versions"
                ]
            }
        }], 
        "react"
    ]
}
```