import React from 'react';
import { Link } from 'react-router-dom';
import styles from './AddKegButton.css';

function AddKegButton() {
  return (
    <div>
      <Link to='/newkeg'><button className={styles.addKegButton}>Add a New Keg!</button></Link>
    </div>
  );
}

export default AddKegButton;
