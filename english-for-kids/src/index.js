import clothe from './img/main_page/clothes.jpg';
import bear from './img/main_page/bear.jpg';
import bed from './img/main_page/bed.jpg';
import footbal from './img/main_page/football.jpg';
import laptop from './img/main_page/laptop.jpg';
import sky from './img/main_page/sky.jpg';
import smile from './img/main_page/smile.jpg';
import emotions from './img/main_page/emotion.jpg';
import { ulLink, menu, colorLink, arrName } from './constants';
import { handlMenu, menuPage } from './menu';
import { drawCards } from './cards';
import { statistic } from './statistic';
import { buttonPlayTrain } from './buttonPlayTrain';
import createComponentAppendChild from './appendChild';

const game = () => {
  const arrPath = [sky, bear, smile, emotions, clothe, laptop, footbal, bed];
  const content = document.querySelector('.content .wrapper');
  arrName.forEach((card, index) => {
    createComponentAppendChild('div', 'content__cards', undefined, content);
    const cards = document.querySelectorAll('.content__cards')[index];
    cards.innerHTML = `<img class = "content__img"  style= 'width: 300px, height: 250px' src='${arrPath[index]}'/>
         <span>${card}</span>`;
  });
};
window.addEventListener('DOMContentLoaded', () => {
  const buttonMode = true;
  game();
  menuPage();
  buttonPlayTrain(buttonMode);
  menu.onclick = () => {
    handlMenu();
  };
  drawCards();
  const li = document.querySelector('.link__main-page');
  const linkPages = document.querySelectorAll('ul li');
  // link menu
  li.onclick = () => {
    const spanMenu = document.querySelectorAll('.header__menu span');
    spanMenu[0].style.transform = 'rotate(0) translate(0px,0px)';
    spanMenu[1].style.opacity = '1';
    spanMenu[2].style.transform = 'rotate(0) translate(0px,0px)';
    li.style.color = '#ffffff';
    ulLink.style.left = '-400px';
    [...linkPages].forEach((i) => {
      i.style.color = colorLink;
    });
    const content = document.querySelector('.content .wrapper');
    content.innerHTML = '';
    game();
    drawCards();
  };
  // menu link statistic
  const linkStatistic = document.querySelector('.link__statistic');
  linkStatistic.onclick = () => {
    const spanMenu = document.querySelectorAll('.header__menu span');
    spanMenu[0].style.transform = 'rotate(0) translate(0px,0px)';
    spanMenu[1].style.opacity = '1';
    spanMenu[2].style.transform = 'rotate(0) translate(0px,0px)';
    linkStatistic.style.color = '#ffffff';
    ulLink.style.left = '-400px';
    li.style.color = '#672a26';
    [...linkPages].forEach((i) => {
      i.style.color = '#672a26';
    });
    statistic();
  };
  // router
  window.addEventListener('popstate', (e) => {
    e.preventDefault();
    const content = document.querySelector('.content .wrapper');
    content.innerHTML = '';
    game();
    drawCards();
  });
  history.back();
});