import PlayersArr from './playersArray.js';

export default class Storage {
  static getInfo() {
    if (localStorage.getItem('players') === null) {
      PlayersArr.players = [];
    } else {
      PlayersArr.players = JSON.parse(localStorage.getItem('players'));
    }

    return PlayersArr.players;
  }

  static addInfo(player) {
    PlayersArr.players.push(player);
    localStorage.setItem('players', JSON.stringify(PlayersArr.players));
  }

  static removeInfo() {
    localStorage.removeItem('players');
  }
}