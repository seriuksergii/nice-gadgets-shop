import React from 'react';
import styles from './Footer.module.scss';
import buttonBackToTop from '../../images/icons/buttonBackToTop.png';
import { Link } from 'react-router-dom';
import { useTheme } from '../../Contexts/ThemeContext';
import { useTranslation } from 'react-i18next';

export const Footer: React.FC = () => {
  const { t } = useTranslation();
  const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

  const { theme } = useTheme();

  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
      {theme === 'light' ? (
          <Link to="/" className={styles.logoLink}>
            <img
              src="/img/icons/logo-pink.svg"
              alt="Nice Gadgets Logo"
            />
          </Link>
        ) : (
          <Link to="/" className={styles.logoLink}>
            <img
              src="/img/icons/logo-white.svg"
              alt="Nice Gadgets Logo"
            />
          </Link>
        )}
        <nav className={styles.nav}>
          <a href="https://github.com/fs-apr24-Tech-Titans" className={styles.item} target="_blank">
            GitHub
          </a>
          <Link
            to={'aboutUs'}
            className={styles.item}
          >
            {t('footer.about_us')}
          </Link>
          <a
            href="https://github.com/fs-apr24-Tech-Titans"
            className={styles.item}
            target="_blank"
          >
            {t('footer.rights')}
          </a>
        </nav>
        <div className={styles.backToTop}   onClick={scrollToTop}>
  <p className={styles.backToTopText}>{t('footer.back_to_top')}</p>
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
