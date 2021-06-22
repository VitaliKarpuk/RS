import { ulLink } from './constants';

export const changeStyle = (buttonMode) => {
  const cardsArr = document.querySelectorAll('.content__cards');
  cardsArr.forEach((item) => {
    if (buttonMode) {
      item.style.background = 'linear-gradient(to bottom, #83ace9 80%, #83ace9 20%)';
      ulLink.style.background = 'linear-gradient(to right, #83ace9, rgb(188, 205, 232)';
    } else {
      item.style.background = 'linear-gradient(to bottom, #65c4a7 80%, #65c4a7 20%)';
      ulLink.style.background = 'linear-gradient(to right, #679788, #9ae8d1)';
    }
  });
};