import { deselectGame, selectGame } from './uiActions';
import uiActionTypes from './uiActionTypes';

describe('uiActions', () => {
  describe('#selectGame()', () => {
    it('should create an action with the following type and payload', () => {
      expect(selectGame('Destiny 2')).to.deep.equal({
        type: uiActionTypes.SELECT_GAME,
        payload: 'Destiny 2',
      });
    });
  });
  describe('#deselectGame()', () => {
    it('should create an action with the following type and payload', () => {
      expect(deselectGame('Destiny 2')).to.deep.equal({
        type: uiActionTypes.DESELECT_GAME,
        payload: 'Destiny 2',
      });
    });
  });
});
