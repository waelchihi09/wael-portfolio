import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes, FaGlobe } from 'react-icons/fa';
import './Navbar.css';

const Navbar = ({ language, setLanguage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const translations = {
    en: {
      home: 'Home',
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      contact: 'Contact'
    },
    fr: {
      home: 'Accueil',
      about: 'À propos',
      skills: 'Compétences',
      projects: 'Projets',
      contact: 'Contact'
    }
  };

  const t = translations[language];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: t.home, href: '#home' },
    { name: t.about, href: '#about' },
    { name: t.skills, href: '#skills' },
    { name: t.projects, href: '#projects' },
    { name: t.contact, href: '#contact' }
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'fr' ? 'en' : 'fr');
  };

  return (
    <motion.nav
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="nav-container">
        <motion.div
          className="nav-logo"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="logo-text">WC</span>
        </motion.div>

        <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
          {navItems.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.href}
              className="nav-link"
              onClick={() => setIsOpen(false)}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.name}
            </motion.a>
          ))}
          
          <motion.button
            className="language-toggle"
            onClick={toggleLanguage}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaGlobe />
            <span>{language.toUpperCase()}</span>
          </motion.button>
        </div>

        <div className="nav-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;