import { arrName } from './constants';
import { data } from '../data';
import createComponentAppendChild from './appendChild';

export const statistic = () => {
  const content = document.querySelector('.content .wrapper');
  content.innerHTML = '';
  arrName.forEach((item, index) => {
    createComponentAppendChild('div', 'statistic', undefined, content);
    const cardStatistic = document.querySelectorAll('.statistic')[index];
    createComponentAppendChild('div', 'statistic__title', `${item}`, cardStatistic);
    createComponentAppendChild('ul', 'word__wrapper', undefined, cardStatistic);
    createComponentAppendChild('ul', 'translate__wrapper', undefined, cardStatistic);
    createComponentAppendChild('ul', 'current__value', undefined, cardStatistic);
    cardStatistic.style.marginBottom = '10px';
    cardStatistic.style.backgroundColor = 'gray';
    for (let i = 0; i < data[index].length; i++) {
      const lineWord = document.querySelectorAll('.word__wrapper')[index];
      const translateWord = document.querySelectorAll('.translate__wrapper')[index];
      const currentClickTrain = document.querySelectorAll('.current__value')[index];
      createComponentAppendChild('li', undefined, `${data[index][i][0]}`, lineWord);
      createComponentAppendChild('li', undefined, `${data[index][i][1]}`, translateWord);
      createComponentAppendChild('li', undefined, '0', currentClickTrain);
    }
  });
};