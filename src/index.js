import './style.css';
import  addScore  from './modules/eventListeners.js'
import UI from './modules/UI.js'

const submitBtn = document.getElementById('submit');
const refreshBtn = document.getElementById('refresh');

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  addScore()
})

refreshBtn.addEventListener('click', () => {
  Storage.removeInfo()
  document.location.reload()
})

document.addEventListener('DOMContentLoaded', UI.displayInfo)