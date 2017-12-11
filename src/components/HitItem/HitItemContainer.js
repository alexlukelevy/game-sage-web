/* eslint-disable no-underscore-dangle */
import { connect } from 'react-redux';
import HitItem from './HitItem';
import { deselectGame, selectGame } from '../../state/ui/uiActions';

function mapStateToProps(state, ownProps) {
  const game = ownProps.result._source.name;

  return {
    expanded: !!state.ui.selectedGames[game],
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  const game = ownProps.result._source.name;

  return {
    onExpandChange(expanded) {
      if (expanded) {
        dispatch(deselectGame(game));
      } else {
        dispatch(selectGame(game));
      }
    },
  };
}

function mergeProps(stateProps, dispatchProps, ownProps) {
  return {
    ...ownProps,
    ...stateProps,
    onExpandChange: () => dispatchProps.onExpandChange(stateProps.expanded),
  };
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(HitItem);
