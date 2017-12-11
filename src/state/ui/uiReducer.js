import { handleActions } from 'redux-actions';
import uiActionTypes from './uiActionTypes';

function selectReducer(state, { payload }) {
  return {
    ...state,
    selectedGames: {
      ...state.selectedGames,
      [payload]: true,
    },
  };
}

function deselectReducer(state, { payload }) {
  const { [payload]: deleted, ...remaining } = state.selectedGames;

  return {
    ...state,
    selectedGames: {
      ...remaining,
    },
  };
}

export default handleActions(
  {
    [uiActionTypes.SELECT_GAME]: selectReducer,
    [uiActionTypes.DESELECT_GAME]: deselectReducer,
  },
  {
    selectedGames: {},
  },
);
