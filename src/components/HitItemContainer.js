import { connect } from 'react-redux';
import { selectGame } from '../state/ui/uiActions';
import HitItem from './HitItem';

function mapStateToProps(state, ownProps) {
  return {
  // eslint-disable-next-line no-underscore-dangle
    selected: state.ui.name === ownProps.result._source.name,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onClick(game) {
      dispatch(selectGame(game));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HitItem);
