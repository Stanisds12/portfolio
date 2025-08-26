import React from 'react';
import { ChevronDown } from 'lucide-react';
import Button from '../Button/Button';
import styles from './Hero.module.css';
import staniImg from '../../images/stani.jpeg';

const Hero = ({ scrollToSection }) => {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.heroContent}>
        <img className={styles.avatar}  src={staniImg} alt='avatar'/>
        <h1 className={styles.heroTitle}>Stani Developer</h1>
        <p className={styles.heroSubtitle}>
          Full-Stack Developer crafting digital experiences with modern technologies
        </p>
        <div className={styles.heroButtons}>
          <Button 
            variant="primary"
            onClick={() => scrollToSection('projects')}
          >
            View My Work
          </Button>
          <Button 
            variant="secondary"
            onClick={() => scrollToSection('contact')}
          >
            Get In Touch
          </Button>
        </div>
        
        <div className={styles.scrollIndicator}>
          <ChevronDown size={32} />
        </div>
      </div>
    </section>
  );
};

export default Hero;