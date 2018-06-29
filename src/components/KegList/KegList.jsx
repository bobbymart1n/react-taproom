import React from 'react';
import KegListItem from './KegListItem/KegListItem';
import AddKegButton from './AddKegButton/AddKegButton';


import styles from './KegList.css';

function KegList() {
  return (
    <div className={styles.kegList}>
      <KegListItem />
      <AddKegButton />
    </div>
  );
}

export default KegList;
