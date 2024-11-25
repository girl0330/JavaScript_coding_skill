//local에 저장하기
function saveBreed(breed) {
  localStorage.setItem('breed', breed);
}

//local에서 가져오기
function getSavedBreed() {
  return localStorage.getItem('breed');
}

//local에서 삭제하기
function removeBreed() {
  return localStorage.removeItem('breed');
}

//filter()를 사용한 검색
function applyBreedPrdference(filters) {
  const breed = getSavedBreed();
  if (breed) {
    filters.set('breed', breed);
  }
  return filters;
}

function savePreferences(filters) {
  const filterString = JSON.stringify([...filters]);
  localStorage.setItem('preferences', filterString);
}

function retrievePrefernces() {
  const preferences = JSON.parse(localStorage.getItem('preferences')); //JSON.parse(): 자바스크립트 캑체로 변환시켜줌
  return new Map(preferences);
}

function clearPreferences() {
  localStorage.clear();
}
