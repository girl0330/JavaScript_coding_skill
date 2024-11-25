import { capitalize } from './util.mjs';

function greet(name) {
  return `Hello, ${capitalize(name)}!`;
}

console.log(greet('ashley'));

export { greet };

import * as utils from './util.mjs';

function greet(name) {
  return `Hello, ${utils.capitalize(name)}!`;
}

console.log(greet('ashley'));

export { greet };
