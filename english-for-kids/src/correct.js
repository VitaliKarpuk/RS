import win from './audio/win31.mp3';
import { contentWrapper } from './constants';

export const correct = () => {
  const errorWin = document.querySelectorAll('.error__win');
  [...errorWin].forEach((item) => item.remove());
  const spanWin = document.createElement('div');
  spanWin.className = 'win';
  document.body.append(spanWin);
  spanWin.innerHTML = `<audio class = "win__audio"><source src="${win}" ></audio>`;
  const winAudio = document.querySelector('.win__audio');
  winAudio.play();
  setTimeout(() => spanWin.remove(), 1000);
  let rating = document.querySelector('.rating');
  const starGold = document.createElement('div');
  starGold.className = 'star star__gold';
  if (rating == null) {
    rating = document.createElement('div');
    rating.className = 'reting';
    contentWrapper.prepend(rating);
  } else {
    rating.appendChild(starGold);
  }
  rating.appendChild(starGold);
  console.clear();
};