import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaBriefcase, FaAward, FaCertificate, FaLanguage, FaMapMarkerAlt } from 'react-icons/fa';
import './About.css';

const About = ({ language }) => {
  const translations = {
    en: {
      title: 'About Me',
      subtitle: 'Get to know me better',
      intro: "Computer Engineer graduated from ENIS, passionate about software development, cybersecurity and industrial applications. I master several programming languages as well as system and network security tools. I also have a good command of industrial systems and quality control processes.",
      education: {
        title: 'Education',
        items: [
          {
            degree: 'Computer Engineering Degree',
            school: 'École Nationale d\'Ingénieurs de Sfax (ENIS)',
            year: '2021-2024',
            description: 'Specialized in software development and cybersecurity'
          },
          {
            degree: 'Preparatory Cycle in Physics & Chemistry',
            school: 'École Nationale d\'Ingénieurs de Sfax (ENIS)',
            year: '2019-2021',
            description: 'Foundation in mathematics, physics and chemistry'
          },
          {
            degree: 'Baccalaureate in Computer Science',
            school: 'Lycée secondaire de Zaghouan',
            year: '2019',
            description: 'High school diploma with focus on computer science'
          }
        ]
      },
      experience: {
        title: 'Professional Experience',
        items: [
          {
            position: 'Cybersecurity Specialist',
            company: 'YOTA (Skartel LLC subsidiary)',
            period: 'January 2025 – May 2025',
            description: 'Intrusion detection and prevention, Security auditing of systems and applications, Security incident monitoring (SIEM, IDS/IPS)'
          },
          {
            position: 'Quality Assurance Manager',
            company: 'Industrie Pharmaceutiques Saïd IPS',
            period: 'August 2024 – November 2024',
            description: 'Implementation of quality management system, Quality control of projects, products and services'
          }
        ]
      },
      languages: {
        title: 'Languages',
        items: [
          { name: 'Arabic', level: 'Native' },
          { name: 'French', level: 'Fluent' },
          { name: 'English', level: 'Advanced' },
          { name: 'Russian', level: 'Intermediate' },
          { name: 'German', level: 'Basic' }
        ]
      },
      contact: {
        title: 'Contact Information',
        phone: '+216 56 563 331 / 29 057 970',
        email: 'waelchihic@gmail.com',
        location: 'Zaghouan, Tunisia'
      }
    },
    fr: {
      title: 'À Propos de Moi',
      subtitle: 'Apprenez à mieux me connaître',
      intro: "Ingénieur informatique diplômé de l'ENIS, passionné par le développement logiciel, la cybersécurité ainsi que les applications industrielles. Je maîtrise plusieurs langages de programmation ainsi que les outils de sécurité des systèmes et des réseaux. J'ai également une bonne maîtrise des systèmes industriels et des processus de contrôle qualité.",
      education: {
        title: 'Formation',
        items: [
          {
            degree: 'Diplôme National d\'Ingénieur en Informatique',
            school: 'École Nationale d\'Ingénieurs de Sfax (ENIS)',
            year: '2021-2024',
            description: 'Spécialisé en développement logiciel et cybersécurité'
          },
          {
            degree: 'Cycle Préparatoire en Physique & Chimie',
            school: 'École Nationale d\'Ingénieurs de Sfax (ENIS)',
            year: '2019-2021',
            description: 'Base en mathématiques, physique et chimie'
          },
          {
            degree: 'Baccalauréat Sciences de l\'informatique',
            school: 'Lycée secondaire de Zaghouan',
            year: '2019',
            description: 'Diplôme du baccalauréat avec spécialisation informatique'
          }
        ]
      },
      experience: {
        title: 'Expérience Professionnelle',
        items: [
          {
            position: 'Spécialiste en Cybersécurité',
            company: 'YOTA (filiale de Skartel LLC)',
            period: 'Janvier 2025 – Mai 2025',
            description: 'Détection et prévention des intrusions, Audit de sécurité des systèmes et applications, Surveillance des incidents de sécurité (SIEM, IDS/IPS)'
          },
          {
            position: 'Responsable Assurance Qualité',
            company: 'Industrie Pharmaceutiques Saïd IPS',
            period: 'Août 2024 – Novembre 2024',
            description: 'Mise en place du système de management de la qualité, Contrôle de la qualité des projets, produits ou services'
          }
        ]
      },
      languages: {
        title: 'Langues',
        items: [
          { name: 'Arabe', level: 'Langue maternelle' },
          { name: 'Français', level: 'Courant' },
          { name: 'Anglais', level: 'Avancé' },
          { name: 'Russe', level: 'Intermédiaire' },
          { name: 'Allemand', level: 'Débutant' }
        ]
      },
      contact: {
        title: 'Informations de Contact',
        phone: '+216 56 563 331 / 29 057 970',
        email: 'waelchihic@gmail.com',
        location: 'Zaghouan, Tunisie'
      }
    }
  };

  const t = translations[language];

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
    <section id="about" className="about section-padding">
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
          className="about-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Introduction */}
          <motion.div className="about-intro glass-card" variants={itemVariants}>
            <p className="intro-text">{t.intro}</p>
          </motion.div>

          {/* Education */}
          <motion.div className="about-section glass-card" variants={itemVariants}>
            <div className="section-header-small">
              <FaGraduationCap className="section-icon" />
              <h3 className="section-title-small">{t.education.title}</h3>
            </div>
            <div className="timeline">
              {t.education.items.map((item, index) => (
                <motion.div
                  key={index}
                  className="timeline-item"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <h4 className="timeline-title">{item.degree}</h4>
                    <p className="timeline-company">{item.school}</p>
                    <span className="timeline-period">{item.year}</span>
                    <p className="timeline-description">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Experience */}
          <motion.div className="about-section glass-card" variants={itemVariants}>
            <div className="section-header-small">
              <FaBriefcase className="section-icon" />
              <h3 className="section-title-small">{t.experience.title}</h3>
            </div>
            <div className="timeline">
              {t.experience.items.map((item, index) => (
                <motion.div
                  key={index}
                  className="timeline-item"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <h4 className="timeline-title">{item.position}</h4>
                    <p className="timeline-company">{item.company}</p>
                    <span className="timeline-period">{item.period}</span>
                    <p className="timeline-description">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Languages & Contact */}
          <div className="about-grid">
            <motion.div className="about-section glass-card" variants={itemVariants}>
              <div className="section-header-small">
                <FaLanguage className="section-icon" />
                <h3 className="section-title-small">{t.languages.title}</h3>
              </div>
              <div className="languages-grid">
                {t.languages.items.map((lang, index) => (
                  <motion.div
                    key={index}
                    className="language-item"
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className="language-name">{lang.name}</span>
                    <span className="language-level">{lang.level}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div className="about-section glass-card" variants={itemVariants}>
              <div className="section-header-small">
                <FaMapMarkerAlt className="section-icon" />
                <h3 className="section-title-small">{t.contact.title}</h3>
              </div>
              <div className="contact-details">
                <div className="contact-item">
                  <strong>📞 Phone:</strong>
                  <span>{t.contact.phone}</span>
                </div>
                <div className="contact-item">
                  <strong>📧 Email:</strong>
                  <span>{t.contact.email}</span>
                </div>
                <div className="contact-item">
                  <strong>📍 Location:</strong>
                  <span>{t.contact.location}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;