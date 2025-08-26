import React from 'react';
import { Code, User, Briefcase, MessageCircle } from 'lucide-react';
import SkillBar from '../SkillBar/SkillBar';
import styles from './About.module.css';

const About = () => {


  const features = [
    { icon: Code, text: 'Clean Code' },
    { icon: User, text: 'User-Focused' },
    { icon: Briefcase, text: 'Professional' },
    { icon: MessageCircle, text: 'Collaborative' }
  ];

  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>About Me</h2>
        <div className={styles.titleUnderline} />
        
        <div className={styles.content}>
          <div className={styles.textContent}>
            <h3 className={styles.subtitle}>
              Passionate Developer & Problem Solver
            </h3>
            <p className={styles.description}>
              With over 5 years of experience in development, I specialize in creating scalable, 
              user-friendly applications using modern technologies. I'm passionate about clean code, 
              innovative solutions, and continuous learning.
            </p>
            <p className={styles.description}>
              When I'm not coding, you can find me exploring new technologies, or sharing knowledge with the developer community.
            </p>
            
            <div className={styles.features}>
              {features.map(({ icon: Icon, text }) => (
                <div key={text} className={styles.feature}>
                  <Icon color="#9333ea" size={24} />
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className={styles.skillsContent}>
            <h3 className={styles.subtitle}>Technical Skills</h3>
            <div className={styles.skills}>
             
                <SkillBar/>
             
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default About;