import React from 'react';
import KegListItem from './KegListItem/KegListItem';
import AddKegButton from './AddKegButton/AddKegButton';
import SellKegButton from './SellKegButton/SellKegButton';

import styles from './KegList.css';

function KegList() {
  return (
    <div className={styles.kegList}>
      <KegListItem />
      <SellKegButton />
      <AddKegButton />
    </div>
  );
}

export default KegList;
