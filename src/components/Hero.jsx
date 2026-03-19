import React from 'react';
import { motion } from 'framer-motion';
import { useAppContext } from '../context/AppContext';
import carlosPhoto from '../assets/carlos.jpeg';

export default function Hero() {
  const { t } = useAppContext();
  
  // Duplicate items 4 times to ensure it's wide enough for a seamless infinite marquee
  // Needs an even number of duplications to translate -50% perfectly
  const baseItems = t.credibility;
  const items = [...baseItems, ...baseItems, ...baseItems, ...baseItems];

  return (
    <>
    <section className="hero-section" style={{minHeight: '80vh', display: 'flex', alignItems: 'center', paddingTop: '12vh', paddingBottom: '12vh'}}>
      <div className="hero-grid" style={{display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '60px', alignItems: 'center', width: '100%'}}>
        
        {/* TEXT CONTENT */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* AVATAR SIGNATURE */}
          <motion.div
            style={{display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '32px'}}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div style={{
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              overflow: 'hidden',
              border: '1px solid var(--border-color)',
              flexShrink: 0,
              filter: 'grayscale(20%)',
            }}>
              <img 
                src={carlosPhoto} 
                alt="Carlos Paris" 
                style={{width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top'}}
              />
            </div>
            <div style={{display: 'flex', flexDirection: 'column', gap: '2px'}}>
              <span style={{fontSize: '0.95rem', fontWeight: 500, color: 'var(--text-primary)', letterSpacing: '-0.01em'}}>Carlos Paris</span>
              <span style={{fontSize: '0.72rem', fontFamily: 'monospace', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--text-secondary)'}}>{t.hero.badge}</span>
            </div>
          </motion.div>

          <h1 className="hero-title" style={{fontWeight: 500, fontSize: 'clamp(2.5rem, 5.5vw, 4.5rem)', lineHeight: 1.05, letterSpacing: '-0.03em', marginBottom: '32px'}}>
            {t.hero.title1} <br/>
            <span className="text-secondary" style={{fontStyle: 'italic', fontWeight: 300}}>{t.hero.title2}</span> <br/>
            <span className="text-primary" style={{fontWeight: 600}}>{t.hero.title3}</span>
          </h1>
          <p className="hero-subtitle" style={{fontSize: '1.2rem', lineHeight: '1.6', maxWidth: '600px', color: 'var(--text-secondary)', fontWeight: 400}}>
             {t.hero.subtitle}
          </p>
        </motion.div>

        {/* ARCHITECTURE DIAGRAM */}
        <motion.div 
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          style={{padding: '40px', display: 'flex'}}
        >
          <div className="arch-diagram glass" style={{borderRadius: '16px', padding: '32px', width: '100%', maxWidth: '450px'}}>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--border-color)', paddingBottom: '16px', marginBottom: '24px'}}>
              <span style={{fontFamily: 'monospace', fontSize: '0.75rem', color: 'var(--text-secondary)', letterSpacing: '0.05em'}}>SYSTEM_ARCH / PROD</span>
              <div style={{display: 'flex', gap: '8px'}}>
                <div style={{width: '8px', height: '8px', background: 'var(--border-color)', borderRadius: '50%'}}></div>
                <div className="sys-dot-success" style={{width: '8px', height: '8px', borderRadius: '50%'}}></div>
              </div>
            </div>
            
            <div style={{display: 'flex', flexDirection: 'column', gap: '16px'}}>
              <div style={{display: 'flex', gap: '16px', alignItems: 'center'}}>
                <div style={{flex: 1, border: '1px dashed var(--text-secondary)', padding: '16px', borderRadius: '8px', textAlign: 'center', opacity: 0.7}}>
                  <span style={{fontSize: '0.7rem', textTransform: 'uppercase', fontFamily: 'monospace'}}>Client UI</span>
                </div>
                <div style={{color: 'var(--text-secondary)', fontSize: '0.8rem'}}>&#8594;</div>
                <div style={{flex: 1, border: '1px solid var(--border-color)', padding: '16px', borderRadius: '8px', background: 'var(--surface-hover)', textAlign: 'center'}}>
                  <span style={{fontSize: '0.7rem', textTransform: 'uppercase', fontFamily: 'monospace', color: 'var(--text-primary)'}}>Core API</span>
                </div>
              </div>
              <div style={{display: 'flex', justifyContent: 'center'}}>
                <div style={{width: '1px', height: '24px', background: 'var(--border-color)'}}></div>
              </div>
              <div style={{display: 'flex', gap: '16px'}}>
                <div style={{flex: 1, border: '1px solid var(--border-color)', padding: '16px', borderRadius: '8px', background: 'var(--bg-color)', textAlign: 'center'}}>
                  <span style={{fontSize: '0.65rem', textTransform: 'uppercase', fontFamily: 'monospace', color: 'var(--text-secondary)'}}>PostgreSQL (RLS)</span>
                </div>
                <div className="wa-bubble" style={{flex: 1, padding: '16px', borderRadius: '8px', textAlign: 'center'}}>
                  <span className="wa-text" style={{fontSize: '0.65rem', textTransform: 'uppercase', fontFamily: 'monospace'}}>Auto Webhooks</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
    
    {/* INFINITE CREDIBILITY STRIP */}
    <motion.div 
      className="credibility-strip"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4, duration: 1 }}
      style={{
        marginTop: '0px', 
        marginBottom: '100px', 
        borderTop: '1px solid var(--border-color)', 
        borderBottom: '1px solid var(--border-color)', 
        padding: '24px 0', 
        overflow: 'hidden'
      }}
    >
      <div 
        className="marquee-track"
        style={{
          display: 'flex', 
          width: 'max-content',
          fontSize: '0.9rem', 
          textTransform: 'uppercase', 
          letterSpacing: '0.05em', 
          color: 'var(--text-secondary)'
        }}
      >
        {items.map((item, i) => (
           <span key={i} style={{display: 'flex', alignItems: 'center'}}>
             <span style={{marginRight: '60px'}}>{item}</span>
             <span style={{width: '6px', height: '6px', background: 'var(--border-color)', borderRadius: '50%', marginRight: '60px'}}></span>
           </span>
        ))}
      </div>
    </motion.div>
    </>
  );
}
