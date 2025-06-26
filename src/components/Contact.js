import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt, FaPaperPlane, FaUser, FaComment } from 'react-icons/fa';
import './Contact.css';

const Contact = ({ language }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const translations = {
    en: {
      title: "Let's Work Together",
      subtitle: "Have a project in mind? Let's discuss how we can bring your ideas to life.",
      form: {
        name: 'Your Name',
        email: 'Your Email',
        subject: 'Subject',
        message: 'Your Message',
        send: 'Send Message',
        sending: 'Sending...'
      },
      contact: {
        title: 'Contact Information',
        email: 'Email Address',
        location: 'Location',
        availability: 'Availability'
      },
      social: {
        title: 'Follow Me',
        github: 'GitHub Profile',
        linkedin: 'LinkedIn Profile'
      },
      success: 'Message sent successfully!',
      error: 'Failed to send message. Please try again.',
      locationText: 'Zaghouan, Tunisia',
      availabilityText: 'Open to new opportunities'
    },
    fr: {
      title: 'Travaillons Ensemble',
      subtitle: 'Vous avez un projet en tête ? Discutons de la façon dont nous pouvons donner vie à vos idées.',
      form: {
        name: 'Votre Nom',
        email: 'Votre Email',
        subject: 'Sujet',
        message: 'Votre Message',
        send: 'Envoyer le Message',
        sending: 'Envoi en cours...'
      },
      contact: {
        title: 'Informations de Contact',
        email: 'Adresse Email',
        location: 'Localisation',
        availability: 'Disponibilité'
      },
      social: {
        title: 'Suivez-moi',
        github: 'Profil GitHub',
        linkedin: 'Profil LinkedIn'
      },
      success: 'Message envoyé avec succès !',
      error: 'Échec de l\'envoi du message. Veuillez réessayer.',
      locationText: 'Zaghouan, Tunisie',
      availabilityText: 'Ouvert aux nouvelles opportunités'
    }
  };

  const t = translations[language];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Here you would typically send the form data to your backend or email service
      // console.log('Form submitted:', formData);
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: t.contact.email,
      value: 'waelchihic@gmail.com',
      href: 'mailto:waelchihic@gmail.com'
    },
    {
      icon: FaMapMarkerAlt,
      label: t.contact.location,
      value: t.locationText,
      href: null
    }
  ];

  const socialLinks = [
    {
      icon: FaGithub,
      label: t.social.github,
      href: 'https://github.com/waelchihi09',
      color: '#333'
    },
    {
      icon: FaLinkedin,
      label: t.social.linkedin,
      href: 'https://linkedin.com/in/waelchihi',
      color: '#0077B5'
    }
  ];

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
    <section id="contact" className="contact section-padding">
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
          className="contact-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="contact-form-container" variants={itemVariants}>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <div className="input-wrapper">
                    <FaUser className="input-icon" />
                    <input
                      type="text"
                      name="name"
                      placeholder={t.form.name}
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="form-input"
                    />
                  </div>
                </div>
                
                <div className="form-group">
                  <div className="input-wrapper">
                    <FaEnvelope className="input-icon" />
                    <input
                      type="email"
                      name="email"
                      placeholder={t.form.email}
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="form-input"
                    />
                  </div>
                </div>
              </div>

              <div className="form-group">
                <div className="input-wrapper">
                  <FaComment className="input-icon" />
                  <input
                    type="text"
                    name="subject"
                    placeholder={t.form.subject}
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                  />
                </div>
              </div>

              <div className="form-group">
                <div className="input-wrapper">
                  <FaComment className="input-icon textarea-icon" />
                  <textarea
                    name="message"
                    placeholder={t.form.message}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="6"
                    className="form-textarea"
                  />
                </div>
              </div>

              {submitStatus && (
                <motion.div
                  className={`submit-status ${submitStatus}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {submitStatus === 'success' ? t.success : t.error}
                </motion.div>
              )}

              <motion.button
                type="submit"
                className="submit-btn"
                disabled={isSubmitting}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaPaperPlane />
                {isSubmitting ? t.form.sending : t.form.send}
              </motion.button>
            </form>
          </motion.div>

          <motion.div className="contact-info" variants={itemVariants}>
            <div className="info-section">
              <h3 className="info-title">{t.contact.title}</h3>
              
              <div className="info-items">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={index}
                    className="info-item"
                    whileHover={{ x: 5 }}
                  >
                    <div className="info-icon">
                      <item.icon />
                    </div>
                    <div className="info-content">
                      <span className="info-label">{item.label}</span>
                      {item.href ? (
                        <a href={item.href} className="info-value">
                          {item.value}
                        </a>
                      ) : (
                        <span className="info-value">{item.value}</span>
                      )}
                    </div>
                  </motion.div>
                ))}
                
                <motion.div className="info-item" whileHover={{ x: 5 }}>
                  <div className="info-icon">
                    <FaUser />
                  </div>
                  <div className="info-content">
                    <span className="info-label">{t.contact.availability}</span>
                    <span className="info-value available">{t.availabilityText}</span>
                  </div>
                </motion.div>
              </div>
            </div>

            <div className="social-section">
              <h3 className="info-title">{t.social.title}</h3>
              
              <div className="social-links">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    style={{ '--social-color': social.color }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon />
                    <span>{social.label}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;