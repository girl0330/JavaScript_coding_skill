function Coupon(price, expiration) {
  this.price = price;
  this.expiration = expiration;
}
const coupon = new Coupon(5, '2 개월');

console.log(coupon.price);

Coupon.prototype.getExpirationMessage = function () {
  return `이 쿠폰은 ${this.expiration} 후에 만료됩니다.`;
};

console.log(coupon.getExpirationMessage());

class Flashcoupon extends Coupon {
  constructor(price, expiration) {
    super(price);
    this.expiration = expiration || '2시간';
  }
  getExpirationMessage() {
    return `이 쿠폰은 깜짝 쿠폰이며 ${this.expiration} 후에 만료됩니다.`;
  }
}
