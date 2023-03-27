module.exports = {
    transform: {
        "^.+\\.jsx?$": "babel-jest",
        "^.+\\.svg$": "<rootDir>/svgTransform.js"
    },
    moduleNameMapper: {
     "^@/(.*svg)(\\?inline)$": "<rootDir>/src/$1",
     "\\.(css|less|scss|sass)$": "identity-obj-proxy"
   },
}
