const prodKeys = require('./prod');
const devKeys = require('./dev');

// Keys.js
const { NODE_ENV } = process.env;

// if the environment is production, load prod keys

if (NODE_ENV === "production") prodKeys; // eslint-disable-line

export default devKeys;
