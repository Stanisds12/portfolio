import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import styles from './ProjectCard.module.css';

const ProjectCard = ({ project }) => {
  return (
    <div className={styles.projectCard}>
      <div className={styles.imageContainer}>
        <img 
          src={project.image} 
          alt={project.title} 
          className={styles.projectImage}
        />
        <div className={styles.projectLinks}>
         {project.github&& <a 
            href={project.github} 
            className={styles.projectLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View GitHub repository"
          >
            <Github size={16} />
          </a>}
          {project.live&&<a 
            href={project.live} 
            className={styles.projectLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View live demo"
          >
            <ExternalLink size={16} />
          </a>}
        </div>
      </div>
      <div className={styles.projectContent}>
        <div className={styles.projectHeader}>
          <h3 className={styles.projectTitle}>{project.title}</h3>
          {project.featured && (
            <span className={styles.featuredBadge}>Featured</span>
          )}
        </div>
        <p className={styles.projectDescription}>{project.description}</p>
        <div className={styles.techTags}>
          {project.technologies.map((tech) => (
            <span key={tech} className={styles.techTag}>{tech}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;