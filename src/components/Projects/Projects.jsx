import React from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';
import styles from './Projects.module.css';
import ruUmanImage from '../../images/ruUman.webp';
import undocWeb from '../../images/dash-scaled.webp';
import undoc from '../../images/undoc.webp';
import netflix from '../../images/netflix.jpg';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "ruUman",
      description: "ruUman app for managing clients' human resources, available for iOS and Android or in a web environment",
      image: ruUmanImage,
      technologies: ["React", "React Native", "Springboot"],
      github: null,
      live: "https://assis.partners/assispartners/ruuman-app/",
      featured: false
    },
    {
      id: 2,
      title: "Undoc Mobile", 
      description: "Mobile version of undoc web application",
      image: undoc,
      technologies: ["React", "React Native", "Springboot"],
      github: null,
      live: "https://assis.partners/assispartners/undoc/",
      featured:false
    },
    {
      id: 3,
      title: "Undoc Web",
      description: "The undoc application is an innovative solution developed by assis^ to simplify and optimize document management, especially invoices.",
      image: undocWeb,
      technologies: ["React", "Ant Design", "Springboot", "CSS3"],
      github: null,
      live: "https://assis.partners/assispartners/undoc/",
      featured: false
    },
    {
      id: 4,
      title: "Netflix Clone",
      description: "I made a simple clone of Netflix using Bootstrap,SASS and React JS",
      image: netflix,
      technologies: ["React", "SASS", "Bootstrap"],
      github: "https://github.com/Stanisds12/netflix",
      live: null,
      featured: false
    }
  ];

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Featured Projects</h2>
        <div className={styles.titleUnderline} />
        <p className={styles.description}>
          Here are some of my recent projects that showcase my skills and passion for development
        </p>
        
        <div className={styles.projectsGrid}>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;