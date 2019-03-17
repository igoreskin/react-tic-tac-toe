import React, { Component } from 'react';
import Square from './Square';
import './Board.css';

class Board extends Component {
    // constructor(props) {
    //     super(props);

    //     this.state = {
    //         squares: Array(9).fill(null),
    //         xIsNext: true,
    //         isDraw: false,
    //         count: 0,
    //     }
    // }

    // handleClick(i) {
    //     let count = this.state.count;
    //     count++;
    //     this.setState({
    //         count: count
    //     })
    //     console.log(this.state.count);

    //     const squares = [...this.state.squares];
    //     if(this.calculateWinner(squares) || squares[i]) {
    //         return;
    //     } 
    //     //     else if (this.state.count === 8) {
    //     //     console.log("no winner")
    //     //     this.setState({
    //     //         isDraw: true
    //     //     })
    //     // }
    //     squares[i] = this.state.xIsNext ? 'X' : 'O';
    //     this.setState({squares: squares, xIsNext: !this.state.xIsNext})
    // }

    renderSquare(i) {
        return (
        <Square value={this.props.squares[i]} onClick={() => this.props.onClick(i)} />
        );
    }

    // calculateWinner(squares) {
    //     const lines = [
    //         [0, 1, 2],
    //         [3, 4, 5],
    //         [6, 7, 8],
    //         [0, 3, 6],
    //         [1, 4, 7],
    //         [2, 5, 8],
    //         [0, 4, 8],
    //         [2, 4, 6],
    //     ];
    //     for (let i = 0; i < lines.length; i++) {
    //         const [a, b, c] = lines[i];
    //         if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
    //         return squares[a];
    //         }
    //     }
    //     return null;
    // }

    render() {

        // const winner = this.calculateWinner(this.state.squares);
        // let gameStatus;
        // if(this.state.isDraw) {
        //     gameStatus = 'This is a draw!';
        //     return;
        // }
        // if(winner) {
        //     gameStatus = `Winner: ${winner}`;
        // } else {
        //     gameStatus = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        // }

        return (
            <div className="board">
                {/* <div className="status">{gameStatus}</div> */}
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        )
    }

}

export default Board;