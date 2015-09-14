#!/usr/bin/env node

var fs = require('fs');
var path = require('path');
var emPath = path.resolve('./node_modules/emmo-model/bin/em');

if (!fs.existsSync(emPath)) {
  console.log('Local emmo-model package does not exist, please install emmo-model first:');
  console.log('  npm install emmo-model');
  return;
}

require(emPath);
