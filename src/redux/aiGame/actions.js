import { ADD_GAME } from './actionType';

export const addGame = (item) => ({
    type: ADD_GAME,
    payload: item
})