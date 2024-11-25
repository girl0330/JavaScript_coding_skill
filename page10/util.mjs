/** 마지막에 export를 사용해 한번에 내보내기*/
// function getPower(decimalPlaces) {
//   return 10 ** decimalPlaces;
// }

// function capitalize(word) {
//   return word[0].toUpperCase() + word.slice(1);
// }

// function roundToDecimalPlace(number, decimalPlaces = 2) {
//   const round = getPower(decimalPlaces);
//   return Math.round(number * round) / round;
// }

// export { capitalize, roundToDecimalPlace };

/** 내보낼 함수에 각각 export를 사용하기 */
function getPower(decimalPlaces) {
  return 10 ** decimalPlaces;
}

export function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1);
}

export function roundToDecimalPlace(number, decimalPlaces = 2) {
  const round = getPower(decimalPlaces);
  return Math.round(number * round) / round;
}
