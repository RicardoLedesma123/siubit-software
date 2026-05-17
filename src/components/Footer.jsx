import React from 'react';
import './Footer.css';
import logoImg from '../assets/SiuBit Software/logo-negativo.png';

const Footer = () => {
  return (
    <footer id="contacto" className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <img src={logoImg} alt="SiuBit Software" className="footer-logo-img" />
            <p className="footer-desc">
              Llevando tus ideas a la realidad digital con software de alta calidad.
            </p>
          </div>
          
          <div className="footer-contact">
            <h4>Contáctanos</h4>
            <p>📧 siubitsoftware@gmail.com</p>
            <p>📱 +52 (449) 261 0335</p>
            
            <div className="social-links" style={{marginTop: '16px', marginBottom: '16px'}}>
              <a href="https://www.facebook.com/profile.php?id=61587215282802" target="_blank" rel="noopener noreferrer" aria-label="Facebook" style={{color: 'var(--text-color-muted)', display: 'inline-flex', alignItems: 'center', gap: '8px', transition: 'color 0.3s'}}>
                <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                  <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z" />
                </svg>
                <span>Síguenos en Facebook</span>
              </a>
            </div>

            <div className="footer-cta">
              <a href="mailto:siubitsoftware@gmail.com" className="btn btn-primary" style={{padding: '10px 20px', fontSize: '0.9rem'}}>Cotizar Proyecto</a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} SiuBit Software. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
