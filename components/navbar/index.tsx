// @Package
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { GiHamburgerMenu } from 'react-icons/gi'

// @Own
import styles from '../../styles/Navbar.module.css';

const Navbar: React.FC<any> = (props) => {
  const [burgerMenuOpen, setBurgerMenuOpen] = useState<boolean>(false);

  return (
    <>
      <nav className={styles.navbar}>
        <Link href="/#home">
          <a>
            <img 
              src="/logo.png"
              alt="logo"
              width={45}
              height={32}
            />
          </a>
        </Link>
        <ul className={styles.buttons}>
          <Link href="/#howtouse">
            <a>
              How to use
            </a>
          </Link>
          <Link href="/#contact">
            <a>
              Contact
            </a>
          </Link>
          {/*
          <Link href="/terms-of-service">
            <a>
              Terms of service
            </a>
          </Link>
          <Link href="/privacy-police">
            <a>
              Privacy police
            </a>
          </Link>
          */}
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
            <Link href="/#howtouse">
              <a>
                How to use
              </a>
            </Link>
            <Link href="/#contact">
              <a>
                Contact
              </a>
            </Link>
            {/*
              <Link href="/terms-of-service">
                <a>
                  Terms of service
                </a>
              </Link>
              <Link href="/privacy-police">
                <a>
                  Privacy police
                </a>
              </Link>
            */}
          </ul>
        </div>
      )}
    </>
  );
}

export default Navbar;