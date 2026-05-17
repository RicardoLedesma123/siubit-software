import React from 'react';
import './TechStack.css';
import { SiAngular, SiReact, SiPhp, SiMariadb, SiElevenlabs, SiTwilio, SiWhatsapp, SiN8N } from 'react-icons/si';
import { DiMsqlServer } from 'react-icons/di';
import { TbBrandCSharp } from 'react-icons/tb';

const technologies = [
  { name: "Angular", Icon: SiAngular },
  { name: "React", Icon: SiReact },
  { name: "SQL Server", Icon: DiMsqlServer },
  { name: "C#", Icon: TbBrandCSharp },
  { name: "PHP", Icon: SiPhp },
  { name: "MariaDB", Icon: SiMariadb },
  { name: "ElevenLabs", Icon: SiElevenlabs },
  { name: "Twilio", Icon: SiTwilio },
  { name: "API WhatsApp", Icon: SiWhatsapp },
  { name: "n8n", Icon: SiN8N }
];

const TechStack = () => {
  return (
    <section className="tech-stack">
      <div className="tech-marquee-container">
        <div className="tech-marquee">
          {/* Duplicamos la lista para crear el efecto infinito sin saltos */}
          {[...technologies, ...technologies].map((tech, index) => (
            <div key={index} className="tech-badge">
              <tech.Icon className="tech-icon" />
              {tech.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
