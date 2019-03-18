import React, { Component } from 'react';
import Board from './Board';
import './Game.css';
import './animate.css';

class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            history: [{
                squares: Array(9).fill(null)
            }],
            stepNumber: 0,
            xIsNext: true
        }
    }

    calculateWinner(squares) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    }

    handleClick(i) {
        // console.log(this.state.stepNumber)
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = [...current.squares];
        if (this.calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({ 
            history: history.concat([{squares: squares}]),
            stepNumber: history.length,
            xIsNext: !this.state.xIsNext })
    }

    jumpTo(step) {
        this.setState({
            stepNumber: step,
            xIsNext: step % 2 === 0
        })
    }

    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winner = this.calculateWinner(current.squares); 

        const moves = history.map((step, move) => {
            const desc = move ? 'Go to move #' + move : 'Go to game start';
            return (
                <li key={move}>
                    <button className='moves' onClick={() => this.jumpTo(move)}>{desc}</button>
                </li>
            )
        })

        let gameStatus;
        console.log(this.state.stepNumber)
        
        if(this.state.stepNumber === 9 && !winner) {
            gameStatus = "It's a draw!"
            console.log(gameStatus)
        } else if(winner) {
            gameStatus = `Winner: ${winner}!`;
        } else {
            gameStatus = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        }

        return (
        <div className='game'>
            <div className='game-board'>
                <Board squares={current.squares} onClick={(i) => this.handleClick(i)} />
            </div>
            <div className='game-info'>
                    {gameStatus.includes('Winner') ? 
                    <div className='status winner animated lightSpeedIn'>{gameStatus}</div> : <div className='status'>{gameStatus}</div>}
                    <ul>{moves}</ul>
            </div>
        </div>
        );
    }
}

export default Game;

// neon blue: #18dcff
// orange: #ffd700
// radiant yellow: #ff9f1a