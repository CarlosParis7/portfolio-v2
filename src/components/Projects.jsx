// src/components/Projects.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useAppContext } from '../context/AppContext';

export default function Projects() {
  const { t } = useAppContext();
  const cases = t.projects.cases;

  return (
    <section id="work" className="section py-20">
      <div className="section-header" style={{ marginBottom: '80px' }}>
        <h2 className="section-title" style={{fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', fontWeight: 500, letterSpacing: '-0.02em'}}>{t.projects.sectionTitle}</h2>
        <p className="section-subtitle" style={{fontSize: '1.25rem', maxWidth: '600px'}}>{t.projects.sectionSubtitle}</p>
      </div>

      <div className="case-study-list">
        
        {/* CASE STUDY 1: BYTELABS */}
        <motion.article 
          className="feature-case-study"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="case-content">
            <div className="case-meta-header">
              <span>{cases[0].meta}</span>
              <span>{cases[0].year}</span>
            </div>
            <h3 className="case-title">{cases[0].title}</h3>
            <p className="case-description">{cases[0].desc}</p>
            
            <div className="case-details-grid">
              <div className="detail-block">
                <h4>{t.projects.built}</h4>
                <p>{cases[0].builtText}</p>
              </div>
              <div className="detail-block">
                <h4>{t.projects.stack}</h4>
                <p>{cases[0].stackText}</p>
              </div>
              <div className="detail-block" style={{gridColumn: '1 / -1'}}>
                <h4>{t.projects.problem}</h4>
                <p>{cases[0].problemText}</p>
              </div>
              <div className="detail-block" style={{gridColumn: '1 / -1'}}>
                <h4>{t.projects.impact}</h4>
                <p style={{fontWeight: 500, color: 'var(--text-primary)'}}>{cases[0].impactText}</p>
              </div>
            </div>
          </div>
          
          <div className="case-visual-container">
            {/* Logistics Tracking Operations Dashboard Fragment */}
            <div className="ui-fragment">
              <div className="ui-header" style={{fontFamily: 'monospace', fontSize: '0.7rem', color: 'var(--text-secondary)'}}>
                ENV: PROD // BYTELABS_OS
              </div>
              <div className="ui-body" style={{flexDirection: 'column', gap: '0'}}>
                <div style={{display: 'flex', flexDirection: 'column', gap: '12px', height: 'auto', marginTop: 0}}>
                  <div style={{display: 'flex', justifyContent: 'space-between', padding: '8px 16px', borderBottom: '1px solid var(--border-color)', fontSize: '0.65rem', fontFamily: 'monospace', color: 'var(--text-secondary)', textTransform: 'uppercase'}}>
                    <span style={{width: '30%'}}>TRACK_ID</span><span style={{width: '35%'}}>STATUS</span><span style={{width: '35%', textAlign: 'right'}}>DESTINATION_HUB</span>
                  </div>
                  <div style={{display: 'flex', justifyContent: 'space-between', padding: '12px 16px', background: 'var(--surface-hover)', borderRadius: '4px'}}>
                    <span style={{fontFamily: 'monospace', fontSize: '0.75rem', width: '30%'}}>#TRK-9012</span>
                    <span style={{width: '35%'}}><span className="badge-success" style={{fontSize: '0.6rem', padding: '4px 8px', borderRadius: '100px'}}>DELIVERED</span></span>
                    <span style={{fontFamily: 'monospace', fontSize: '0.75rem', width: '35%', textAlign: 'right'}}>HUB_NORTH</span>
                  </div>
                  <div style={{display: 'flex', justifyContent: 'space-between', padding: '12px 16px'}}>
                    <span style={{fontFamily: 'monospace', fontSize: '0.75rem', width: '30%'}}>#TRK-9013</span>
                    <span style={{width: '35%'}}><span className="badge-warning" style={{fontSize: '0.6rem', padding: '4px 8px', borderRadius: '100px'}}>IN_TRANSIT</span></span>
                    <span style={{fontFamily: 'monospace', fontSize: '0.75rem', width: '35%', textAlign: 'right'}}>HUB_SOUTH</span>
                  </div>
                  <div style={{display: 'flex', justifyContent: 'space-between', padding: '12px 16px', background: 'var(--surface-hover)', borderRadius: '4px'}}>
                    <span style={{fontFamily: 'monospace', fontSize: '0.75rem', width: '30%'}}>#TRK-9014</span>
                    <span style={{width: '35%'}}><span className="badge-error" style={{fontSize: '0.6rem', padding: '4px 8px', borderRadius: '100px'}}>EXCEPTION</span></span>
                    <span style={{fontFamily: 'monospace', fontSize: '0.75rem', width: '35%', textAlign: 'right'}}>HUB_EAST</span>
                  </div>
                  <div style={{display: 'flex', justifyContent: 'space-between', padding: '12px 16px'}}>
                    <span style={{fontFamily: 'monospace', fontSize: '0.75rem', width: '30%', opacity: 0.6}}>#TRK-9015</span>
                    <span style={{width: '35%'}}><span className="badge-neutral" style={{fontSize: '0.6rem', padding: '4px 8px', borderRadius: '100px'}}>PENDING</span></span>
                    <span style={{fontFamily: 'monospace', fontSize: '0.75rem', width: '35%', textAlign: 'right', opacity: 0.6}}>HUB_CENTRAL</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.article>

        <div className="secondary-cases">
          {/* CASE STUDY 2: WHATSAPP */}
          <motion.article 
            className="secondary-case"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="case-visual-container">
               <div className="ui-fragment" style={{width: '70%', height: '85%', borderRadius: '16px', background: 'var(--surface-color)', border: '1px solid var(--border-color)'}}>
                 <div className="ui-header" style={{background: 'var(--surface-hover)', height: '40px', justifyContent: 'space-between', padding: '0 16px'}}>
                    <span className="wa-text" style={{fontFamily: 'monospace', fontSize: '0.65rem'}}>{"<"} WHATSAPP_API</span>
                    <div className="wa-bg" style={{width: '6px', height: '6px', borderRadius: '50%'}}></div>
                 </div>
                 <div className="ui-body" style={{flexDirection: 'column', padding: '16px', gap: '12px'}}>
                    <div className="wa-bubble" style={{alignSelf: 'flex-start', padding: '16px', borderRadius: '0 12px 12px 12px', width: '85%'}}>
                      <div className="ui-skeleton-line wa-bg" style={{width: '50%'}}></div>
                      <div className="ui-skeleton-line" style={{width: '80%', opacity: 0.8, background: 'var(--text-primary)'}}></div>
                      <div className="ui-skeleton-line" style={{width: '40%', opacity: 0.8, background: 'var(--text-primary)', margin:0}}></div>
                    </div>
                    <div style={{alignSelf: 'flex-end', background: 'var(--surface-hover)', padding: '16px', borderRadius: '12px 0 12px 12px', width: '60%'}}>
                      <div className="ui-skeleton-line" style={{width: '100%', margin:0, background: 'var(--text-secondary)'}}></div>
                    </div>
                    <div className="wa-bubble" style={{alignSelf: 'flex-start', padding: '16px', borderRadius: '0 12px 12px 12px', width: '70%'}}>
                      <div className="ui-skeleton-line wa-bg" style={{width: '40%'}}></div>
                      <div className="ui-skeleton-line" style={{width: '70%', opacity: 0.8, background: 'var(--text-primary)', margin:0}}></div>
                    </div>
                 </div>
              </div>
            </div>
            
            <div className="case-meta-header">
              <span>{cases[1].meta}</span>
            </div>
            <h3 className="case-title">{cases[1].title}</h3>
            <p className="case-description">{cases[1].desc}</p>
            <div className="case-details-grid" style={{gridTemplateColumns: '1fr', gap: '20px', marginBottom: 0}}>
              <div className="detail-block" style={{gridColumn: '1 / -1'}}>
                <h4>{t.projects.impact}</h4>
                <p style={{fontWeight: 500, color: 'var(--text-primary)'}}>{cases[1].impactText}</p>
              </div>
              <div className="detail-block" style={{gridColumn: '1 / -1'}}>
                <h4>{t.projects.stack}</h4>
                <p>{cases[1].stackText}</p>
              </div>
            </div>
          </motion.article>

          {/* CASE STUDY 3: AI RAG */}
          <motion.article 
            className="secondary-case"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="case-visual-container" style={{background: '#030303'}}>
               {/* Terminal AI Context Fragment */}
               <div className="ui-fragment" style={{width: '80%', height: '80%', fontFamily: 'monospace', padding: '24px', background: '#050505', border: '1px solid #111', color: '#00ff41', display: 'flex', flexDirection: 'column', gap: '8px', overflow: 'hidden', fontSize: '0.75rem', boxShadow: '0 20px 40px rgba(0,255,65,0.05)'}}>
                  <div style={{opacity: 0.5}}>&gt; system init internal_RAG_copilot...</div>
                  <div style={{opacity: 0.5}}>&gt; connecting pinecone_index... OK</div>
                  <div>&gt; query received: "tracking_rule_593"</div>
                  <div style={{color: '#ffbd2e'}}>&gt; retrieving context vectors... [89% accuracy]</div>
                  <div style={{color: '#27c93f'}}>&gt; generating response via GPT-4...</div>
                  <div style={{background: 'rgba(39, 201, 63, 0.05)', borderLeft: '2px solid #27c93f', padding: '12px', marginTop: '8px', color: '#f0f0f0'}}>
                    <div style={{height: '6px', background: '#f0f0f0', width: '90%', marginBottom: '8px', borderRadius: '4px', opacity: 0.8}}></div>
                    <div style={{height: '6px', background: '#f0f0f0', width: '60%', borderRadius: '4px', opacity: 0.8}}></div>
                    <div style={{height: '6px', background: '#f0f0f0', width: '80%', marginTop: '8px', borderRadius: '4px', opacity: 0.8}}></div>
                  </div>
                  <div style={{width: '10px', height: '16px', background: '#00ff41', marginTop: '8px', animation: 'blink 1s step-end infinite'}}></div>
               </div>
            </div>

            <div className="case-meta-header">
              <span>{cases[2].meta}</span>
            </div>
            <h3 className="case-title">{cases[2].title}</h3>
            <p className="case-description">{cases[2].desc}</p>
            <div className="case-details-grid" style={{gridTemplateColumns: '1fr', gap: '20px', marginBottom: 0}}>
              <div className="detail-block" style={{gridColumn: '1 / -1'}}>
                <h4>{t.projects.impact}</h4>
                <p style={{fontWeight: 500, color: 'var(--text-primary)'}}>{cases[2].impactText}</p>
              </div>
              <div className="detail-block" style={{gridColumn: '1 / -1'}}>
                <h4>{t.projects.stack}</h4>
                <p>{cases[2].stackText}</p>
              </div>
            </div>
          </motion.article>
        </div>

      </div>
    </section>
  );
}
