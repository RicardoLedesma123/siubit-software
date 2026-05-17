import React, { useState } from 'react';
import './DiagnosticModal.css';

const DiagnosticModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: 'desarrollo',
    description: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el correo o guardar en base de datos.
    console.log('Formulario enviado:', formData);
    alert('¡Gracias por tu interés! Nos pondremos en contacto contigo pronto.');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content glass" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>&times;</button>
        <h3 className="modal-title">Solicitud de <span className="text-primary">Diagnóstico</span></h3>
        <p className="modal-subtitle">Cuéntanos sobre tu empresa y nos pondremos en contacto contigo con una propuesta de valor.</p>
        
        <form onSubmit={handleSubmit} className="diagnostic-form">
          <div className="form-group">
            <label htmlFor="name">Nombre Completo *</label>
            <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} placeholder="Tu nombre" />
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="email">Correo Electrónico *</label>
              <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} placeholder="tucorreo@empresa.com" />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Teléfono / WhatsApp *</label>
              <input type="tel" id="phone" name="phone" required value={formData.phone} onChange={handleChange} placeholder="+52 123 456 7890" />
            </div>
          </div>
          
          <div className="form-group">
            <label htmlFor="company">Nombre de la Empresa</label>
            <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} placeholder="Tu Empresa S.A. de C.V." />
          </div>
          
          <div className="form-group">
            <label htmlFor="service">Principal necesidad tecnológica</label>
            <select id="service" name="service" value={formData.service} onChange={handleChange}>
              <option value="desarrollo">Desarrollo de Software a la Medida</option>
              <option value="ia">Inteligencia Artificial para Empresas</option>
              <option value="erp">ERP y Sistemas Administrativos</option>
              <option value="otro">Otro</option>
            </select>
          </div>
          
          <div className="form-group">
            <label htmlFor="description">Describe brevemente tu proyecto o problema *</label>
            <textarea id="description" name="description" rows="4" required value={formData.description} onChange={handleChange} placeholder="Actualmente tenemos el problema de..."></textarea>
          </div>
          
          <button type="submit" className="btn btn-primary form-submit">Enviar Solicitud</button>
        </form>
      </div>
    </div>
  );
};

export default DiagnosticModal;
