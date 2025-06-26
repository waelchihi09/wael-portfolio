import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode, FaEye, FaFilter } from 'react-icons/fa';
import './Projects.css';

const Projects = ({ language }) => {
  const [activeFilter, setActiveFilter] = useState('all');

  const translations = {
    en: {
      title: 'Featured Projects',
      subtitle: 'Some of my recent work',
      filters: {
        all: 'All Projects',
        fullstack: 'Full Stack',
        frontend: 'Frontend',
        cybersecurity: 'Cybersecurity',
        quality: 'Quality Management'
      },
      buttons: {
        viewCode: 'View Code',
        liveDemo: 'Live Demo',
        viewProject: 'View Project'
      }
    },
    fr: {
      title: 'Projets Phares',
      subtitle: 'Quelques-uns de mes travaux récents',
      filters: {
        all: 'Tous les Projets',
        fullstack: 'Full Stack',
        frontend: 'Frontend',
        cybersecurity: 'Cybersécurité',
        quality: 'Management Qualité'
      },
      buttons: {
        viewCode: 'Voir le Code',
        liveDemo: 'Démo Live',
        viewProject: 'Voir le Projet'
      }
    }
  };

  const t = translations[language];

  const projects = [
    {
      id: 1,
      title: 'Secret Share Platform',
      description: {
        en: 'A secure platform for sharing sensitive information with end-to-end encryption and self-destructing messages.',
        fr: 'Une plateforme sécurisée pour partager des informations sensibles avec chiffrement de bout en bout et messages auto-destructeurs.'
      },
      image: '/api/placeholder/400/250',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Encryption'],
      category: 'fullstack',
      github: 'https://github.com/waelchihi09/secret-share',
      demo: '#',
      featured: true
    },
    {
      id: 2,
      title: 'SIEM Security System',
      description: {
        en: 'Security Information and Event Management system for real-time threat detection and incident response at YOTA.',
        fr: 'Système SIEM pour la détection de menaces en temps réel et la réponse aux incidents chez YOTA.'
      },
      image: '/api/placeholder/400/250',
      technologies: ['Python', 'Wireshark', 'SIEM', 'IDS/IPS', 'Security Auditing'],
      category: 'cybersecurity',
      github: 'https://github.com/waelchihi09',
      demo: '#',
      featured: true
    },
    {
      id: 3,
      title: 'Quality Management System',
      description: {
        en: 'Comprehensive quality management system implemented at IPS Pharmaceuticals for product quality control and compliance.',
        fr: 'Système de management de la qualité complet implémenté chez IPS Pharmaceutiques pour le contrôle qualité et la conformité.'
      },
      image: '/api/placeholder/400/250',
      technologies: ['Quality Control', 'Process Management', 'Compliance', 'Risk Assessment', 'Documentation'],
      category: 'quality',
      github: 'https://github.com/waelchihi09',
      demo: '#',
      featured: true
    },
    {
      id: 4,
      title: 'Network Security Scanner',
      description: {
        en: 'Automated network vulnerability scanner with detailed reporting and remediation suggestions using OWASP methodology.',
        fr: 'Scanner automatisé de vulnérabilités réseau avec rapports détaillés et suggestions de remédiation utilisant la méthodologie OWASP.'
      },
      image: '/api/placeholder/400/250',
      technologies: ['Python', 'Wireshark', 'OWASP', 'Network Security', 'Vulnerability Assessment'],
      category: 'cybersecurity',
      github: 'https://github.com/waelchihi09',
      demo: '#',
      featured: false
    },
    {
      id: 5,
      title: 'Industrial Process Monitor',
      description: {
        en: 'Real-time monitoring system for industrial processes with quality control metrics and compliance tracking.',
        fr: 'Système de surveillance en temps réel des processus industriels avec métriques de contrôle qualité et suivi de conformité.'
      },
      image: '/api/placeholder/400/250',
      technologies: ['Python', 'Industrial Systems', 'Quality Metrics', 'Process Control', 'Monitoring'],
      category: 'quality',
      github: 'https://github.com/waelchihi09',
      demo: '#',
      featured: false
    },
    {
      id: 6,
      title: 'Portfolio Website',
      description: {
        en: 'Modern, responsive portfolio website with smooth animations and multi-language support.',
        fr: 'Site portfolio moderne et responsive avec animations fluides et support multi-langues.'
      },
      image: '/api/placeholder/400/250',
      technologies: ['React', 'Framer Motion', 'CSS3', 'Responsive Design'],
      category: 'frontend',
      github: 'https://github.com/waelchihi09',
      demo: '#',
      featured: false
    }
  ];

  const filters = [
    { key: 'all', label: t.filters.all },
    { key: 'fullstack', label: t.filters.fullstack },
    { key: 'frontend', label: t.filters.frontend },
    { key: 'cybersecurity', label: t.filters.cybersecurity },
    { key: 'quality', label: t.filters.quality }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="projects" className="projects section-padding">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">{t.title}</h2>
          <p className="section-subtitle">{t.subtitle}</p>
        </motion.div>

        <motion.div
          className="project-filters"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <FaFilter className="filter-icon" />
          {filters.map((filter) => (
            <motion.button
              key={filter.key}
              className={`filter-btn ${activeFilter === filter.key ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.key)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {filter.label}
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              className={`project-card ${project.featured ? 'featured' : ''}`}
              variants={itemVariants}
              layout
              whileHover={{ y: -10 }}
            >
              <div className="project-image">
                <div className="image-placeholder">
                  <FaCode className="placeholder-icon" />
                </div>
                <div className="project-overlay">
                  <div className="overlay-buttons">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="overlay-btn"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaGithub />
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="overlay-btn"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaExternalLinkAlt />
                    </motion.a>
                  </div>
                </div>
              </div>

              <div className="project-content">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  {project.featured && (
                    <span className="featured-badge">Featured</span>
                  )}
                </div>

                <p className="project-description">
                  {project.description[language]}
                </p>

                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-buttons">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaGithub />
                    {t.buttons.viewCode}
                  </motion.a>
                  
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaEye />
                    {t.buttons.liveDemo}
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;