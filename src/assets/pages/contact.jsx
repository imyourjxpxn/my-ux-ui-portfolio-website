import { useState } from 'react';
import './contact.css';
import { FaEnvelope, FaMapMarkerAlt, FaGraduationCap } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    jobTitle: '',
    company: '',
    email: '',
    message: '',
    interest: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add your email sending logic
    console.log('Form submitted:', formData);
  };

  return (
    <div className="contact-container">
      <div className="contact-inner">
        <h1 className="contact-title">Contact Me</h1>
        <p className="contact-description">
                  If you're interested in collaborating or getting in touch,
                    <p>I'd be more than happy to hear from you!
              </p>
              </p>

        <div className="contact-wrapper">
          <div className="contact-info">
            <div className="info-item">
              <FaEnvelope className="info-icon" />
              <div>
                <h3>Email</h3>
                <p>yeepoon.ps@gmail.com</p>
              </div>
            </div>
            <div className="info-item">
              <FaMapMarkerAlt className="info-icon" />
              <div>
                <h3>Location</h3>
                <p>Ratchayothin,</p>
                <p>Bangkok</p>
                <p>Thailand</p>
              </div>
            </div>
            <div className="info-item">
              <FaGraduationCap className="info-icon" />
              <div>
                <h3>Education</h3>
                <p>Computer Science</p>
                <p>Kasetsart University (Bangkhen)</p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-grid">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="fullName" className="form-label">Full Name</label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="form-input underline"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input underline"
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="jobTitle" className="form-label">Job Title</label>
                  <input
                    type="text"
                    id="jobTitle"
                    name="jobTitle"
                    value={formData.jobTitle}
                    onChange={handleChange}
                    className="form-input underline"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="company" className="form-label">Company</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="form-input underline"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Topic of Interest</label>
                <div className="radio-group">
                  {[
                    'Internship Opportunity',
                    'Hackathon Collaboration',
                    'UX UI Discussion'
                  ].map((option) => (
                    <div key={option} className="radio-option">
                      <input
                        type="radio"
                        id={option}
                        name="interest"
                        value={option}
                        checked={formData.interest === option}
                        onChange={handleChange}
                        className="radio-input"
                        required
                      />
                      <label htmlFor={option} className="radio-label">
                        {option}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-input underline message-input"
                  required
                  rows="4"
                />
              </div>

              <button
                type="submit"
                className="submit-button"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;