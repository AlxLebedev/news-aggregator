export default class Error {
  constructor(notFoundPic, serverErrorPic) {
    this.resultsBlock = document.querySelector('.results');
    this.errorTemplate = document.getElementById('error-template');
    this.notFoundPic = notFoundPic;
    this.serverErrorPic = serverErrorPic;
    this.errorElement = null;
  }

  show(type) {
    const error = this.errorTemplate.content.cloneNode(true);
    error.querySelector('.error__image').src = type === 'not-found' ? this.notFoundPic : this.serverErrorPic;
    error.querySelector('.error__warning').innerText = type === 'not-found' ? 'Ничего не найдено' : 'Упс, проблемка...';
    error.querySelector('.error__message').innerText = type === 'not-found' ? 'К сожалению по вашему запросу ничего не найдено.' : 'Не получается получить ответ от сервера.';

    this.resultsBlock.append(error);
  }

  hide() {
    this.errorElement = document.querySelector('.error');
    if (this.errorElement) {
      this.errorElement.remove();
    }
  }
}
