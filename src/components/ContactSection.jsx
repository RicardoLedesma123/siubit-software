import React, { useState } from 'react';
import './ContactSection.css';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.');
    setFormData({ name: '', company: '', email: '', phone: '', message: '' });
  };

  return (
    <section className="contact-section" id="contacto-form">
      <div className="container">
        <div className="contact-grid">
          
          {/* Left Column: Form */}
          <div className="contact-form-card glass">
            <h2>¿Listo para transformar tu empresa con tecnología?</h2>
            <p className="contact-subtitle">
              ¡Coméntanos tus dudas! Comienza hoy con la implementación de <span className="text-primary" style={{fontWeight: 'bold'}}>IA</span> en tu empresa y <span className="text-secondary" style={{fontWeight: 'bold'}}>automatiza</span> el éxito.
            </p>
            
            <form onSubmit={handleSubmit} className="diagnostic-form">
              <div className="form-group">
                <label htmlFor="name">Nombre *</label>
                <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} />
              </div>
              
              <div className="form-group">
                <label htmlFor="company">Empresa *</label>
                <input type="text" id="company" name="company" required value={formData.company} onChange={handleChange} />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Correo Electrónico *</label>
                <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} />
              </div>
              
              <div className="form-group">
                <label htmlFor="phone">WhatsApp o Teléfono *</label>
                <input type="tel" id="phone" name="phone" required value={formData.phone} onChange={handleChange} />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">¿Qué necesita automatizar? *</label>
                <textarea id="message" name="message" rows="4" required value={formData.message} onChange={handleChange}></textarea>
              </div>
              
              <button type="submit" className="btn btn-primary form-submit">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" style={{marginRight: '8px'}}>
                  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"></path>
                </svg>
                Enviar mensaje
              </button>
            </form>
          </div>

          {/* Right Column: Direct Contact */}
          <div className="contact-direct">
            <span className="contact-badge">// ¿QUIERES UNA PROPUESTA PERSONALIZADA?</span>
            <h2 className="direct-title">Optimicemos tus operaciones</h2>
            <p className="direct-subtitle">// Mejora tu eficiencia</p>

            <div className="direct-actions">
              <a href="https://wa.me/524492610335" target="_blank" rel="noopener noreferrer" className="btn-direct btn-outline-green">
                <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.487-1.761-1.663-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51h-.57c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884"/>
                </svg>
                Chat por WhatsApp
              </a>
              
              <a href="mailto:siubitsoftware@gmail.com" className="btn-direct btn-outline-cyan">
                <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                  <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" />
                </svg>
                E-MAIL
              </a>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
