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

## PRODUCTION APP SETUP

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
