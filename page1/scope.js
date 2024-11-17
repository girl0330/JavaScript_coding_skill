function addClick(items) {
  for (var i = 0; i < items.length; i++) {
    //var은 독립적인 i값을 저장하지 않고 루프종료 후 최종족인 i값을 참조함
    items[i].onClick = function () {
      return i;
    };
  }
  return items;
}
const example = [{}, {}];
const clickSet = addClick(example);
clickSet[0].onClick();

function addClick(items) {
  for (let i = 0; i < items.length; i++) {
    items[i].onClick = function () {
      return i;
    };
  }
  return items;
}
const example2 = [{}, {}];
const clickSet2 = addClick(example2);
clickSet2[0].onClick();
