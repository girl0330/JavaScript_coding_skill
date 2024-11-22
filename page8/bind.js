class Validator {
  constructor() {
    this.message = '가 유효하지 않습니다.';
  }
  setInvalidMessage(field) {
    return `${field} ${this.message}`;
  }
  setInvalidMessage(...fields) {
    return fields.map(this.setInvalidMessage);
  }
}

const validator = new ValidatorProblem();
validator.setInvalidMessages('도시');
