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