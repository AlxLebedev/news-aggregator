export default class Commits {
  constructor(gitApi, slider, formatDate) {
    this.gitApi = gitApi;
    this.slider = slider;
    this.formatDate = formatDate;
    this.slideTemplate = document.getElementById('swiper-slide-template');
  }

  async init() {
    const commits = await this.gitApi.fetchCommits();
    this.render(commits);
  }

  render(commits) {
    const commitArray = commits;

    for ( let commit of commitArray) {
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
