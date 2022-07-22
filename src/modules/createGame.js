// Create the game
fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    name: 'Xeo Da-sh',
  }),
})
  .then((res) => res.json())
  .then((data) => console.log(data.result));
