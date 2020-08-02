export default class Error {
  constructor(notFoundPic, serverErrorPic, badRequestPic, badResponsePic) {
    this.errorTemplate = document.getElementById('error-template');
    this.notFoundPic = notFoundPic;
    this.serverErrorPic = serverErrorPic;
    this.badRequestPic = badRequestPic;
    this.badResponsePic = badResponsePic;
  }

  show(type) {
    const error = this.errorTemplate.content.cloneNode(true);

    switch(type) {
      case 'not-found':
        error.querySelector('.error__image').src = this.notFoundPic;
        error.querySelector('.error__warning').innerText = 'Ничего не найдено';
        error.querySelector('.error__message').innerText = 'К сожалению по вашему запросу ничего не найдено.';
        break;
      case 'server-error':
        error.querySelector('.error__image').src = this.serverErrorPic;
        error.querySelector('.error__warning').innerText = 'Упс, проблемка...';
        error.querySelector('.error__message').innerText = 'Не получается получить ответ от сервера.';
        break;
      case 'bad-request':
        error.querySelector('.error__image').src = this.badRequestPic;
        error.querySelector('.error__warning').innerText = 'Что, что?';
        error.querySelector('.error__message').innerText = 'Запрос не понятен, уточните, пожалуйста...';
        break;
      case 'bad-response':
        error.querySelector('.error__image').src = this.badResponsePic;
        error.querySelector('.error__warning').innerText = 'Что-то пошло не так...';
        error.querySelector('.error__message').innerText = 'Получен не корректный ответ от сервера, попробуйте еще раз.';
        break;
      default:
        error.querySelector('.error__image').src = this.serverErrorPic;
        error.querySelector('.error__warning').innerText = 'Упс, неизвестная проблемка...';
        error.querySelector('.error__message').innerText = 'Перезагрузите страницу и попробуйте снова.';
    }

    const resultsBlock = document.querySelector('.results');
    resultsBlock.append(error);
  }

  hide() {
    const errorElement = document.querySelector('.error');
    if (errorElement) {
      errorElement.remove();
    }
  }
}
