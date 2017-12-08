import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';

const styles = {
  card: {
    width: 300,
    margin: '0.5em',
    padding: '0.5em',
  },
  subheader: {
    padding: 0,
  },
  img: {
    width: 24,
  },
};

export default function HitItem({ result: { _source } }) {
  return (
    <Card style={styles.card}>
      <CardHeader
        title={_source.name}
        avatar={_source.icon}
        actAsExpander
        showExpandableButton
      />
      <CardText expandable>
        <Divider />
        <Subheader style={styles.subheader}>SIMILAR GAMES</Subheader>
        {
          _source.similar.map(game => (
            <div key={game.name} style={{ display: 'flex', margin: '0.5em 0' }}>
              <div className="gs-icon">
                <img src={game.icon} alt={game.name} style={styles.img} />
              </div>
              <div>
                <span >{game.name}</span>
              </div>
            </div>
          ))
        }
      </CardText>
    </Card>
  );
}

HitItem.propTypes = {
  result: PropTypes.shape({
    _source: PropTypes.shape({
      name: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
      similar: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired,
      }).isRequired).isRequired,
    }).isRequired,
  }).isRequired,
};
