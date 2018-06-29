import React from 'react';
import PropTypes from 'prop-types';
import styles from './KegListItem.css';
import SellKegButton from './../SellKegButton/SellKegButton';
import arrow from './../../../images/angle-down-solid.svg';

function KegListItem(props) {
  const pintRemaining = {
    width: props.remaining + '%',
  };
  return (
    <div className={styles.kegListItem}>
      <div className={styles.kegName}>
        <div className={styles.kegNameAndButton}>
          {props.name}
          <span><SellKegButton/></span>
        </div>
        <img src={arrow} />
        <div style={pintRemaining} className={styles.pintsRemaining}>
          <span>Pints Remaining: {props.remaining}</span>
        </div>
      </div>
      <ul>
        <li><span>Brewer:</span> {props.brewer}</li>
        <li><span>Description:</span> {props.description}</li>
        <li><span>ABV:</span> {props.abv}</li>
        <li><span>Price:</span> ${props.price}</li>
        <li><span>Pints Remaing:</span> {props.remaining}</li>
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
