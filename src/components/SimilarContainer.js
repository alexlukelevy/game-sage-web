import { connect } from 'react-redux';
import Similar from './Similar';

function mapStateToProps(state) {
  return {
    games: state.ui.similar,
  };
}


export default connect(mapStateToProps)(Similar);
