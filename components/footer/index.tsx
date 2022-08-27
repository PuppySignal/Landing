// @Package
import React from 'react';
import Link from 'next/link';

// @Own
import styles from '../../styles/Footer.module.css';

const Footer: React.FC<any> = (props) => {
  return (
    <footer className={styles.footer}>
      <p>
        <Link href="/"><a>PuppySignal</a></Link>
        {/*
          <Link href="/terms-of-service"><a> Terms of Service</a></Link> -
          <Link href="/privacy-police"><a> Privacy Police</a></Link>
        */}
      </p>
    </footer>
  );
}

export default Footer;