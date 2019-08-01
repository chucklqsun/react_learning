import React from 'react';

class Square extends React.Component {
    render() {
        const style = `square ${this.props.style}`;
        console.log(style);
        return (
            <button
                className={style}
                onClick={() => this.props.onClick()}
            >
                {this.props.value}
            </button>
        );
    }
}


class Board extends React.Component {
    renderSquare(i) {
        //When someone wins, highlight the three squares that caused the win.
        const style = this.props.criticalMoves.includes(i) ? 'font-color-red' : '';
        return <Square
            style={style}
            key={i}
            value={this.props.squares[i]}
            onClick={() => this.props.onClick(i)}
        />;
    }


    render() {
        //use two loops to make the squares instead of hard coding them.
        let rows = [];
        for(let i=0;i<3;i++){
            let cols = [];
            for(let j=0;j<3;j++){
                cols.push(
                    this.renderSquare(3 * i + j)
                )
            }
            rows.push(
                <div key={i} className="board-row">
                    {cols}
                </div>
            )
        }

        return (
            <div>
                {rows}
            </div>
        );
    }
}

export default Board;
