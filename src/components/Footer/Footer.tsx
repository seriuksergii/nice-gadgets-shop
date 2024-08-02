import React from 'react';
import styles from './Footer.module.scss';
import buttonBackToTop from '../../images/icons/buttonBackToTop.png'
import { Logo } from '../Logo/Logo';
import { Link } from 'react-router-dom';


export const Footer: React.FC = () => {
  const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};


  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <a href="https://github.com/fs-apr24-Tech-Titans" className={styles.logoLink}>
             <Logo src="/img/icons/logo-pink.svg" />
        </a>
        <nav className={styles.nav}>
          <a
            href="https://github.com/fs-apr24-Tech-Titans"
            className={styles.item}
            target="_blank"
          >
            GitHub
          </a>
          <Link
            to={'aboutUs'}
            className={styles.item}
          >
            About us
          </Link>
          <a
            href="https://github.com/fs-apr24-Tech-Titans"
            className={styles.item}
            target="_blank"
          >
            Rights
          </a>
        </nav>
        <div className={styles.backToTop}   onClick={scrollToTop}>
  <p className={styles.backToTopText}>Back to top</p>
  <button
    aria-label="Scroll to top"
    type="button"
    id="back-to-top"
    className={styles.backToTopButton}
  >
    <img
      src={buttonBackToTop}
      alt="back to top"
      className={styles.backToTopIcon}
    />
  </button>
</div>
      </div>
    </footer>
  );
};
