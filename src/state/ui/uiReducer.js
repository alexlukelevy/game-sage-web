import { handleAction } from 'redux-actions';
import uiActionTypes from './uiActionTypes';

function reducer(state, { payload }) {
  return payload;
}

export default handleAction(uiActionTypes.SELECT_GAME, reducer,
  {
    name: '',
    similar: [],
  },
);
