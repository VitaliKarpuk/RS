import { contentWrapper } from './constants';
import { correct } from './correct';
import { incorrect } from './incorrect';

export const play = (arr) => {
  let pathAudioImg = '';
  let pathAudioBtn = '';
  const cards = document.getElementsByClassName('content__cards');
  const arrAudio = [];
  for (let i = 0; i < arr.length; i++) {
    arrAudio.push(arr[i][3]);
  }
  // random arr audio
  const randomSort = () => {
    arrAudio.sort(() => Math.random() - 0.5);
  };
    // reiting and stars
  const winStar = document.querySelectorAll('.win');
  randomSort();
  const btnPlay = document.createElement('div');
  btnPlay.classList.add('button__play');
  btnPlay.innerText = 'PLAY';
  document.body.append(btnPlay);
  [...cards].forEach((i) => {
    i.style.opacity = '1';
  });
  btnPlay.addEventListener('click', () => {
    [...cards].forEach((item) => {
      randomSort();
      // click on card
      item.addEventListener('click', (e) => {
        if (document.querySelectorAll('.header__button')[0].innerText === 'PLAY') {
          pathAudioImg = e.target.parentElement.children[1].children[2].currentSrc;
          if (pathAudioImg === pathAudioBtn && winStar.length < 1) {
            correct();
            item.style.opacity = '.3';
            arrAudio.shift();
            setTimeout(() => {
              for (let i = 0; i < arrAudio.length; i++) {
                btnPlay.innerHTML = `<audio class = 'audio__game'>
                                <source src="${arrAudio[0]}" >
                            </audio>`;
              }
              const audio = document.querySelectorAll('.audio__game');
              audio[0].play();
              pathAudioBtn = document.getElementsByClassName('audio__game')[0].children[0].src;
              // конец игры
              if (arrAudio.length < 1) {
                const btn = document.querySelector('.button__play');
                const starLength = document.querySelectorAll('.star__simple');
                // выйграл без ошибок
                if (starLength.length === 0) {
                  contentWrapper.innerHTML = `<h1>WIN</h1> 
                                <div class = 'resul_page'></div>
                                <audio class = 'audio__game-win'>
                                    <source src="./src/audio/win-game.mp3" >
                                </audio>`;
                  const winAudio = document.querySelector('.audio__game-win');
                  winAudio.play();
                  setTimeout(() => location.reload(true), 2000);
                  btn.remove();
                } else {
                  // с ошибками
                  contentWrapper.innerHTML = `<h1>${starLength.length} errors</h1> 
                                <div class = 'bad-resul_page'></div>
                                <audio class = 'audio__game-error'>
                                    <source src="./src/audio/error.mp3" >
                                </audio>`;
                  const errorAudio = document.querySelector('.audio__game-error');
                  errorAudio.play();
                  setTimeout(() => location.reload(true), 2000);
                  btn.remove();
                }
              }
            }, 1000);
          } else {
            if (document.querySelectorAll('.header__button')[0].innerText === 'PLAY') {
              incorrect();
            }
          }
        }
      });
    });
    btnPlay.classList.add('button_repeat');
    btnPlay.innerText = '';
    for (let i = 0; i < arrAudio.length; i++) {
      btnPlay.innerHTML = `<audio class = 'audio__game'>
            <source src="${arrAudio[0]}" >
            </audio>`;
    }
    const audio = document.getElementsByClassName('audio__game');
    audio[0].play();
    pathAudioBtn = document.getElementsByClassName('audio__game')[0].children[0].src;
  });
};