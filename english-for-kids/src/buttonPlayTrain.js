import { changeStyle } from './changeStyle';
import { headerButton, button, buttonPlay, buttonTrain, contentWrapper } from './constants';
import { play } from './play';
import { arrCard } from './cards';

export const timerLeft = () => {
  const rating = document.querySelectorAll('.rating');
  if (rating.length === 1) {
    rating.innerHTML = '';
  }
  let start = 300;
  const timer = setInterval(() => {
    start -= 10;
    const timePassed = start - 10;
    button.style.left = `${timePassed / 3.4}px`;
    if (timePassed === 0) {
      clearInterval(timer);
    }
  }, 10);
  if (document.querySelector('.button__play')) document.querySelector('.button__play').remove();
  if (document.querySelector('.reting')) document.querySelector('.reting').remove();
};
export const buttonPlayTrain = (buttonMode) => {
  button.onclick = () => {
    changeStyle(buttonMode);
    const arrSubtitle = document.getElementsByClassName('subtitle');
    const contentImg = document.getElementsByClassName('content__img');
    const contentCards = document.getElementsByClassName('content__cards');
    if (buttonMode) {
      // play
      buttonMode = !buttonMode;
      buttonPlay.style.display = 'none';
      buttonTrain.style.display = 'block';
      headerButton.className = 'header__button header__button_off';
      // button play in header
      [...arrSubtitle].forEach((item) => item.classList.add('display_none'));
      if (contentCards[0].innerText !== 'Nature') {
        [...contentImg].forEach((i) => i.classList.toggle('img_height'));
        play(arrCard);
        //  rating
        const nodeRating = document.querySelectorAll('.rating');
        [...nodeRating].forEach((item) => item.remove());
        const rating = document.createElement('div');
        rating.className = 'rating';
        contentWrapper.prepend(rating);
      }
      const start = Date.now();
      const timerRight = setInterval(() => {
        const timePassed = Date.now() - start;
        button.style.left = `${timePassed / 3.4}px`;
        if (timePassed > 300) {
          clearInterval(timerRight);
        }
      }, 10);
    } else {
      // train
      if (contentCards[0].innerText === 'Nature') {
        [...contentImg].forEach((i) => i.classList.toggle('img_height'));
      }
      [...arrSubtitle].forEach((item) => item.classList.remove('display_none'));
      [...contentImg].forEach((i) => i.classList.toggle('img_height'));
      buttonMode = !buttonMode;
      buttonPlay.style.display = 'block';
      buttonTrain.style.display = 'none';
      headerButton.className = 'header__button header__button_on';
      timerLeft();
    }
  };
};