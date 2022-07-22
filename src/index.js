import './style.css';
import addScore from './modules/eventListeners.js';
import UI from './modules/UI.js';

const addForm = document.getElementById('add-form');
const refreshBtn = document.getElementById('refresh');

addForm.addEventListener('submit', (e) => {
  e.preventDefault();
  addScore();
});

refreshBtn.addEventListener('click', (e) => {
  UI.deleteList();
  document.location.reload()
});

document.addEventListener('DOMContentLoaded', () => {
  UI.displayInfo()
});