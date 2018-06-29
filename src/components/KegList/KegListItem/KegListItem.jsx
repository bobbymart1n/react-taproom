import React from 'react';
import styles from './KegListItem.css';
import SellKegButton from './../SellKegButton/SellKegButton';

function KegListItem() {
  return (
    <div className={styles.kegListItem}>
      <div className={styles.kegName}>Keg Name goes Here <span><SellKegButton/></span></div>
    </div>
  );
}

export default KegListItem;
