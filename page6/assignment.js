// assignment
const landscape = {
  title: 'Landscape',
  photographer: 'Nathan',
  location: [32.7122222, 1103.1405556],
};

const reginon = {
  city: 'Hobbs',
  county: 'Lea',
  state: {
    name: 'New Mexico',
    abbreviation: 'NM',
  },
};

function getCityAndState({ location }) {
  const { city, state } = determineCityAndState(location);
  return {
    city,
    state: state.abbreviation,
  };
}

function setRegin({ location, ...details }) {
  const { city, state } = determineCityAndState(location);
  return {
    city,
    state: state.abbreviation,
    ...details, //location 이외의 모든 것을 변수 details에 할당함.
  };
}
// details를 펼쳐 넣으면 우리가 정확히 필요로하는 객체를 만들어낼 수 있음.
