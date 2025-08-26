import React, { useState } from 'react';
import { Menu, Moon, Sun, X } from 'lucide-react';
import styles from './Navigation.module.css';

const Navigation = ({ activeSection, isScrolled, scrollToSection,isDarkMode,toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = ['Home', 'About', 'Projects', 'Contact'];

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (item) => {
    scrollToSection(item.toLowerCase());
    setIsMenuOpen(false);
  };

  return (
    <nav className={`${styles.nav} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.navContent}>
        <div className={styles.logo}>Portfolio</div>
        
        <div className={styles.navLinks}>
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => handleNavClick(item)}
              className={`${styles.navLink} ${
                activeSection === item.toLowerCase() ? styles.active : ''
              }`}
            >
              {item}
            </button>
          ))}
              <div className={styles.navLinks} onClick={toggleDarkMode}>
            {isDarkMode ? <Moon color="#121212" /> : <Sun color="#121212" />}
          </div>
        </div>

        <button
          onClick={handleMenuToggle}
          className={styles.mobileMenuBtn}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className={styles.mobileMenu}>
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => handleNavClick(item)}
              className={styles.mobileNavLink}
            >
              {item}
            </button>
          ))}
          <div className={styles.mobileNavLink} onClick={toggleDarkMode}>
            {isDarkMode ? <Moon color="#121212" /> : <Sun color="#121212" />}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;