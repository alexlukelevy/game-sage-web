import { createAction } from 'redux-actions';
import uiActionTypes from './uiActionTypes';

// eslint-disable-next-line import/prefer-default-export
export const selectGame = createAction(uiActionTypes.SELECT_GAME);
