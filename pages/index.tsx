// @Package
import Document from 'next/document';
import Image from 'next/image';
import Head from 'next/head'

// @Project
import PhonesImage from '../public/phones.png';
import Navbar from '../components/navbar';
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Paw scanner</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@400;900&display=swap" rel="stylesheet" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.banner} id="home">
          <div className={styles.bannerInfo}>
            <p className={styles.title}>
              LOSE YOUR LOVED ONES?
            </p>
            <p className={styles.subtitle}>
              NEVER EVER AGAIN
            </p>
            <p className={styles.description}>
              Upgrade for free your simple pet's tag with an unique QR Code
              <br/>
              It will allows to track your pet's last locations, store all the owners up to date information
              <br/>
              And many other features up to come in the feature!
              <br/><br/>
              <strong>What do you need to start?</strong>
              <br/>
              PawsTracer is currently available for Android and Web.
            </p>
          </div>
          <div className={styles.bannerImage}>
            <div className={styles.bannerImageBg}></div>
            <Image 
              src="/phones.png" 
              alt="Landing demostration" 
              layout="responsive"
              quality={100}
              width={1350}
              height={1450}
              objectFit="scale-down"
              className={styles.bannerImageImg} 
            />
          </div>
        </div>
        <div className={styles.howtosection} id="howtouse">
          <h1>How does it works?</h1>
          <p>It's pretty simple <strong>and cheap</strong>!</p>
          <ul>
            <li>You create an account</li>
            <li>Then register your pet</li>
            <li><strong>A QR Code will be generated for your pet</strong></li>
            <li>Print in and make an awesome tag/collar with it, <strong>✨ be creative ✨ 👩🏻‍🎨 🎨</strong></li>
          </ul>
          <p>
            That's it! If someday your pet get lost (We hope it doesn't).
            <br/>
            If people scan the code, you will be notified with his gps locations, and many options to be in contact with who scanned it</p>
        </div>
        <div className={styles.whysection} id="why">
          <h1>Why should I use PawsTracer?</h1>
          <p>
            Well, that's a good question, there's currently a few others options in the market.
            So why would you should use PawsTracer?
            <br/><br/>
            It's free! You don't need to first buy any kind of tag to activate your pet. It will be available for free to scan and print.
            With PawsTracer your friend will always be the maxium priority.
          </p>
        </div>
        <div className={styles.whysection} id="pricing">
          <h1>Pricing</h1>
          <p>
            Free.
          </p>
        </div>
        <div className={styles.whysection} id="support">
          <h1>Support</h1>
          <p>
            help@pawstracer.com
          </p>
        </div>
      </main>
      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
