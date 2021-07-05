import { ADD_GAME } from './actionType';
import { FINISH_GAME } from './actionType';

const aiGameInitState = {
    aiGames: []
}

const aiGameReducer = (state = aiGameInitState, action) => {
    switch(action.type) {
        case ADD_GAME: {
            return {
                ...state,
                aiGames: [
                    action.payload,
                    ...state.aiGames
                ]
            }
        }
        // case FINISH_GAME: {
        //     return {
        //         ...state,

        //     }
        // }
        default: {
            return state;
        }
    }
}

export default aiGameReducer;