const validator = {
  message: '는 유효하지 않습니다.',
  setInvalidMessage: (field) => `${field} ${this.message}`,
};

export { validator }; //함수, 변수, 클래스를 내보낼 수 있음.
