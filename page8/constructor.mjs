class Coupon {
  //생성자 메서드
  constructor(price, expiration) {
    this.price = price;
    this.expiration = expiration || '2주';
  } //클래스 선언
  getPriceText() {
    return `$ ${this.price}`;
  }
  getExpirationMessage() {
    return `이 쿠폰은 ${this.expiration} 후에 만료됩니다.`;
  }

  isRewardsEligible(user) {
    return user.isRewardsEligible && user.active;
  }

  getRewords(user) {
    if (this.isRewardsEligible(user)) {
      this.price = this.price * 0.9;
    }
  }
}

// const coupon = new Coupon(5); //인스턴스 생성
// console.log(coupon.getPriceText);
// console.log(coupon.getExpirationMessage);

// default는 모듈에서 하나의 기본 값만을 내보내는 방법, 이름을 자유롭게 지정할 수 있음.
export default Coupon;
