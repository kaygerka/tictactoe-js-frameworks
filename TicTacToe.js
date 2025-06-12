// Component #2: TicTacToe
import { Component } from './framework.js';
export class TicTacToe extends Component {
    constructor() {
        super();
        // State
        this.state = {
            board: Array(9).fill(null),
            currentPlayer: 'X',
            winner: null,
            isDraw: false
        };
        
    }

    render() {
        const container = document.createElement('div');
        container.className = 'tic-tac-toe';

        const status = document.createElement('div');
        status.className = 'status';
        if (this.state.winner) {
            // DOM UPDATE
            status.textContent = `Winner: ${this.state.winner}`;
        } else if (this.state.isDraw) {
            status.textContent = "It's a tie!";
        } else {
            status.textContent = `Next player: ${this.state.currentPlayer}`;
        }
        container.appendChild(status);

        const board = document.createElement('div');
        board.className = 'board';
        for (let i = 0; i < 9; i++) {
            const square = document.createElement('div');
            square.className = 'square';
            square.textContent = this.state.board[i] || '';
            square.addEventListener('click', () => this.handleClick(i));
            board.appendChild(square);
        }
        container.appendChild(board);

        return container;
    }

    handleClick(i) {
        // State
        const board = [...this.state.board];
        if (this.state.winner || this.state.isDraw || board[i]) return;
        board[i] = this.state.currentPlayer;
        const winner = this.calculateWinner(board);
        const isDraw = this.checkDraw(board);
        this.setState({
            board: board,
            currentPlayer: this.state.currentPlayer === 'X' ? 'O' : 'X',
            winner: winner,
            isDraw: isDraw
        });
    }

    calculateWinner(board) {
        const lines = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                return board[a];
            }
        }
        return null;
    }

    checkDraw(board) {
        return board.every(square => square !== null);
    }

    setState(newState) {
        this.state = { ...this.state, ...newState };
        this.update();
    }

    update() {
        if (this.element && this.element.parentNode) {
            const newElement = this.render();
            this.element.parentNode.replaceChild(newElement, this.element);
            this.element = newElement;
        }
    }

    mount(parent) {
        this.element = this.render();
        parent.appendChild(this.element);
    }
}
