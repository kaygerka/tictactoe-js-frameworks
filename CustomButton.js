// Component #1: CustomButton 
import { Component } from './framework.js';
import { TicTacToe } from './TicTacToe.js';

// STATE
export class CustomButton extends Component {
  constructor(label) {
    super();
    this.state = { label };
  }
  

  render() {
    const button = document.createElement('button');
    button.textContent = this.state.label;
    button.addEventListener('click', () => this.askName());
    return button;
  }

  askName() {
    const name = prompt("Please enter your name:");
    if (name) {
      this.showName(name);
      setTimeout(() => this.startGame(), 2000);
    }
  }
  // DOM Update

  showName(name) {
    const app = document.getElementById('app');
    app.innerHTML = ''; 
    const nameMessage = document.createElement('h1');
    nameMessage.textContent = `Hello, ${name}! Are you ready to play Tic-Tac-Toe? Loading...`;
    app.appendChild(nameMessage);
  }

  // MOUNT
  startGame() {
    const app = document.getElementById('app');
    app.innerHTML = ''; 
    const game = new TicTacToe();
    game.mount(app);
  }
}
