import React from 'react';
import Board from "./Board";
import './index.css'

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            history: [{
                squares: Array(9).fill(null),
                location: null,
            }],
            stepNumber: 0,
            xIsNext: true,
        };
        this.jumpTo = this.jumpTo.bind(this);
    }

    handleClick(i) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        //make a copy of state
        const squares = current.squares.slice();
        //return early by ignoring a click if someone has won the game/draw game or if a Square is already filled.
        if (calculateWinner(squares)[0] || squares[i] || !squares.includes(null)) {
            return;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            history: history.concat([{
                squares: squares,
                location: i,
            }]),
            stepNumber: history.length,
            xIsNext: !this.state.xIsNext,
        });
    }

    jumpTo(step){
        this.setState({
            //recalculate history to rerender time travel list
            history: this.state.history.slice(0, step + 1),
            stepNumber: step,
            xIsNext: (step % 2) === 0,
        });
    }

    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winner = calculateWinner(current.squares)[0];
        const criticalMoves = calculateWinner(current.squares)[1];
        const moves = history.map((step, move) => {
            //calculate move's column and row
            const moveRowVal = parseInt(step.location / 3) + 1;
            const moveColVal = step.location % 3 + 1;
            const desc = move ?
                'Go to move #' + move + ' ['+ moveRowVal +']['+ moveColVal +']':
                'Go to game start';

            //Bold the currently selected item in the move list.
            const style = this.state.stepNumber === move ? 'font-weight-bold' : '';
            return (
                <li key={move}>
                    <button className={style} onClick={() => this.jumpTo(move)}>{desc}</button>
                </li>
            );
        });

        let status;
        if (winner) {
            status = 'Winner: ' + winner;
        } else {
            status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        }
        return (
            <div className="game" data-testid='game-tic-tac-toe'>
                <div className="game-board">
                    <Board
                        criticalMoves={criticalMoves}
                        squares={current.squares}
                        onClick={(i) => this.handleClick(i)}
                    />
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    <ol>{moves}</ol>
                </div>
            </div>
        );
    }
}

/**
 * get winner and critical moves
 * @param squares
 * @returns {*[]} 1st is who, 2nd array is which moves win
 */
function calculateWinner(squares) {
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
            return [squares[a], [a, b, c]];
        }
    }
    return [null, []];
}
export default Game
