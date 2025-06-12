import { CustomButton } from './CustomButton.js';

function initializeApp() {
    const app = document.getElementById('app');
    const startButton = new CustomButton('Start Game');
    app.appendChild(startButton.render());
}

document.addEventListener('DOMContentLoaded', initializeApp)
