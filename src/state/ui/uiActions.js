import { createAction } from 'redux-actions';
import uiActionTypes from './uiActionTypes';

export const selectGame = createAction(uiActionTypes.SELECT_GAME);
export const deselectGame = createAction(uiActionTypes.DESELECT_GAME);
