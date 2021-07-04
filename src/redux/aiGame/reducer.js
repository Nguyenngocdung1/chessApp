import { ADD_GAME } from './actionType';

const aiGameInitState = {
    aiGames: []
}

const aiGameReducer = (state = aiGameInitState, action) => {
    switch(action.type) {
        case ADD_GAME: {
            let _state = state;
            _state.aiGames.push(action.payload);
            return _state
        }
        default: {
            return state;
        }
    }
}

export default aiGameReducer;