import gameAPI from './API.js';

const scoreInput = document.getElementById('score');
const nameInput = document.getElementById('name');

const addScore = () => {
  const nameValue = nameInput.value;
  const scoreValue = scoreInput.value;
  if (nameValue && scoreValue) {
    gameAPI.sendInfo(nameValue, scoreValue);
    scoreInput.value = '';
    nameInput.value = '';
  }
};

export default addScore;
