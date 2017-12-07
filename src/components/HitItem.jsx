import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  wrapper: {
    display: 'flex',
    borderBottom: '1px solid #C0C0C0',
    width: '100%',
    cursor: 'pointer',
    margin: '0.5em',
    padding: '0.5em',
  },
};

export default function HitItem({ onClick, selected, result: { _source } }) {
  return (
    <div
      style={{
        ...styles.wrapper,
        color: selected ? 'white' : 'black',
        backgroundColor: selected ? 'black' : 'white',
      }}
      onClick={() => onClick(_source)}
    >
      <div className="gs-icon">
        <img src={_source.icon} alt={_source.name} />
      </div>
      <div>
        <h3>{_source.name}</h3>
      </div>
    </div>
  );
}

HitItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  selected: PropTypes.bool.isRequired,
  result: PropTypes.shape({
    _source: PropTypes.shape({
      name: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
