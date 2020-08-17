import React, { Component } from 'react';
import Board from './Board';

function calculateWinner(squares){
    const lines = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
        
    ]

    for(let i =0; i<lines.length; i++){
        const [a,b,c] = lines[i]
        if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
            return squares[a]
        }
    }
    return null;
}
class Game extends Component {
    state = {
        history:[{squares: Array(9).fill(null)}],
        stepNumber:0,
        xIsNext:true
    }
    handleClick = i =>{
        
        const history = this.state.history.slice(0,this.state.stepNumber + 1);
        const current = history[history.length - 1]
        const squares = current.squares.slice();
        console.log(squares)
        console.log(current)
        if(calculateWinner(squares) || squares[i]){
            return 
        }
        squares[i] = this.state.xIsNext ? 'X' : '0'

        this.setState({
            history:history.concat([{squares:squares}]),
            stepNumber:history.length,
            xIsNext:!this.state.xIsNext
        })
    }
    render() {
        const history = this.state.history
        const current = history[this.state.stepNumber]
        const winner = calculateWinner(current.squares)
        console.log(winner)
        return (
            <div>
                <h2>Game Component</h2>
                <Board onClick={this.handleClick} squares={current.squares}/>
            </div>
        );
    }
}

export default Game;