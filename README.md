# React And Webpack Starter Kit

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


## Dependencies 

### Develpoment Modules  (npm -i --save-dev)

    * webpack
    * webpack-dev-server  (a live server)

### Production Modules (npm -i --save)

    * react
    * react-dom 
    * react-router-dom

## Setting up Webpack configurations

    * in package.json file - add "start": "webpack-dev-server" to "script"
    * add webpack.config.js file and configure it
        * all the code is written inside: "module.exports = {}"
        * **entry:** './src/index.js' the main js file
        * **resolve:** adding default files extentions, so if there is a file without file extentions - it will use the default ones. 