//메서드
class Coupon {
  constructor(price, expiration) {
    this.price = price;
    this.expiration = expiration || '2주';
  }
  getPriceText() {
    //코딩 컨벤션으로 베서드나 함수는 동사로 시작한다.
    return `$ ${this.price}`;
  }
  getExpirationMessage() {
    return `이 쿠폰은 ${this.expiration} 후에 만료됩니다.`;
  }
}
const coupon = new Coupon(5);
coupon.price = '$ 10';
// console.log(coupon.getPriceText());

//getter 값 가져오기
class Coupon2 {
  constructor(price, expiration) {
    this.price = price;
    this.expiration = expiration || '2주';
  }
  get priceText() {
    //코딩 컨벤션으로 속성은 명사로 시작한다.
    return `$ ${this.price}`;
  }
  get expirationMessage() {
    return `이 쿠폰은 ${this.expiration} 후에 만료됩니다.`;
  }
}
const coupon2 = new Coupon2(5);
coupon2.price = 10;
// console.log(coupon2.priceText);
// console.log(coupon2.expirationMessage);

//setter로 값 설정하기
class Coupon3 {
  constructor(price, expiration) {
    this.price = price;
    this.expiration = expiration || '2주';
  }

  set halfPrice(price) {
    this.price = price / 2;
  }
}
const coupon3 = new Coupon3(5);
// console.log(coupon3.price);

coupon3.halfPrice = 20;
// console.log(coupon3.price);

// console.log(coupon.halfPrice);

// 객체 내부 속성에 직접 접근하지 않기
class Coupon4 {
  constructor(price, expiration) {
    this._price = price;
    this.expiration = expiration || '2주';
  }
  get priceText() {
    return `$${this._price}`;
  }
  get price() {
    return this._price;
  }
  set price(price) {
    const newPrice = price.toString().replace(/[^\d]/g, '');
    this._price = parseInt(newPrice, 10);
  }
  get expirationMessage() {
    return `이 쿠폰은 ${this.expiration} 후에 만료됩니다.`;
  }
}
const coupon4 = new Coupon4(5);
console.log(coupon4.price);
coupon4.price = '$ 10';
console.log(coupon4.price);
console.log(coupon4.priceText);

export default Coupon4;
