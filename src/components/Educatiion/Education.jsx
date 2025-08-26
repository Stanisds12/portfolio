// Education.jsx
import React from 'react';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';
import styles from './Education.module.css';

const Education = () => {
  const educationData = [
    {
      degree: "Master's Degree in Intelligent Data Analysis",
      institution: "Polytechnic Institute of Coimbra",
      location: "Coimbra, Portugal",
      duration: "2025 - *",
      gpa: "N/A",
    //   description: "Specialized in Software Engineering and Artificial Intelligence. Completed thesis on Machine Learning applications in web development.",
    //   achievements: [
    //     "Dean's List for 3 consecutive semesters",
    //     "Graduate Research Assistant",
    //     "Published 2 papers in ACM conferences"
    //   ]
    },
    {
      degree: "Bachelor's Degree in Computer Engineering",
      institution: "University of Holguin",
      location: "Holguín, Cuba",
      duration: "2015 - 2021",
      gpa: "18/20",
    //   description: "Focused on software development, algorithms, and system design. Active member of the Computer Science Society.",
    //   achievements: [
    //     "Magna Cum Laude graduate",
    //     "President of Programming Club",
    //     "Winner of Annual Hackathon 2017"
    //   ]
    },
    {
      degree: "IT Technician",
      institution: "Mundo Novo College",
      location: "Luanda, Angola",
      duration: "2011 - 2014",
      gpa: "15/20",
    //   description: "Valedictorian with focus on STEM subjects. Early exposure to programming through AP Computer Science.",
    //   achievements: [
    //     "Valedictorian",
    //     "National Honor Society",
    //     "AP Scholar with Distinction"
    //   ]
    }
  ];

  return (
    <section id="education" className={styles.education}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>My Education</h2>
        <div className={styles.titleUnderline} />
        
        <div className={styles.timeline}>
          {educationData.map((edu, index) => (
            <div key={index} className={styles.timelineItem}>
              <div className={styles.timelineMarker}>
                <GraduationCap size={24} color="#9333ea" />
              </div>
              
              <div className={styles.educationCard}>
                <div className={styles.cardHeader}>
                  <h3 className={styles.degree}>{edu.degree}</h3>
                  <div className={styles.duration}>
                    <Calendar size={16} />
                    <span>{edu.duration}</span>
                  </div>
                </div>
                
                <div className={styles.institutionInfo}>
                  <h4 className={styles.institution}>{edu.institution}</h4>
                  <div className={styles.location}>
                    <MapPin size={16} />
                    <span>{edu.location}</span>
                  </div>
                </div>
                
                <div className={styles.gpa}>
                  <Award size={16} />
                  <span>GRADE: {edu.gpa}</span>
                </div>
                
                {/* <p className={styles.description}>{edu.description}</p> */}
                
                {/* <div className={styles.achievements}>
                  <h5 className={styles.achievementsTitle}>Key Achievements:</h5>
                  <ul className={styles.achievementsList}>
                    {edu.achievements.map((achievement, idx) => (
                      <li key={idx} className={styles.achievement}>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;