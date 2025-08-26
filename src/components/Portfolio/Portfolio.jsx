import React, { useState, useEffect } from 'react';
import Navigation from '../Navigation/Navigation';
import Hero from '../Hero/Hero';
import About from '../About/About';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import { scrollToSection } from '../../utils/scrollUtils';
import styles from './Portfolio.module.css';
import { enable as enableDarkMode, disable as disableDarkMode,setFetchMethod  } from 'darkreader';
import Education from '../Educatiion/Education';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  useEffect(() => {
    // Set the fetch method before enabling dark mode
setFetchMethod(window.fetch);
   const savedMode = localStorage.getItem('darkMode');
   if (savedMode === 'dark') {
     setIsDarkMode(true);
     enableDarkMode({
       brightness: 80,
       contrast: 100,
       sepia: 10,
       
     });
   }
 }, []);
 


 const toggleDarkMode = async() => {

   if (isDarkMode) {
     disableDarkMode();
     
     localStorage.setItem('darkMode', 'light');
   } else {
     enableDarkMode({
       brightness: 80,
       contrast: 100,
       sepia: 10,
     });
     localStorage.setItem('darkMode', 'dark');
   }
   setIsDarkMode(!isDarkMode);

 };
//  toggleDarkMode()


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (current && current !== activeSection) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  const handleScrollToSection = (sectionId) => {
    scrollToSection(sectionId);
    setActiveSection(sectionId);
  };

  return (
    <div className={styles.portfolio}>
      <Navigation 
        activeSection={activeSection}
        isScrolled={isScrolled}
        scrollToSection={handleScrollToSection}
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
      />
      <Hero scrollToSection={handleScrollToSection} />
      <About />
      <Education />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Portfolio;