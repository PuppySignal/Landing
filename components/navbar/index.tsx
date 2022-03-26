// @Package
import React, { useState } from 'react';
import Image from 'next/image';
import { GiHamburgerMenu } from 'react-icons/gi'

// @Own
import styles from '../../styles/Navbar.module.css';

const Navbar: React.FC<any> = (props) => {
  const [burgerMenuOpen, setBurgerMenuOpen] = useState<boolean>(false);

  return (
    <>
      <nav className={styles.navbar}>
        <a href="#home">
          <img 
            src="/logo.png"
            alt="logo"
            width={45}
            height={32}
          />
        </a>
        <ul className={styles.buttons}>
          <li><a href="#howtouse">How to use</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div className={styles.burgericon} onClick={() => setBurgerMenuOpen(true)}>
          <GiHamburgerMenu color="#8779F5" size={32} />
        </div>
        {/**
          <div className={styles.cta}>
            Create an account
          </div>
        */}
      </nav>
      {burgerMenuOpen && (
        <div className={styles.burgermenu}>
          <div
            className={styles.closeBtn}
            onClick={() => setBurgerMenuOpen(false)}
          >
            X
          </div>
          <ul className={styles.buttonsburger}>
            <li><a href="#howtouse">How to use</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      )}
    </>
  );
}

export default Navbar;