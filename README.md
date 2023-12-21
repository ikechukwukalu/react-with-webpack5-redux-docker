# MY REACT APP WITH WEBPACK 5

[![Known Vulnerabilities](https://snyk.io/test/github/ikechukwukalu/react-with-webpack5-redux-docker/badge.svg?style=flat-square)](https://snyk.io/test/github/ikechukwukalu/react-with-webpack5-redux-docker)
[![NPM version](https://img.shields.io/npm/v/react-with-webpack5-redux-docker?style=flat-square)](https://www.npmjs.com/package/react-with-webpack5-redux-docker)
[![GitHub issues](https://img.shields.io/github/issues/ikechukwukalu/react-with-webpack5-redux-docker?style=flat-square)](https://github.com/ikechukwukalu/react-with-webpack5-redux-docker/issues)
[![Licence](https://img.shields.io/github/license/ikechukwukalu/react-with-webpack5-redux-docker?style=flat-square)](https://github.com/ikechukwukalu/react-with-webpack5-redux-docker/blob/master/LICENSE.md)

## Install Boilerplate

```shell
npm install -g react-with-webpack5-redux-docker

npx generate-react-boilerplate my-app
```

## How To SetUp Manually

``` shell
npm install -g create-react-app

npx create-react-app project
```

## Add redux

``` shell
npm i @reduxjs/toolkit redux react-redux
```

## Add .babelrc

``` shell
npm i -D regenerator-runtime @babel/core babel-loader @babel/preset-env @babel/preset-react @babel/plugin-proposal-class-properties`
```

Create a new `.babelrc` and add the following:

``` js
{
    presets: [
        "@babel/preset-env",
        "@babel/preset-react"
    ],
    plugins: [
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

``` shell
npm i -D sass-loader postcss-loader css-loader style-loader postcss-preset-env node-sass
```

Create a new `.postcss.config.js` and add the following:

``` js
module.exports = {
    plugins: {
        'postcss-preset-env': {
            browsers: 'last 2 versions',
        },
    },
}
```

## Add Webpack 5 and the needed plugins

``` shell
npm i -D webpack webpack-cli

npm i -D html-webpack-plugin clean-webpack-plugin mini-css-extract-plugin copy-webpack-plugin
```

Create a `webpack.config.js` and add the following:

``` js
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
        static: path.resolve(__dirname, 'react-webpack'),
        open: true,
        compress: true,
        hot: true,
        host: '0.0.0.0', // or 0.0.0.0
        port: 8080, // For production - You may need to change this to 80
    },
    watchOptions: {
        aggregateTimeout: 500, // delay before reloading
        poll: 1000 // enable polling since fsevents are not supported in docker
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
            'window.jQuery': 'jquery',
            axios: 'axios',
            'window.axios': 'axios',
            Toastify: 'toastify-js',
            'window.Toastify': 'toastify-js',
            _: 'lodash',
            'window._': 'lodash'
        }),
    ]
};
```

## Add jest.config.js

Create a `svgTransform.js` and add the following:

``` js
module.exports = {
    process() {
      return {
        code: `module.exports = {};`,
      };
    },
    getCacheKey() {
      // The output is always the same.
      return "svgTransform";
    },
};
```

Create a `jest.config.js` and add the following:

``` js
module.exports = {
    transform: {
        "^.+\\.jsx?$": "babel-jest",
        "^.+\\.tsx?$": "babel-jest",
        "^.+\\.svg$": "<rootDir>/svgTransform.js"
    },
    moduleNameMapper: {
     "^@/(.*svg)(\\?inline)$": "<rootDir>/src/$1",
     "\\.(css|less|scss|sass)$": "identity-obj-proxy"
   },
}
```

Within the `package.json` and make this edit:

``` json
"scripts": {
    "dev": "webpack-dev-server",
    "build": "webpack",
    "test": "jest --env=jsdom"
  },
```

## WRAPPING UP

- Copy the `index.html, favicon.ico, manifest.json` file and all your directory folders into the src folder
- You can delete the public folder
- Inside the `index.html` file remove any %PUBLIC_FOLDER% in the link tags
- Run `npm start`
- To build `npm run build`
- In your production file, create an .htaccess file and add the following lines.

``` .htaccess
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

- Create a new ``Dockerfile`` and add the following lines:

``` dockerfile
FROM node:16-alpine3.15
WORKDIR /app
COPY . /app
EXPOSE 8080
RUN apk add --no-cache python3 make g++
RUN npm install
CMD ["npm", "run", "dev"]
```

Create a new `docker-compose.yml` and add the following lines:

``` yml
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

- To start run `docker-compose up`
- To add new packages after installing them run `docker-compose down -v`, `docker-compose build` and `docker-compose up`
