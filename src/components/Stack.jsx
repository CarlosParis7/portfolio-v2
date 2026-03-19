// src/components/Stack.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useAppContext } from '../context/AppContext';

const skills = [
  "React", "Next.js", "TypeScript", "TailwindCSS", 
  "Node.js", "Supabase", "PostgreSQL", "Framer Motion",
  "AI/LLMs", "System Architecture", "UI/UX Design",
  "CI/CD Pipeline", "Vitest", "Docker"
];

export default function Stack() {
  const { t } = useAppContext();
  
  return (
    <section id="about" className="section py-20 border-t">
      <div className="stack-container">
        <div className="stack-header">
          <h2 className="section-title">{t.stack.title}</h2>
          <p className="section-subtitle">{t.stack.subtitle}</p>
        </div>
        <div className="stack-grid">
          {skills.map((skill, idx) => (
            <motion.div 
              key={idx}
              className="stack-item"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
