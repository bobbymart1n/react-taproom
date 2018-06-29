import React from 'react';
import PropTypes from 'prop-types';
import styles from './KegListItem.css';
import SellKegButton from './../SellKegButton/SellKegButton';

function KegListItem(props) {
  return (
    <div className={styles.kegListItem}>
      <div className={styles.kegName}>{props.name}<span><SellKegButton/></span></div>
      <ul>
        <li>{props.brewer}</li>
        <li>{props.description}</li>
        <li>{props.abv}</li>
        <li>{props.price}</li>
        <li>{props.remaining}</li>
      </ul>
    </div>
  );
}

KegListItem.propTypes = {
  name: PropTypes.string.isRequired,
  brewer: PropTypes.string.isRequired,
  description: PropTypes.string,
  abv: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  remaining: PropTypes.string.isRequired
};

export default KegListItem;
