// import는 다른 파일에서 내보낸 모듈을 현재 파일로 가져옴
import Coupon from './constructor.mjs';

// extends 클래스 상속
class Flashcoupon extends Coupon {
  constructor(price, expiration) {
    super(price);
    this.expiration = expiration || '2시간';
  }

  getExpirationMessage() {
    return `이 쿠폰은 깜짝 쿠폰이며 ${this.xepiration} 후에 만료됩니다.`;
  }

  isRewardsEligible(user) {
    return super.isRewardsEligible(user) && this.price > 20;
  }

  getRewords(user) {
    if (this.isRewardsEligible(user)) {
      return (this.price = this.price * 0.8);
    }
  }
}
// const flash = new Flashcoupon(10);

console.log(flash.price);
console.log(flash.getExpirationMessage());
import Coupon4 from './get.mjs';
