import { capitalize, roundToDecimalPlace } from './util.mjs';

function giveTotal(name, total) {
  return `${capitalize(name)}님, ${roundToDecimalPlace(total)}입니다.`;
}

console.log(giveTotal('sara', 10.3333333));

export { giveTotal };
