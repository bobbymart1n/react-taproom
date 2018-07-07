import React from 'react';
import PropTypes from 'prop-types';
import styles from './KegListItem.css';
import SellPintButton from './../SellPintButton/SellPintButton';
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
          <span><SellPintButton onSellingPint={props.onSellingPint} kegId={props.kegId}/></span>
        </div>
        <img src={arrow} />
        <div style={pintRemaining} className={styles.pintsRemaining}>
        </div>
      </div>
      <ul>
        <li><span>Brewer:</span> {props.brewer}</li>
        <li><span>Description:</span> {props.description}</li>
        <li><span>ABV:</span> {props.abv}</li>
        <li><span>Price:</span> ${props.price}</li>
        <li><span>Pints Remaining:</span> {props.remaining}</li>
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
  onSellingPint: PropTypes.func.isRequired,
  kegId: PropTypes.string.isRequired,
  remaining: PropTypes.number.isRequired,
};

export default KegListItem;
