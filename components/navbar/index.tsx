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
          <Image 
            src="/logo.png"
            alt="logo"
            layout="fixed"
            quality={100}
            objectFit="scale-down"
            width={50}
            height={50}
          />
        </a>
        <ul className={styles.buttons}>
          <li><a href="#howtouse">How to use</a></li>
          <li><a href="#why">Why PuppySignal?</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#support">Support</a></li>
        </ul>
        <div className={styles.burgericon} onClick={() => setBurgerMenuOpen(true)}>
          <GiHamburgerMenu color="#fd5a5f" size={32} />
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
            <li><a href="#why">Why PuppySignal?</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#support">Support</a></li>
          </ul>
        </div>
      )}
    </>
  );
}

export default Navbar;