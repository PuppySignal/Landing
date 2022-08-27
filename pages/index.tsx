// @Package
import Document from 'next/document';
import Image from 'next/image';
import Head from 'next/head'

// @Project
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>PuppySignal</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@400;900&display=swap" rel="stylesheet" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.banner} id="home">
          <div className={styles.bannerImage}>
            <img 
              src="/phone_landing.gif"
              alt="Landing demostration"
              className={styles.bannerImageImg} 
            />
          </div>
          <div className={styles.bannerInfo}>
            <p className={styles.title}>
              TRACK YOUR LOVED ONES
            </p>
            <p className={styles.subtitle}>
              NEVER LOSE THEM AGAIN.
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
              <p>
                PuppySignal is not yet available given it stills work in progress. 👷🏻‍♀️
              </p>
              {/*
              <a href="#">
                <img
                  src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                  width="150"
                  style={{ position: 'relative', right: 10, top: 25 }}
                  onClick={()=> alert("Work in progress.")}
                />
              </a>
              */}
            </p>
          </div>
        </div>
        <div className={styles.section} id="howtouse">
          <div className={styles.section_image}>
            <img 
              src="/qr.png" 
              alt="Landing demostration"
              className={styles.section_image_img} 
            />
          </div>
          <div className={styles.section_body}>
            <h1 className={styles.title_section}>How to use</h1>
            <p className={styles.description_section}>
              First you need to create an account, then it is as easy as creating your pet profile, once you've done it.
              A QR Code will be created for your pet. Print it and make an awesome tag/collar with it, <strong>✨ be creative ✨ 👩🏻‍🎨 🎨</strong>
            </p>
          </div>
        </div>
        <div className={`${styles.section} ${styles.section_reverse}`} id="contact">
          <div className={styles.section_emoji}>
            <h1>💬</h1>
          </div>
          <div className={styles.section_body}>
            <h1 className={styles.title_section}>Contact</h1>
            <p className={styles.description_section}>
              Our contact email is <strong>contact@puppysignal.com</strong>, You can also contact us in any of our social medias.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
