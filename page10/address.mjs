import { capitalize } from './util.mjs';

// 함수선언 앞에 붙여 모듈 이름을 명시적으로 지정하여 내보낸다.
export function parseRegion(address) {
  const region = address.state || address.providence || '';
  return region.toUpperCase();
}
export function parseStreet({ street }) {
  return street
    .split(' ')
    .map((part) => capitalize(part))
    .join(' ');
}

// 모듈 당 하나만 설정이 가능하고 가져올 때 자유로운 이름으로 가져올 수 있다.
export default function normalize(address) {
  const street = parseStreet(address);
  const city = address.city;
  const region = parseRegion(address);
  return `${street} ${city}, ${region}`;
}
