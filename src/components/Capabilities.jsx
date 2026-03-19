import React from 'react';
import { motion } from 'framer-motion';
import { useAppContext } from '../context/AppContext';

export default function Capabilities() {
  const { t } = useAppContext();
  
  return (
    <section id="capabilities" className="section py-20 border-t">
      <div className="section-header" style={{ marginBottom: '80px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <h2 className="section-title" style={{fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', fontWeight: 500, letterSpacing: '-0.02em'}}>{t.capabilities.title}</h2>
        <p className="section-subtitle" style={{fontSize: '1.25rem', maxWidth: '700px', lineHeight: 1.6}}>{t.capabilities.subtitle}</p>
      </div>

      <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px'}}>
        {t.capabilities.items.map((cap, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            style={{borderTop: '1px solid var(--border-color)', paddingTop: '32px', display: 'flex', flexDirection: 'column'}}
          >
            <div style={{fontFamily: 'monospace', fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '32px'}}>0{idx + 1}</div>
            <h3 style={{fontSize: '1.5rem', fontWeight: 500, marginBottom: '24px', color: 'var(--text-primary)', letterSpacing: '-0.02em'}}>{cap.title}</h3>
            <p style={{color: 'var(--text-secondary)', lineHeight: '1.6', fontSize: '1.05rem', flex: 1}}>{cap.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
