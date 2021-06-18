import React, { Component } from 'react';
import Square from './Square';
import '../static/Board.css'
import { ROOK_B, KNIGHT_B, BISHOP_B, PAWN_B, QUEEN_B, KING_B } from '../Piece';
import { ROOK_W, KNIGHT_W, BISHOP_W, PAWN_W, QUEEN_W, KING_W } from '../Piece';

export default class Board extends Component {
    constructor(props){
        super(props);
        this.state = {
            allSquare: [],
            toMove: {piece: '', position: ''}
        }
    }

    componentDidMount(){
        const theFile = ["a", "b", 'c', "d", "e", "f", "g", "h"];
        const theRank = [1, 2, 3, 4, 5, 6, 7, 8];
        const squares = [];
        for (let i = 0; i < theRank.length; i ++){
            var positions = theFile.map(item => {
                var position = item+(8-i);
                var pieceDefault = '';
                switch(position) {
                    case 'a1':
                    case 'h1': {
                        pieceDefault = ROOK_W;
                        break;
                    }
                    case 'b1':
                    case 'g1': {
                        pieceDefault = KNIGHT_W;
                        break;
                    }
                    case 'c1':
                    case 'f1': {
                        pieceDefault = BISHOP_W;
                        break;
                    }
                    case 'e1': {
                        pieceDefault = KING_W;
                        break;
                    }
                    case 'd1': {
                        pieceDefault = QUEEN_W;
                        break;
                    }
                    case 'a2':
                    case 'b2':
                    case 'c2':
                    case 'd2':
                    case 'e2':
                    case 'f2':
                    case 'g2':
                    case 'h2': {
                        pieceDefault = PAWN_W;
                        break;
                    }
                    case 'a8':
                    case 'h8': {
                        pieceDefault = ROOK_B;
                        break;
                    }
                    case 'b8':
                    case 'g8': {
                        pieceDefault = KNIGHT_B;
                        break;
                    }
                    case 'c8':
                    case 'f8': {
                        pieceDefault = BISHOP_B;
                        break;
                    }
                    case 'e8': {
                        pieceDefault = KING_B;
                        break;
                    }
                    case 'd8': {
                        pieceDefault = QUEEN_B;
                        break;
                    }
                    case 'a7':
                    case 'b7':
                    case 'c7':
                    case 'd7':
                    case 'e7':
                    case 'f7':
                    case 'g7':
                    case 'h7': {
                        pieceDefault = PAWN_B;
                        break;
                    }
                }
                return { position: position, currentPiece: pieceDefault }
            })
            squares.push(positions);
        }
        this.setState({
            allSquare: squares
        })
    }

    render(){
        const { allSquare } = this.state
        console.log(allSquare);
        return(
            <div className="board">
                {allSquare.length > 0 && allSquare.map((item, x) => (
                    <div className="thefile">
                        {allSquare[x].map((item2, y) => {
                            if((x % 2 === 0 && y % 2 === 0) || (x % 2 != 0 && y % 2 != 0)){
                                return <Square color="white" piece={item2.currentPiece} />
                            }
                            return <Square color="black" piece={item2.currentPiece} />
                        })}
                    </div>
                    
                ))}
            </div>
        )
    }
}