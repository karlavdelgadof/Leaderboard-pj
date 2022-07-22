export default class Storage {
  static async getInfo() {
    const gameID = '5mywgelAua12rtJ5HTv1';
    const gameData = await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameID}/scores/`);
    const response = await gameData.json();
    const players = response.result;
    const playersSorted = players.sort((a, b) => b.score - a.score)

    return playersSorted;
  }

  static addInfo(player) {
    const players = Storage.getInfo()
    players.push(player);
  }
}

