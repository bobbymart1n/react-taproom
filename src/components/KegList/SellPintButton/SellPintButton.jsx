import React from 'react';
import PropTypes from 'prop-types';
import styles from './SellPintButton.css';

function SellPintButton(props) {
  const sellPint = () => props.onSellingPint(props.kegId);
  return(
    <div>
      <button className={styles.sellKegButton} onClick={sellPint}>Sell Pint</button>
    </div>
  );
}
SellPintButton.propTypes = {
  onSellingPint: PropTypes.func.isRequired,
  kegId: PropTypes.string.isRequired
};

export default SellPintButton;
