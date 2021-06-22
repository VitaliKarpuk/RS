import failure from './audio/failure.mp3';
import { contentWrapper } from './constants';

export const incorrect = () => {
  let rating = document.querySelector('.rating');
  const starSimple = document.createElement('div');
  starSimple.className = 'star star__simple';
  const errorWin = document.createElement('div');
  errorWin.classList.add('error__win');
  document.body.append(errorWin);
  errorWin.innerHTML = `<audio class = "win__audio"><source src="${failure}" ></audio>`;
  const winAudio = document.querySelector('.win__audio');
  winAudio.play();
  setTimeout(() => errorWin.remove(), 500);
  if (rating == null) {
    rating = document.createElement('div');
    rating.className = 'reting';
    contentWrapper.prepend(rating);
  } else {
    rating.appendChild(starSimple);
  }
  rating.appendChild(starSimple);
  console.clear();
};