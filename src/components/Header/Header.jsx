import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.css';

function Header() {
  const linkStyle = {
    textDecoration: 'none'
  };
  return(
    <div className={styles.nav}>
      <Link to='/' style={linkStyle}><h1>Jerry's Tap Room</h1></Link>
    </div>
  );
}

export default Header;
