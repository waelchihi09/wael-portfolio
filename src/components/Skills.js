import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaReact, FaJs, FaPython, FaPhp, FaLinux, FaNodeJs, 
  FaDatabase, FaShieldAlt, FaCode, FaServer, FaGitAlt, FaDocker 
} from 'react-icons/fa';
import { 
  SiExpress, SiMongodb, SiMysql, SiPostgresql, SiTailwindcss, 
  SiBootstrap, SiNumpy, SiPandas, SiScikitlearn, SiTensorflow,
  SiKubernetes, SiAmazonaws, SiFirebase, SiRedis
} from 'react-icons/si';
import './Skills.css';

const Skills = ({ language }) => {
  const translations = {
    en: {
      title: "Skills & Technologies",
      subtitle: "Technologies I work with",
      categories: {
        frontend: "Frontend Development",
        backend: "Backend Development", 
        database: "Databases",
        security: "Cybersecurity",
        systems: "Systems & OS",
        quality: "Quality Management"
      }
    },
    fr: {
      title: "Compétences & Technologies",
      subtitle: "Technologies avec lesquelles je travaille",
      categories: {
        frontend: "Développement Frontend",
        backend: "Développement Backend",
        database: "Bases de Données", 
        security: "Cybersécurité",
        systems: "Systèmes & OS",
        quality: "Management Qualité"
      }
    }
  };

  const t = translations[language];

  const skillsData = {
    frontend: [
      { name: 'JavaScript', icon: FaJs, level: 100, color: '#F7DF1E' },
      { name: 'HTML/CSS', icon: FaCode, level: 90, color: '#E34F26' },
      { name: 'React.js', icon: FaReact, level: 85, color: '#61DAFB' },
      { name: 'Bootstrap', icon: SiBootstrap, level: 80, color: '#7952B3' },
      { name: 'Responsive Design', icon: FaCode, level: 85, color: '#06B6D4' }
    ],
    backend: [
      { name: 'Python', icon: FaPython, level: 100, color: '#3776AB' },
      { name: 'Node.js', icon: FaNodeJs, level: 80, color: '#339933' },
      { name: 'Express.js', icon: SiExpress, level: 75, color: '#000000' },
      { name: 'API Development', icon: FaServer, level: 85, color: '#4ECDC4' },
      { name: 'Server Management', icon: FaServer, level: 80, color: '#96CEB4' }
    ],
    database: [
      { name: 'SQL', icon: FaDatabase, level: 90, color: '#4479A1' },
      { name: 'MySQL', icon: SiMysql, level: 85, color: '#4479A1' },
      { name: 'MongoDB', icon: SiMongodb, level: 80, color: '#47A248' },
      { name: 'Database Design', icon: FaDatabase, level: 85, color: '#336791' },
      { name: 'Data Management', icon: FaDatabase, level: 90, color: '#00D2D3' }
    ],
    security: [
      { name: 'Wireshark', icon: FaShieldAlt, level: 90, color: '#FF6B6B' },
      { name: 'OWASP', icon: FaShieldAlt, level: 90, color: '#4ECDC4' },
      { name: 'SIEM Systems', icon: FaServer, level: 85, color: '#45B7D1' },
      { name: 'IDS/IPS', icon: FaShieldAlt, level: 85, color: '#96CEB4' },
      { name: 'Security Auditing', icon: FaShieldAlt, level: 88, color: '#FFEAA7' }
    ],
    systems: [
      { name: 'Linux', icon: FaLinux, level: 100, color: '#FCC624' },
      { name: 'MacOS', icon: FaLinux, level: 100, color: '#000000' },
      { name: 'Microsoft Office', icon: FaCode, level: 90, color: '#D83B01' },
      { name: 'System Administration', icon: FaServer, level: 85, color: '#4ECDC4' },
      { name: 'Network Configuration', icon: FaServer, level: 80, color: '#96CEB4' }
    ],
    quality: [
      { name: 'Quality Management', icon: FaShieldAlt, level: 95, color: '#F05032' },
      { name: 'Quality Control', icon: FaShieldAlt, level: 90, color: '#2496ED' },
      { name: 'Process Improvement', icon: FaCode, level: 88, color: '#326CE5' },
      { name: 'Risk Management', icon: FaShieldAlt, level: 85, color: '#FF9900' },
      { name: 'Compliance Auditing', icon: FaShieldAlt, level: 90, color: '#00C851' }
    ]
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
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
    <section id="skills" className="skills section-padding">
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
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {Object.entries(skillsData).map(([category, skills]) => (
            <motion.div
              key={category}
              className="skill-category glass-card"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="category-title">{t.categories[category]}</h3>
              <div className="skills-list">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className="skill-item"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="skill-info">
                      <div className="skill-icon" style={{ color: skill.color }}>
                        <skill.icon />
                      </div>
                      <div className="skill-details">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-percentage">{skill.level}%</span>
                      </div>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        className="skill-progress"
                        style={{ backgroundColor: skill.color }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;