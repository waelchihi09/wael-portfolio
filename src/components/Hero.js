import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Typed from 'typed.js';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaCode, FaShieldAlt } from 'react-icons/fa';
import './Hero.css';

const Hero = ({ language }) => {
  const typedRef = useRef(null);

  const translations = {
    en: {
      greeting: "Hello, I'm",
      name: "Wael Chihi",
      roles: [
        "Computer Engineer",
        "Cybersecurity Specialist", 
        "Quality Assurance Manager",
        "Full Stack Developer",
        "Data Protection Expert"
      ],
      description: "Computer Engineer graduated from ENIS, passionate about software development, cybersecurity and industrial applications. Experienced in quality management systems and security auditing.",
      downloadCV: "Download CV",
      viewProjects: "View Projects",
      yearsExp: "1+",
      yearsLabel: "Years Experience",
      projectsCount: "10+",
      projectsLabel: "Projects Completed",
      techCount: "10+",
      techLabel: "Technologies"
    },
    fr: {
      greeting: "Salut, je suis",
      name: "Wael Chihi", 
      roles: [
        "Ingénieur Informatique",
        "Spécialiste Cybersécurité",
        "Responsable Assurance Qualité", 
        "Développeur Full Stack",
        "Expert Protection Données"
      ],
      description: "Ingénieur informatique diplômé de l'ENIS, passionné par le développement logiciel, la cybersécurité et les applications industrielles. Expérience en systèmes de management qualité et audit sécurité.",
      downloadCV: "Télécharger CV",
      viewProjects: "Voir Projets",
      yearsExp: "1+",
      yearsLabel: "Années d'Expérience",
      projectsCount: "10+", 
      projectsLabel: "Projets Réalisés",
      techCount: "10+",
      techLabel: "Technologies"
    }
  };

  const t = translations[language];

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: t.roles,
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 2000,
      loop: true,
      showCursor: true,
      cursorChar: '|'
    });

    return () => typed.destroy();
  }, [language, t.roles]);

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

  const stats = [
    { number: t.yearsExp, label: t.yearsLabel, icon: FaCode },
    { number: t.projectsCount, label: t.projectsLabel, icon: FaShieldAlt },
    { number: t.techCount, label: t.techLabel, icon: FaCode }
  ];

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="hero-particles"></div>
        <div className="hero-gradient"></div>
      </div>
      
      <div className="container">
        <motion.div
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="hero-text" variants={itemVariants}>
            <motion.p 
              className="hero-greeting"
              variants={itemVariants}
            >
              {t.greeting}
            </motion.p>
            
            <motion.h1 
              className="hero-name"
              variants={itemVariants}
            >
              {t.name}
            </motion.h1>
            
            <motion.div 
              className="hero-role"
              variants={itemVariants}
            >
              <span className="role-text">
                <span ref={typedRef}></span>
              </span>
            </motion.div>
            
            <motion.p 
              className="hero-description"
              variants={itemVariants}
            >
              {t.description}
            </motion.p>
            
            <motion.div 
              className="hero-buttons"
              variants={itemVariants}
            >
              <motion.a
                href="#contact"
                className="btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaDownload />
                {t.downloadCV}
              </motion.a>
              
              <motion.a
                href="#projects"
                className="btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t.viewProjects}
              </motion.a>
            </motion.div>
            
            <motion.div 
              className="hero-social"
              variants={itemVariants}
            >
              <motion.a
                href="https://github.com/waelchihi09"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaGithub />
              </motion.a>
              
              <motion.a
                href="mailto:waelchihic@gmail.com"
                className="social-link"
                whileHover={{ scale: 1.2, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaEnvelope />
              </motion.a>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="hero-stats"
            variants={itemVariants}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="stat-item"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
              >
                <div className="stat-icon">
                  <stat.icon />
                </div>
                <div className="stat-content">
                  <h3 className="stat-number">{stat.number}</h3>
                  <p className="stat-label">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
      
      <motion.div
        className="scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="scroll-line"></div>
      </motion.div>
    </section>
  );
};

export default Hero;