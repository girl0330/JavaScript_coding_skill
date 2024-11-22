function* getCairoTrilogy() {
  yield '궁전 샛길';
  yield '욕망의 궁전';
  yield '설탕 거리';
}

const trilogy = getCairoTrilogy();
// console.log(trilogy.next());
// console.log(trilogy.next());
// console.log(trilogy.next());
// console.log(trilogy.next());

//배열에 담는 방법
// console.log([...getCairoTrilogy()]);

const readingList = {
  '깡패단의 방문': true,
  '맨해튼 비치': false,
};
for (const book of getCairoTrilogy()) {
  readingList[book] = false;
}
// console.log(readingList);

//트리 데이터 구조
class FamilyTree {
  constructor() {
    this.family = {
      name: 'Martha',
      child: {
        name: 'Martha',
        child: {
          name: 'Dyan',
          child: {
            name: 'Bea',
          },
        },
      },
    };
  }
  getMembers() {
    const family = [];
    let node = this.family;
    while (node) {
      family.push(node.name);
      node = node.child;
    }
    return family;
  }
  *[Symbol.iterator]() {
    let node = this.family;
    while (node) {
      yield node.name;
      node = node.child;
    }
    return family;
  }
}
const family = new FamilyTree();
// console.log(family.getMembers());
console.log([...family]);
