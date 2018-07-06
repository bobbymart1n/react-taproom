import React from 'react';
import PropTypes from 'prop-types';
import styles from './SellPintButton.css';

function SellPintButton(props) {
  return(
    <div>
      <button className={styles.sellKegButton} onClick={props.onSellingPint(props.kegId)}>Sell Pint</button>
    </div>
  );
}
SellPintButton.propTypes = {
  onSellingPint: PropTypes.func.isRequired,
  kegId: PropTypes.string.isRequired
};

export default SellPintButton;
