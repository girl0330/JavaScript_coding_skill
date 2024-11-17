//practice
const landscape = {
  photographer: 'Nathan',
};

const { photographer } = landscape;

// console.log(photographer);

const landscape2 = {
  title: 'Landscape',
  photograpther: 'Nathan',
  equipment: 'Canon',
  format: 'digital',
  src: '/landscape-nm.jpg',
  location: [32.7122222, -103.1405556],
};

const { title: newTitle } = landscape2;
const { photograpther } = landscape2;
const { equipment } = landscape2;
const { format } = landscape2;
const { src: url } = landscape2;
const {
  location: [a, b],
} = landscape2;

const { newPhotograpther, ...other } = landscape2;

// console.log(newTitle);
// console.log(photograpther);
// console.log(equipment);
// console.log(format);
// console.log(url);
// console.log(a);
// console.log(b);

const landscape3 = {};
const { photograpther3 = 'Anonymous', title3 } = landscape3;
// console.log(photograpther3);
// console.log(title3);
