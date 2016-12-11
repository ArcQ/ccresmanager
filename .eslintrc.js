var path = require("path");

module.exports = {    
  "env": {
    "browser": true,
    "node": true,
    "jasmine": true,
    "commonjs": true
  },
  "globals": {
    "cc": true,
    "testRes": true,
  },
  "extends": [
    "airbnb-base",
    "plugin:jasmine/recommended"
  ],
  "settings":{
    "import/resolver": {
      "webpack": { "config": path.join(__dirname, "config/webpack.config.js") }
    },
    "import/no-extraneous-dependencies": ["error", {"devDependencies": ["**/*.spec.js"]}]
//    "import/parser": "babel-eslint"
  },
  "plugins": [
    "jasmine",
    "import",
  ],
  "rules": {
    "no-underscore-dangle": 0,
    "func-names": 0,
  },
 "rules": {                                                                                  
   "no-underscore-dangle": 0,                                                                
   "func-names": 0,                                                                          
 },
}

