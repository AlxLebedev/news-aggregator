/**
 * Класс Commits получает пречень коммитов и отрисовывает их на странице в виде слайдера
 */

export default class Commits {
  /**
   * 
   * @param {Class} gitApi Класс, отвечающий за получение переченя коммитов 
   * @param {Class} slider Класс, отвечающий за инициализацию слайдера
   * @param {Function} formatDate Функция, форматирующая дату, полученную с сервера, в соответствии с представлением в дизайне
   */
  constructor(gitApi, slider, formatDate) {
    this.gitApi = gitApi;
    this.slider = slider;
    this.formatDate = formatDate;
    this.slideTemplate = document.getElementById('swiper-slide-template');
  }

  /**
   * Метод получает коммиты и передает их методу render()
   */

  async init() {
    const commits = await this.gitApi.fetchCommits();
    this.render(commits);
  }

  /**
   * Метод, отрисовывающий перечень коммитов на странице в виде слайдера
   * @param {Object[]} commits Массив объектов коммитов, пришедших с сервера 
   */

  render(commits) {
    const commitArray = commits;

    for (const commit of commitArray) {
      const slide = this.slideTemplate.content.cloneNode(true);

      slide.querySelector('.commit__date').innerText = this.formatDate(commit.commit.author.date);
      slide.querySelector('.developer__image').src = commit.author.avatar_url;
      slide.querySelector('.developer__name').innerText = commit.commit.author.name;
      slide.querySelector('.developer__mail').innerText = commit.commit.author.email;
      slide.querySelector('.commit__message').innerText = commit.commit.message;

      const swiperWrapper = document.querySelector('.swiper-wrapper');
      swiperWrapper.append(slide);
    }
    this.slider.init();
  }
}
