export default class Validator {
  constructor() {
    this.validUserQuery = null;
  }

  check(value) {
    if (value !== '') {
      this.validUserQuery = true;
    } else {
      this.validUserQuery = false;
    }
    return this.validUserQuery;
  }
}
