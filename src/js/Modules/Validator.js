export default class Validator {
  constructor() {
    this.validUserQuery = null;
  }

  check(value) {
    return this.validUserQuery = value !== '';
  }
}
