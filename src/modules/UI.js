import Storage from './Storage.js';
import PlayersArr from './playersArray.js';

export default class UI {
  static displayInfo() {
    PlayersArr.players = Storage.getInfo();

    PlayersArr.players.forEach((player) => UI.addInfoCard(player));
  }

  static addInfoCard(player) {
    const playersList = document.getElementById('scores-list');

    const playerInfo = document.createElement('div');
    playerInfo.className = 'player';

    const pName = document.createElement('h3');
    pName.textContent = `${player.name}:`;
    playerInfo.appendChild(pName);

    const pScore = document.createElement('h3');
    pScore.textContent = player.score;
    playerInfo.appendChild(pScore);

    playersList.appendChild(playerInfo);
  }
}