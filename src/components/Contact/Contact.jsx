import React, { useState } from 'react';
import { Mail, Linkedin, Github, CheckCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import Button from '../Button/Button';
import styles from './Contact.module.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    subject: '', // Added subject field
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Initialize EmailJS with your public key
  React.useEffect(() => {
    emailjs.init("RHG91SHwsgmNSxMYv"); // Replace with your EmailJS public key
  }, []);

  const validateForm = () => {
    const newErrors = {};
   
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
   
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
   
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    } else if (formData.subject.trim().length < 3) {
      newErrors.subject = 'Subject must be at least 3 characters long';
    }
   
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }
   
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
   
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
   
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setIsSuccess(false);

    try {
      // Send email using EmailJS
      await emailjs.send(
        'service_avhxont',    // Replace with your EmailJS service ID
        'template_ngr7kon',   // Replace with your EmailJS template ID
        {
          name: formData.name,
          email: formData.email,
          title: formData.subject, // Added subject to email template
          message: formData.message
        }
      );

      // Success - reset form and show success message
      setFormData({ email: '', name: '', subject: '', message: '' }); // Reset subject field
      setIsSuccess(true);
     
      // Hide success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);

    } catch (error) {
      console.error('Failed to send email:', error);
      alert('Failed to send message. Please try again or contact me directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Let's Work Together</h2>
        <div className={styles.titleUnderline} />
        <p className={styles.description}>
          I'm always interested in new opportunities and exciting projects. Let's create something amazing together!
        </p>
       
        {isSuccess && (
          <div className={styles.successMessage}>
            <CheckCircle size={20} />
            <span>Message sent successfully! I'll get back to you soon.</span>
          </div>
        )}
       
        <div className={styles.contactGrid}>
          <div className={styles.contactInfo}>
            <h3 className={styles.subtitle}>Get In Touch</h3>
            <p className={styles.contactDescription}>
              Have a project in mind or want to discuss opportunities? I'd love to hear from you.
              Feel free to reach out through any of the channels below.
            </p>
           
            <div className={styles.contactLinks}>
              <a
                href="mailto:stanislauebo@gmail.com"
                className={styles.contactLink}
              >
                <Mail color="#9333ea" size={24} />
                <span>stanislauebo@gmail.com</span>
              </a>
             
              <a
                href="https://www.linkedin.com/in/stanislau-ebo/"
                className={styles.contactLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin color="#9333ea" size={24} />
                <span>LinkedIn Profile</span>
              </a>
             
              <a
                href="https://github.com/Stanisds12"
                className={styles.contactLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github color="#9333ea" size={24} />
                <span>GitHub Profile</span>
              </a>
            </div>
          </div>
         
          <form className={styles.contactForm} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label className={styles.formLabel} htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                className={`${styles.formInput} ${errors.name ? styles.error : ''}`}
                placeholder="Your name"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                disabled={isSubmitting}
              />
              {errors.name && <span className={styles.errorMessage}>{errors.name}</span>}
            </div>
           
            <div className={styles.formGroup}>
              <label className={styles.formLabel} htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                className={`${styles.formInput} ${errors.email ? styles.error : ''}`}
                placeholder="your@email.com"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                disabled={isSubmitting}
              />
              {errors.email && <span className={styles.errorMessage}>{errors.email}</span>}
            </div>
           
            <div className={styles.formGroup}>
              <label className={styles.formLabel} htmlFor="subject">Subject</label>
              <input
                id="subject"
                type="text"
                className={`${styles.formInput} ${errors.subject ? styles.error : ''}`}
                placeholder="What's this about?"
                value={formData.subject}
                onChange={(e) => handleInputChange('subject', e.target.value)}
                disabled={isSubmitting}
              />
              {errors.subject && <span className={styles.errorMessage}>{errors.subject}</span>}
            </div>
           
            <div className={styles.formGroup}>
              <label className={styles.formLabel} htmlFor="message">Message</label>
              <textarea
                id="message"
                rows={4}
                className={`${styles.formTextarea} ${errors.message ? styles.error : ''}`}
                placeholder="Tell me about your project..."
                value={formData.message}
                onChange={(e) => handleInputChange('message', e.target.value)}
                disabled={isSubmitting}
              />
              {errors.message && <span className={styles.errorMessage}>{errors.message}</span>}
            </div>
           
            <Button
              type="submit"
              variant="primary"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;