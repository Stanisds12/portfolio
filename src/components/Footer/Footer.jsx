import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerTitle}>Portfolio</div>
        {/* <p className={styles.footerText}>
          Crafted with ❤️ using React and modern CSS
        </p> */}
        <div className={styles.socialLinks}>
          <a 
            href="https://github.com/Stanisds12" 
            className={styles.socialLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
          >
            <Github size={24} />
          </a>
          <a 
            href="https://www.linkedin.com/in/stanislau-ebo/" 
            className={styles.socialLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={24} />
          </a>
          <a 
            href="mailto:stanislauebo@gmail.com" 
            className={styles.socialLink}
            aria-label="Email Contact"
          >
            <Mail size={24} />
          </a>
        </div>
        <div className={styles.copyright}>
          © {new  Date().getFullYear()} Stani Developer. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;