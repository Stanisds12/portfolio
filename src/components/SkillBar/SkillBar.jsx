import React from 'react';
import styles from './SkillBar.module.css';

const SkillBar = ({ name, level,logoUrl }) => {
  const skills = [
    { name: "HTML", level: 95 ,logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"},
    { name: "Java", level: 95,logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { name: "JavaScript", level: 90,logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "Springboot", level: 85,logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg"},
    { name: "React Js", level: 85,logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "React Native", level: 85,logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "PostgreSQL", level: 85,logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    { name: "CSS", level: 75,logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    
  
  ];
  return (
    skills.map((skill,index) => (
    <div className={styles.skillItem} key={index}>
      <div className={styles.skillHeader}>
      <img 
            src={skill.logoUrl} 
            alt={`${skill.name} logo`} 
            className={styles.skillLogo}
          />
        <span className={styles.skillName}>{skill.name}</span>
        <span className={styles.skillPercentage}>{skill.level}%</span>
      </div>
      <div className={styles.skillBarBg}>
        <div 
          className={styles.skillBar}
          style={{ width: `${skill.level}%` }}
        />
      </div>
    </div>
    ))
  );
};

export default SkillBar;