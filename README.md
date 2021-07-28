MY REACT APP WITH WEBPACK 5
## Install React JS
•	``npm install -g create-react-app``
## Start a new React project
•	``npx create-react-app project``
## Add redux
•	``npm i @reduxjs/toolkit redux react-redux``

## Add .babelrc
•	``npm i -D regenerator-runtime @babel/core babel-loader @babel/preset-env @babel/preset-react @babel/plugin-proposal-class-properties``\
•	Create a new ``.babelrc``\
•	Add the following lines

```
{
    "presets": [
        "@babel/preset-env",
        "@babel/preset-react"
    ],
    "plugins": [
        [
            "@babel/plugin-proposal-class-properties",
            {
                "loose": true
            }
        ]
    ]
}
```
## Add postcss.config.js
•	``npm i -D sass-loader postcss-loader css-loader style-loader postcss-preset-env node-sass``\
•	Create a new ``.postcss.config.js``\
•	Add the following lines

```
module.exports = {
    plugins: {
        'postcss-preset-env': {
            browsers: 'last 2 versions',
        },
    },
}
```
## Add Webpack 5 and the needed plugins
•	``npm i -D webpack webpack-cli``\
•	``npm i -D html-webpack-plugin clean-webpack-plugin mini-css-extract-plugin copy-webpack-plugin``\
•	Create a ``webpack.config.js``\
•	Add the following lines

```
const HtmlWebPackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
        main: path.resolve(__dirname, './src/index.js'),
    },
    output: {
        path: path.resolve(__dirname, 'react-webpack'),
        filename: 'main.js',
        publicPath: '/' // For production - Change to base directory folder name Eg. "https://localhost/BASENAME/" - publicPath: 'BASENAME'
    },
    mode: 'development',
    devServer: {
        historyApiFallback: true,
        contentBase: path.resolve(__dirname, 'react-webpack'),
        open: true,
        compress: true,
        hot: true,
        host: '0.0.0.0', // or 0.0.0.0
        port: 8080, // For production - You may need to change this to 80 
        watchOptions: {
            aggregateTimeout: 500, // delay before reloading
            poll: 1000 // enable polling since fsevents are not supported in docker
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: path.resolve(__dirname, './node_modules'),
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.ts$/,
                exclude: path.resolve(__dirname, './node_modules'),
                use: {
                    loader: "ts-loader"
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options:
                        {
                            minimize: true
                        }
                    }
                ]
            },
            {
                test: /\.(?:ico|gif|png|jpg|jpeg|cur)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
                type: 'asset/inline',
            },
            {
                test: /\.(scss|css)$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader']
            },
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        }),
        new MiniCssExtractPlugin({ 
            filename: "[name].css", 
            chunkFilename: "[id].css" 
        }),
        new CopyWebpackPlugin({
          patterns: [
            { from: "src/assets", to: "assets" },
          ],
        }),
        new CleanWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }),
    ]
};
```
•	Next, go to package.json and change
```
"scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  }
  ```

To
```
"scripts": {
    "start": "webpack serve",
    "build": "webpack --mode production"
  },
  ```

## REACT WITH EXTERNAL JS PLUGINS
• Run ``npm install --save react-helmet``\
• Within your ``src/components/scripts`` folder create a file called ``scripts.js``\
• Add the following lines
```
import React, { Component } from 'react'; 
import {Helmet} from "react-helmet"; 

class Scripts extends Component { 
  render() { 
    return ( 
      <Helmet> 
        <script id='helmet-script' src='js/vendors.js'></script> 
      </Helmet> 
    ); 
  } 
} 
export default Scripts;
```
• Next for every component you create add the following code

```
import Scripts from './scripts/scripts';
```

```
  componentWillUnmount() { 
    document.getElementById('helmet-script').remove(); 
  }
 ```
 
 ```
  render() { 
    return (
      <Fragment>
        <div>HTML</div>
        <Scripts /> 
      </Fragment>
    );
  }
```

```
cd src/assets/js
```
• Add external Js files into the array as shown in ```read.js``` and then run the following:

```
node read.js
```
## REACT WITH AUTO SCROLL UP AFTER PAGE NAVIGATION
• Create a file within ``src/components/scripts`` named ``scroll.js`` and add the following code\
•	Add the following lines

```
import React, { Component } from 'react'; 
import {withRouter } from "react-router-dom"; 
import $ from 'jquery'; 

class ScrollToTop extends Component { 
  componentDidUpdate(prevProps) { 
    if (this.props.location !== prevProps.location) { 
      $('html, body').animate({scrollTop:0}, 'slow') 
    } 
  } 
  render() { 
    return this.props.children 
  } 
} 
export default withRouter(ScrollToTop);
```

• Inside your ``app.js`` file add the following lines
```
import React, { Component } from 'react';
import { HashRouter as Router  } from "react-router-dom";
import Components from './components/index.jsx';
import ScrollToTop from './components/scripts/scroll.js';

class App extends Component {
  render() {
    return (
        <Router>
          <ScrollToTop>
            <Components />
          </ScrollToTop>
        </Router>
    );
  }
}

export default App;
```

## WRAPPING UP
•	Copy the ``index.html, favicon.ico, manifest.json`` file and all your directory folders into the src folder\
•	You can delete the public folder\
•	Inside the ``index.html`` file remove any %PUBLIC_FOLDER% in the link tags\
•	Run ``npm start``\
•	To build ``npm run build``\
•	In your production file, create an .htaccess file and add the following lines.
```
# Map all non-existing URLs to be processed by index.html,
# so any URL that doesn't point to a JS file, CSS file, etc etc...
# goes through my React app.

<IfModule mod_rewrite.c> 
    <IfModule mod_negotiation.c>
        Options -MultiViews -Indexes
    </IfModule>
RewriteEngine on
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{REQUEST_URI} !=/favicon.ico
RewriteRule ^ index.html [L]
</IfModule>
```

## DOCKERIZE YOUR REACT APP (LIVE RELOAD INCLUSIVE)
•	Create a new ``Dockerfile`` and add the following lines

```
FROM node:14.17.0-alpine
WORKDIR /app
COPY . /app
EXPOSE 8080
RUN npm install
CMD ["npm", "start"]
```

•	Create a new ``docker-compose.yml`` and add the following lines as well
```
version: "3.9"

services:
  app:
    build:
      context: .
    ports:
    - "8080:8080"
    environment:
      CHOKIDAR_USEPOLLING: "true"
    volumes:
      - /app/node_modules
      - .:/app
```

## BITBUCKET CI/CD VIA FTP

•	Create a new ``bitbucket-pipelines.yml`` and add the following lines
```
image: node:14.17.0
pipelines:
 branches:
   master:
    - step:
       name: Production
       services:
         - docker
       caches:
         - node
       script:
         - npm install
         - npm run build
         - pipe: atlassian/ftp-deploy:0.3.6
           variables:
             USER: $FTP_USER
             PASSWORD: $FTP_PASSWORD
             SERVER: $FTP_SERVER
             REMOTE_PATH: $FTP_REMOTE_PATH
             LOCAL_PATH: $FTP_LOCAL_PATH # Optional - React build directory.
            #  DEBUG: 'true' # Optional
            #  DELETE_FLAG: '<boolean>' # Optional. This is a option to delete old files before transferring new ones. Default: true.
```

•	To start run ``docker-composer up``

<p>See&nbsp;<a href="https://support.atlassian.com/bitbucket-cloud/docs/get-started-with-bitbucket-pipelines/">Bitbucket Pipelines</a> for more details</p>