import Storage from './Storage.js';

export default class UI {
  static async displayInfo() {
    const players = await Storage.getInfo();
    for (let i = 0; i < players.length; i += 1) {
      players[i].id = i + 1;
    }
    // Set timeout
    players.forEach((player) => UI.addInfoCard(player));
  }

  static addInfoCard(player) {
    const playersList = document.getElementById('scores-list');

    const playerInfo = document.createElement('div');
    playerInfo.className = 'player';

    const pName = document.createElement('h3');
    pName.textContent = `${player.user}:`;
    playerInfo.appendChild(pName);

    const pScore = document.createElement('h3');
    pScore.textContent = player.score;
    playerInfo.appendChild(pScore);

    playersList.appendChild(playerInfo);
  }

  static deleteList() {
    const playersList = document.getElementById('scores-list');
    playersList.innerHTML = '';
  }
}