// const taxRate = 0.1;
// const total = 100 + 100 * taxRate; //total은 상수이며 재할당할 수 없음을 알 수 있음.
// return `구매 금액은 ${total}입니다.`;

// var taxRate2 = 0.1;
// var total2 = 100 + 100 * taxRate; //total2가 어떤 값이 될 수 있는지 알 수 없음.
// return `구매 금액은 ${total2}입니다.`;

// const taxRate3 = 0.1; //변하지 않음
// const shipping = 5.0; //변하지 않음
// let total3 = 100 + 100 * taxRate + shipping; // total3의 값을 믿을 수 없음.
// return `구매 금액은 ${total2}입니다.`;
// /**
//  * 1. 할당이 변경되지 않는다는 점을 알 수 있음
//  * 2. 변경될 수도 있다는 점을 알 수 있음
//  */

// const discountable = []; //const는 재할당할 수 없지만 값을 바꿀 수 있음.
// for (let i = 0; i < cart.length; i++) {
//   if (cart[i].discountAvaliable) {
//     discountable.push(cart[i]);
//   }
// }

// const discountable2 = cart.fliter((item) => item.discountAvaliable);

function getLowestPrice(item) {
  var count = item.inventory;
  var price = item.price;
  if (item.salePrice) {
    var count = item.saleInventory;
    if (count > 0) {
      price = item.salePrice;
    }
  }

  if (count) {
    return price;
  }

  return 0;
}

const item = {
  inventory: 0,
  price: 3,
  salePrice: 0,
  saleInventory: 0,
};

const item2 = {
  inventory: 3,
  price: 3,
  salePrice: 2,
  saleInventory: 1,
};

const item3 = {
  inventory: 3,
  price: 3,
  salePrice: 2,
  saleInventory: 0,
};

// console.log(getLowestPrice(item));
// console.log(getLowestPrice(item));
// console.log(getLowestPrice(item2));
// console.log(getLowestPrice(item3));

function getLowestPrice2(item) {
  let count = item.inventory;
  let price = item.price;
  if (item.salePrice) {
    let count = item.saleInventory;
    if (count > 0) {
      price = item.salePrice;
    }
  }

  if (count) {
    return price;
  }

  return 0;
}

console.log(getLowestPrice2(item));
console.log(getLowestPrice2(item2));
console.log(getLowestPrice2(item3));
