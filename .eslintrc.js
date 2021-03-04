module.exports = {
  "globals": {
    "__PATH_PREFIX__": true,
    "__BASE_PATH__": true,
  },
  "parser": "babel-eslint", // uses babel-eslint transforms
  "settings": {
    "react": {
      "version": "detect" // detect react version
    }
  },
  "env": {
    "node": true // defines things like process.env when generating through node
  },
  "extends": [
    "prettier",
    "eslint:recommended", // use recommended configs
    "plugin:react/recommended",
    'plugin:prettier/recommended'
  ]    
}