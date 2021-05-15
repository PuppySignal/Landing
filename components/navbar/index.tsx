// @Package
import React from 'react';

// @Own
import Logo from '../../public/logo.svg';
import styles from '../../styles/Navbar.module.css';

const Navbar: React.FC<any> = (props) => {

  return (
    <nav className={styles.navbar}>
      <a href="#home"><Logo className={styles.logo} /></a>
      <ul className={styles.buttons}>
        <li><a href="#howtouse">How to use</a></li>
        <li><a href="#why">Why PuppySignal?</a></li>
        <li><a href="#pricing">Pricing</a></li>
        <li><a href="#support">Support</a></li>
      </ul>
      <div className={styles.cta}>
        Create an account
      </div>
    </nav>
  );
}

export default Navbar;