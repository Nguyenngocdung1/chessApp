import { ROOK_B, KNIGHT_B, BISHOP_B, PAWN_B, QUEEN_B, KING_B } from '../Piece';
import { ROOK_W, KNIGHT_W, BISHOP_W, PAWN_W, QUEEN_W, KING_W } from '../Piece';

const eightMoves = [1, 2, 3, 4, 5, 6, 7, 8]

export const pieceMove = (x, y, curX, curY, pie) => {
    let possiblePoints = [];
    switch(pie){
        case ROOK_W:
        case ROOK_B: 
        {
            for (let i = 1; i <= 7; i ++){
                possiblePoints.push({a: curX + i, b: curY});
                possiblePoints.push({a: curX - i, b: curY});
                possiblePoints.push({a: curX, b: curY + i});
                possiblePoints.push({a: curX, b: curY - i});
            }
            break;
        }
        case KNIGHT_B:
        case KNIGHT_W: {
            possiblePoints.push({a: curX + 2, b: curY + 1});
            possiblePoints.push({a: curX + 2, b: curY - 1});
            possiblePoints.push({a: curX - 2, b: curY + 1});
            possiblePoints.push({a: curX - 2, b: curY - 1});
            possiblePoints.push({a: curX + 1, b: curY + 2});
            possiblePoints.push({a: curX - 1, b: curY + 2});
            possiblePoints.push({a: curX + 1, b: curY - 2});
            possiblePoints.push({a: curX - 1, b: curY - 2});
            break;
        }
        case BISHOP_B:
        case BISHOP_W: {
            for (let i = 1; i <= 8; i ++){
                possiblePoints.push({a: curX + i, b: curY + i});
                possiblePoints.push({a: curX - i, b: curY - i});
                possiblePoints.push({a: curX + i, b: curY - i});
                possiblePoints.push({a: curX - i, b: curY + i});
            }
            break;
        }
        case PAWN_W: {
            if(curX === 6) {
                possiblePoints.push({a: curX - 2, b: curY});
            }
            possiblePoints.push({a: curX - 1, b: curY});
            break;
        }
    }
    for (let i = 0; i < possiblePoints.length; i ++){
        if(possiblePoints[i].a === x && possiblePoints[i].b === y) return true
    }
    return false
}

// const pawnMove = (x, y, curX, curY) => {
//     let possibleX = [];
//     let possibleY = [];
//     for (let i = 1; i < eightMoves.length; i ++){
//         possibleX.push(curX + i);
//         possibleX.push(curY + i);
//     }
//     if(possibleX.includes({x, y})) {
//         return true
//     }
//     return false
// }