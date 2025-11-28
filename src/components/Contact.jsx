import { useState } from 'react';
import { Send, Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = `Portfolio Contact from ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    const mailtoUrl = `mailto:happy.shinny@outlook.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
  };

  return (
    <section className="section contact-section">
      <h2 className="section-title">Contact</h2>
      <div className="contact-wrapper">
        <div className="contact-container">
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Your message..."
                rows={5}
              />
            </div>
            <button type="submit" className="submit-btn">
              <Send size={18} />
              Send Message
            </button>
          </form>
        </div>
        <div className="contact-info-side">
          <h3>Get in Touch</h3>
          <p className="contact-intro">Feel free to reach out for collaborations or just a friendly hello!</p>

          <div className="contact-item">
            <Mail size={20} />
            <div>
              <h4>Email</h4>
              <a href="mailto:happy.shinny@outlook.com">happy.shinny@outlook.com</a>
            </div>
          </div>

          <div className="contact-item">
            <Phone size={20} />
            <div>
              <h4>Phone</h4>
              <a href="tel:+1234567890">+1 (234) 567-890</a>
            </div>
          </div>

          <div className="contact-item">
            <MapPin size={20} />
            <div>
              <h4>Address</h4>
              <p>123 Tech Street, Suite 456<br />San Francisco, CA 94102</p>
            </div>
          </div>

          <div className="contact-item">
            <Clock size={20} />
            <div>
              <h4>Availability</h4>
              <p>Full-time, available 24/7</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

