import { data } from '../data';
import { ulLink, headerButton, colorWhite, colorLink } from './constants';
import { play } from './play';

export let arrCard = [];
export const drawCards = () => {
  const card = document.querySelectorAll('.content__cards');
  const content = document.querySelector('.content .wrapper');
  const stateObj = { foo: '/' };
  const li = document.querySelectorAll('.header ul li');
  const linkMainPage = document.querySelector('.link__main-page');
  const linkStatistic = document.querySelector('.link__statistic');
  const createTemplate = (index) => {
    content.innerHTML = '';
    for (let i = 0; i < data[index].length; i++) {
      const div = document.createElement('div');
      div.className = 'content__cards';
      content.appendChild(div);
      if (headerButton.innerText === 'PLAY') {
        div.innerHTML = `<img class = 'content__img img_height' src = '${data[index][i][2]}'>
      <div class='subtitle display_none'>
        <span >${data[index][i][0]}</span>
        <div class = 'cards__return'></div>
        <audio>
          <source src="${data[index][i][3]}" >
        </audio>
      </div>`;
      } else {
        div.innerHTML = `<img class = 'content__img' src = '${data[index][i][2]}'>
      <div class='subtitle'>
        <span>${data[index][i][0]}</span>
        <div class = 'cards__return'></div>
        <audio>
          <source src="${data[index][i][3]}" >
        </audio>
      </div>`;
      }
      const contentImg = document.querySelectorAll('.content__img');
      const spanText = document.querySelectorAll('.subtitle span');
      const cardsReturn = document.querySelectorAll('.cards__return');
      // audio
      contentImg[i].addEventListener('click', () => {
        const audio = document.createElement('audio');
        if (document.getElementsByClassName('header__button')[0].innerText === 'TRAIN') {
          audio.innerHTML = `<source src="${data[index][i][3]}" ></source>`;
          div.append(audio);
          audio.play();
        }
      });
      // переворот картинки
      cardsReturn[i].addEventListener('click', () => {
        contentImg[i].style.transform = 'rotateY(180deg)';
        spanText[i].innerHTML = data[index][i][1];
        cardsReturn[i].style.opacity = '0';
        const contentCards = document.querySelectorAll('.content__cards');
        contentCards[i].addEventListener('mouseout', () => {
          contentImg[i].style.transform = 'rotateY(0deg)';
          spanText[i].innerHTML = data[index][i][0];
          cardsReturn[i].style.opacity = '1';
        });
      });
    }
  };
  // main page
  card.forEach((item, i) => {
    item.onclick = () => {
      arrCard = data[i];
      if (headerButton.innerText === 'PLAY') {
        play(arrCard);
      }
      const contentImg = document.getElementsByClassName('content__img');
      if (headerButton.innerText === 'PLAY') {
        [...contentImg].forEach((i) => {
          i.className = 'content__img img_height';
        });
      }
      li.forEach((i) => {
        i.style.color = colorLink;
      });
      li[i].style.color = colorWhite;
      history.pushState(stateObj, 'page 2', '/');
      createTemplate(i);
    };
  });
  // menu
  for (let i = 0; i < li.length; i++) {
    li[i].color = colorLink;
    li[i].onclick = () => {
      const spanMenu = document.querySelectorAll('.header__menu span');
      spanMenu[0].style.transform = 'rotate(0) translate(0px,0px)';
      spanMenu[1].style.opacity = '1';
      spanMenu[2].style.transform = 'rotate(0) translate(0px,0px)';
      arrCard = data[i];
      history.pushState(stateObj, 'page 2', '/');
      ulLink.style.left = '-400px';
      linkMainPage.style.color = colorLink;
      linkStatistic.style.color = colorLink;
      li.forEach((i) => {
        i.style.color = colorLink;
      });
      li[i].style.color = colorWhite;
      createTemplate(i);
    };
  }
};