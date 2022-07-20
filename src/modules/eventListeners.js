import Player from './Player.js';
import UI from './UI.js';
import Storage from './Storage.js';

const scoreInput = document.getElementById('score');
const nameInput = document.getElementById('name');

const addScore = () => {
  const nameValue = nameInput.value;
  const scoreValue = scoreInput.value;
  if (nameValue && scoreValue) {
    const player = new Player(nameValue, scoreValue);
    Storage.addInfo(player);
    UI.addInfoCard(player);

    scoreInput.value = '';
    nameInput.value = '';
  }
};

export default addScore;
