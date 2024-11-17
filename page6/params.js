// defaults/simple
function converWeight(weight) {
  return weight / 2.2;
}

// ./more
function converWeight2(weight, ounces) {
  const oz = ounces ? ounces / 16 : 0;
  const total = weight + oz;
  return total / 2.2;
}

// ./problem
function roundToDecimalPlace(number, decimalPlaces) {
  const factor = Math.pow(10, decimalPlaces); // 10^decimalPlaces
  return Math.round(number * factor) / factor;
}

function converWeight3(weight, ounces, roundTo) {
  const oz = ounces ? ounces / 16 : 0;
  const total = weight + oz;
  const conversion = total / 2.2;
  const round = roundTo === undefined ? 2 : roundTo;
  return roundToDecimalPlace(conversion, round);
}
/**
 * 새로운 매개변수를 추가할 때마다 기본값을 설정하기 위해
 * 삼항 연산자나 단락 평가를 추가 해야하는 문제가 생김
 *
 * -> 정의되지 않은 변수로 인해 발생될 에러를 피해야함.
 */

// ./default
function converWeight4(weight, ounces = 0, roundTo = 2) {
  const total = weight + ounces / 16;
  const conversion = total / 2.2;
  return roundToDecimalPlace(conversion, roundTo);
}

// console.log(converWeight3(4, undefined, 2));

// destructuring/destructuring
const landscape = {
  title: 'Landscape',
  photograpther: 'Nathan',
  equipment: 'Canon',
  format: 'digital',
  src: '/landscape-nm.jpg',
  location: [32.7122222, -103.1405556],
};

// ./problem
function displayPhoto(photo) {
  const title = photo.title;
  const photograpther = photo.photograpther || 'Anonymous';
  const location = photo.location;
  const url = photo.src;
  const copy = { ...photo };

  delete copy.title;
  delete copy.photograpther;
  delete copy.location;
  delete copy.src;

  const additional = Object.keys(copy).map((key) => `${key}: ${copy[key]}`);

  return `
        <img alt="${title} 사진 ${photograpther} 촬영" src="${url}" />
        <div>${title}</div>
        <div>${photograpther}</div>
        <div>위도: ${location[0]} </div>
        <div>경도: ${location[1]} </div>
        <div>${additional.join(' <br/> ')}</div>
      `;
}

const a = {
  photograpther: 'gang',
};

const { photo } = a;

console.log(photo);

// ./alternate
function displayPhoto2(photo) {
  const {
    title,
    photograpther = 'Anonymous',
    location: [latitude, logitude],
    src: url,
    ...other
  } = photo;

  const additional = Object.keys(other).map((key) => `${key}: ${other[key]}`);

  return `
        <img alt="${title} 사진 ${photograpther} 촬영" src="${url}" />
        <div>${title}</div>
        <div>${photograpther}</div>
        <div>위도: ${location[0]} </div>
        <div>경도: ${location[1]} </div>
        <div>${additional.join(' <br/> ')}</div>
      `;
}

// 객체 구조 분해를 함수 매개변수에서 처리
function displayPhoto3({ title, photograpther = 'Anonymous', location: [latitude, longitude], src: url, ...other }) {
  const additional = Object.keys(other).map((key) => `${key}: ${other[key]}`);

  return `
          <img alt="${title} 사진 ${photograpther} 촬영" src="${url}" />
          <div>${title}</div>
          <div>${photograpther}</div>
          <div>위도: ${latitude} </div>
          <div>경도: ${longitude} </div>
          <div>${additional.join(' <br/> ')}</div>
        `;
}

const something = {
  title: 'some1',
  photograpther: 'someone',
  location: [32.7122222, -103.1405556],
  src: 'some2',
  date: 'some3',
};

console.log(displayPhoto3(something));
