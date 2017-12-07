import React from 'react';
import PropTypes from 'prop-types';

export default function Similar({ games }) {
  if (!games.length) {
    return <span>Select a game to find similar games</span>;
  }

  return (
    <ul>
      {
        games.map(game => (
          <div key={game.name} style={{ display: 'flex', margin: '0.5em 0' }}>
            <div className="gs-icon">
              <img src={game.icon} alt={game.name} />
            </div>
            <div>
              <h3>{game.name}</h3>
            </div>
          </div>
        ))
      }
    </ul>
  );
}

Similar.propTypes = {
  games: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  }).isRequired).isRequired,
};
