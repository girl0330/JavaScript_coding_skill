function validateCharacterCount(max, items) {
  return items.every((item) => item.length < max);
}

/** every() 배열 메서드
 * 모든 배열 항목을 대상으로
 * fiter()와 마찬갖고 참 또는 거짓을 반환하는 콜백함수를 인자로 전달함.
 * 모든 항목에서 참 값이 반환되면 결과정으로 true/ 하나라도 거짓이면 false
 * 특정한 컬렉션 형식을 강제함
 * */
// console.log(validateCharacterCount(10, ['Hobbs', 'Eages', 'PyoHyeonGyeong']));
// console.log(validateCharacterCount(10, 'wvoquine')); // typeError 발생

/**arguments
 * 함수로 전달된 모든 인수를 배열처럼 다룰 수 있는 유사 배열 객체
 */
function getArguments() {
  return arguments;
}
// console.log(getArguments('Bloomsday', 'June 16'));

function validateCharacterCount(max) {
  const items = Array.prototype.slice.call(arguments, 1);
  return items.every((item) => item.length < max);
}

validateCharacterCount(10, 'wvoquie');
const tags = ['Hobbs', 'Eagles'];
// console.log(validateCharacterCount(10, ...tags));

function getArguments2(...args) {
  return args;
}
// console.log(getArguments2('Bloomsday', 'June 16'));

function validateCharacterCount2(max, ...items) {
  return items.every((item) => item.length < max);
}

['Spirited Away', 'Princess Mononoke'].map((film, ...other) => {
  //   console.log(other);
  return film.toLowerCase();
});

const queue = ['stop', 'collaborate', 'listen'];
const [first, ...remaining] = queue;
console.log(first);
console.log(remaining);
