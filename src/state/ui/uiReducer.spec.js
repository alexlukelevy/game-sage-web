import uiReducer from './uiReducer';
import uiActionTypes from './uiActionTypes';

describe('uiReducer', () => {
  it('should return an initial state', () => {
    expect(uiReducer(undefined, {})).to.deep.equal({ selectedGames: {} });
  });

  it('should handle SELECT_GAME action', () => {
    const action = {
      type: uiActionTypes.SELECT_GAME,
      payload: 'Driveclub',
    };

    const state = {
      selectedGames: {
        'DIRT 4': true,
      },
    };

    expect(uiReducer(state, action)).to.deep.equal({
      selectedGames: {
        'DIRT 4': true,
        Driveclub: true,
      },
    });
  });

  it('should handle DESELECT_GAME action', () => {
    const action = {
      type: uiActionTypes.DESELECT_GAME,
      payload: 'Driveclub',
    };

    const state = {
      selectedGames: {
        'DIRT 4': true,
        Driveclub: true,
      },
    };

    expect(uiReducer(state, action)).to.deep.equal({
      selectedGames: {
        'DIRT 4': true,
      },
    });
  });
});
