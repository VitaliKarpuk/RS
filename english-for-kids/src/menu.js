import { ulLink } from './constants';
import createComponentAppendChild from './appendChild';
import { createComponentAppend } from './append';

export const handlMenu = () => {
  const spanMenu = document.querySelectorAll('.header__menu span');
  if (ulLink.style.left === '0px') {
    ulLink.style.left = '-400px';
    spanMenu[0].style.transform = 'rotate(0) translate(0px,0px)';
    spanMenu[1].style.opacity = '1';
    spanMenu[2].style.transform = 'rotate(0) translate(0px,0px)';
  } else {
    ulLink.style.left = '0px';
    spanMenu[0].style.transform = 'rotate(45deg) translate(-6px,-1px)';
    spanMenu[1].style.opacity = '0';
    spanMenu[2].style.transform = 'rotate(-45deg) translate(-2px,-1px)';
  }
};

export const menuPage = () => {
  const cardsArr = document.querySelectorAll('.content__cards');
  createComponentAppendChild('div', 'link__main-page', 'Main page', ulLink);
  cardsArr.forEach((item) => {
    createComponentAppendChild('li', undefined, item.lastChild.innerText, ulLink);
  });
  createComponentAppend('div', 'link__statistic', 'Statistics', ulLink);
};