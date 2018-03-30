import prodKeys from './prod';
import devKeys from './dev';

// Keys.js
const { NODE_ENV } = process.env;

// if the environment is production, load prod keys
if (NODE_ENV === "production") return prodKeys; // eslint-disable-line

export default devKeys;
