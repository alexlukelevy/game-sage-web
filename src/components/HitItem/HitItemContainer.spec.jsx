import React from 'react';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import HitItemContainer from './HitItemContainer';
import { deselectGame, selectGame } from '../../state/ui/uiActions';

describe('ActivityGraphContainer', () => {
  let props;
  let store;
  let component;

  beforeEach(() => {
    props = {
      result: {
        _source: {
          name: 'Spyro',
          icon: 'https://url/spyro.jpg',
          similar: [],
        },
      },
    };

    const state = {
      ui: {
        selectedGames: {
          Spyro: true,
          Crash: true,
        },
      },
    };

    store = configureMockStore()(state);

    component = shallow(<HitItemContainer {...props} store={store} />);
  });

  it('should translate the state to props', () => {
    expect(component).to.have.prop('expanded', true);
  });

  describe('#onExpandChange()', () => {
    describe('when expanded', () => {
      it('should dispatch deselectGame action', () => {
        component.props().onExpandChange();

        expect(store.getActions()).to.deep.equal([deselectGame('Spyro')]);
      });
    });

    describe('when closed', () => {
      beforeEach(() => {
        const state = {
          ui: {
            selectedGames: {
              Crash: true,
            },
          },
        };

        store = configureMockStore()(state);

        component = shallow(<HitItemContainer {...props} store={store} />);
      });

      it('should dispatch selectGame action', () => {
        component.props().onExpandChange();

        expect(store.getActions()).to.deep.equal([selectGame('Spyro')]);
      });
    });
  });
});
