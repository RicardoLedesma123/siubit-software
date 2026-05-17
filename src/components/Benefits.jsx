import React from 'react';
import './Benefits.css';
import creationImg from '../assets/generated/creation_of_ai_1778995278247.png';

const Benefits = () => {
  return (
    <section id="beneficios" className="benefits">
      <div className="container">
        <div className="benefits-content">
          <div className="benefits-text">
            <h2 className="section-title" style={{textAlign: 'left'}}>¿Por qué elegir <span className="text-primary">SiuBit Software</span>?</h2>
            <p className="benefits-desc">
              No solo escribimos código, construimos productos digitales diseñados para escalar y ofrecer la mejor experiencia de usuario.
            </p>
            <ul className="benefits-list">
              <li>
                <span className="check">✓</span>
                <div>
                  <strong>Diseño Moderno</strong>
                  <p>Interfaces atractivas, limpias y enfocadas en la usabilidad.</p>
                </div>
              </li>
              <li>
                <span className="check">✓</span>
                <div>
                  <strong>Alto Rendimiento</strong>
                  <p>Código optimizado para tiempos de carga rápidos y fluidez.</p>
                </div>
              </li>
              <li>
                <span className="check">✓</span>
                <div>
                  <strong>Escalabilidad</strong>
                  <p>Arquitectura sólida para que tu software crezca con tu negocio.</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="benefits-image-container">
            <img src={creationImg} alt="Human and AI connection" className="benefits-img glass" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
