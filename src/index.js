import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Square(props) {
  return (
    <button className="square" onClick={props.onClick} style={{color: props.color}}>
      {props.value}
    </button>
  );
}

class Board extends React.Component {
  renderSquare(i) {
    return (
      <Square key={i}
        value={this.props.squares[i]}
        color={this.props.colors[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  render() {
    // Use two loop to make squares
    const boardSize = 3;
    let square = [];
    for (let i = 0; i < boardSize; i++) {
      let row = [];
      for (let j = 0; j < boardSize; j++) {
        row.push(this.renderSquare(i * boardSize + j))
      }
      square.push(<div key={i} className="board-row">{row}</div>)
    }

    return (
      <div>{square}</div>
    );
  }
}

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          squares: Array(9).fill(null),
          coord: {
            col: 0,
            row: 0
          },
          colors: Array(9).fill('black')
        },
      ],
      stepNumber: 0,
      xIsNext: true,
      isAscending: true,
    };
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    const colors = current.colors.slice();

    const coor = {
      col: 0,
      row: 0
    }

    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    switch (i) {
      case 0:
        coor.col = 1;
        coor.row = 1;
        break;
      case 1:
        coor.col = 2;
        coor.row = 1;
        break;
      case 2:
        coor.col = 3;
        coor.row = 1;
        break;
      case 3:
        coor.col = 1;
        coor.row = 2;
        break;
      case 4:
        coor.col = 2;
        coor.row = 2;
        break;
      case 5:
        coor.col = 3;
        coor.row = 2;
        break;
      case 6:
        coor.col = 1;
        coor.row = 3;
        break;
      case 7:
        coor.col = 2;
        coor.row = 3;
        break;
      case 8:
        coor.col = 3;
        coor.row = 3;
        break;
      default:
    }

    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat([{
        squares: squares,
        coord: coor,
        colors: colors
      }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0,
    });
  }

  sortMoves() {
    this.setState({
      isAscending: !this.state.isAscending,
    })
  }

  hightLightWins(location) {
    let size = 3;
    let colors = this.state.history[this.state.stepNumber].colors;
    for(let i = 0; i < size; i++) {
      colors[location[i]] = "red";
    }
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);
    const isFullBoard = checkFullBoard(current.squares);

    let moves = history.slice().map((step, move) => {
      const desc = move ?
        `Go to move #${move} (${step.coord.col}, ${step.coord.row})` :
        'Go to game start';
      if (move === this.state.stepNumber) {
        return (
          <li key={move}>
            <button style={{ color: 'red' }} onClick={() => this.jumpTo(move)}>{desc}</button>
          </li>
        );
      }
      else {
        return (
          <li key={move}>
            <button onClick={() => this.jumpTo(move)}>{desc}</button>
          </li>
        );
      }
    });

    if(!this.state.isAscending) {
      moves = moves.reverse();
    }
    
    let sort;
    if (this.state.isAscending) {
      sort = "descending";
    } else {
      sort = "ascending";
    }

    let status;
    if (winner) {
      status = 'Winner: ' + winner.winner;
      this.hightLightWins(winner.location);
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
      if(isFullBoard){
        status = "No one wins";
      }
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            colors={current.colors}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <button className="sortMoves" onClick={() => this.sortMoves()}>{sort}</button>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);

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
      return { 
                winner: squares[a],
                location: lines[i]
             }
    }
  }
  return null;
}

function checkFullBoard(square) {
  for (let index = 0; index < square.length; index++) {
    if(!square[index])
      return false;
  }
  return true;
}