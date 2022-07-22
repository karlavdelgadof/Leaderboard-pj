export default class gameAPI {
  static sendInfo(player, score) {
    const gameID = '5mywgelAua12rtJ5HTv1';
    fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameID}/scores/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        user: player,
        score,
      }),
    })
      .then((result) => result.json())
      .then((data) => console.log(data));
  }
}
