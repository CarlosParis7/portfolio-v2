export const translations = {
  en: {
    nav: { work: "Systems", capabilities: "Capabilities", contact: "Contact" },
    hero: { 
      badge: "Product Engineer · Founder-Builder", 
      title1: "Building systems", title2: "for real", title3: "operations.",
      subtitle: "I design and build software for real operations: multi-tenant SaaS, logistics automation, and AI systems integrated into business workflows."
    },
    credibility: [
      "Multi-tenant SaaS", "Logistics Automation", "Internal AI Systems", "Operational Dashboards"
    ],
    projects: {
      sectionTitle: "Systems Built",
      sectionSubtitle: "Architectures, workflows, and tools designed from scratch to reduce operational friction, improve visibility, and scale critical processes.",
      built: "What I Built",
      stack: "Architecture",
      problem: "The Problem",
      impact: "Business Impact",
      cases: [
        {
          meta: "01 / Multi-tenant SaaS",
          year: "2024",
          title: "ByteLabs OS",
          desc: "Operating platform designed to centralize tracking, visibility, and internal control for companies with complex logistics processes. Built on a multi-tenant architecture with real-time sync, role-based permissions, and cross-relational data.",
          builtText: "Scalable backend, admin dashboard, tracking flows, role control, and sync between operational states.",
          stackText: "React, Node.js, Supabase, PostgreSQL, real-time sync, multi-tenant model.",
          problemText: "Tracking processes depended on manual entry, causing low visibility across teams and frequent operational reconciliation errors.",
          impactText: "Reduced manual load, clearer traceability, and a scalable base ready to operate thousands of daily transactions without losing control."
        },
        {
          meta: "02 / Workflow Automation",
          title: "WhatsApp Ops Pipeline",
          desc: "Webhook and operational messaging system connecting logistics events to automatic WhatsApp notifications, reducing manual tracking and improving response times.",
          impactText: "Less manual intervention answering customer inquiries and updating states for internal teams.",
          stackText: "Meta Webhooks, Next.js, Redis, processing queues, retry logic."
        },
        {
          meta: "03 / AI in internal tools",
          title: "Internal RAG Copilot",
          desc: "Contextual retrieval system integrated into internal tools to answer operational questions, accelerate information queries, and reduce dependency on human support.",
          impactText: "Faster access to internal knowledge and less time spent resolving complex team queries.",
          stackText: "OpenAI GPT-4, Pinecone, LangChain, TypeScript, restricted context flows."
        }
      ]
    },
    capabilities: {
      title: "Strategic Capabilities",
      subtitle: "Infrastructure and architecture solutions designed to turn software into a real operational advantage.",
      items: [
        { title: "Core SaaS Systems", desc: "Design of multi-tenant architectures with role control, data isolation, reliable synchronization, and solid foundations to scale without losing operational order." },
        { title: "Workflow Development", desc: "Connection of internal software with external services via webhooks, queues, and automations that eliminate manual work and reduce friction points." },
        { title: "Intelligent AI Systems", desc: "Integration of copilots and contextual search engines into internal tools to accelerate decisions, information access, and operational support." },
        { title: "Visibility & Dashboards", desc: "Construction of interfaces to monitor metrics, extreme states, and critical business variables with clarity to operate and decide better." }
      ]
    },
    contact: {
      title: "Ready to build something that actually works?",
      subtitle: "Available for hire, collaborations, and consulting. Whether you need a system from scratch or a team with product vision — let's talk.",
      btn: "Let's work together",
      btnEmail: "Send an email",
      rights: "All rights reserved. Designed for real operations."
    }
  },
  es: {
    nav: { work: "Sistemas", capabilities: "Capacidades", contact: "Contacto" },
    hero: { 
      badge: "Product Engineer · Founder-Builder", 
      title1: "Construyendo sistemas", title2: "para la", title3: "operación.",
      subtitle: "Diseño y construyo software para operaciones reales: SaaS multi-tenant, automatización logística y sistemas de IA integrados al flujo del negocio."
    },
    credibility: [
      "SaaS multi-tenant", "Automatización logística", "Sistemas internos de IA", "Dashboards operativos"
    ],
    projects: {
      sectionTitle: "Sistemas Construidos",
      sectionSubtitle: "Arquitecturas, flujos y herramientas diseñadas desde cero para reducir fricción operativa, mejorar visibilidad y escalar procesos críticos.",
      built: "Qué construí",
      stack: "Arquitectura",
      problem: "Problema",
      impact: "Impacto",
      cases: [
        {
          meta: "01 / SaaS Multi-tenant",
          year: "2024",
          title: "ByteLabs OS",
          desc: "Plataforma operativa diseñada para centralizar tracking, visibilidad y control interno en empresas con procesos logísticos complejos. Construida sobre una arquitectura multi-tenant con sincronización en tiempo real, permisos por rol y datos relacionales cruzados.",
          builtText: "Backend escalable, panel administrativo, flujos de tracking, control por roles y sincronización entre estados operativos.",
          stackText: "React, Node.js, Supabase, PostgreSQL, sincronización en tiempo real y modelo multi-tenant.",
          problemText: "Procesos de rastreo dependientes de entrada manual, baja visibilidad entre equipos y errores frecuentes en conciliación operativa.",
          impactText: "Menor carga manual, trazabilidad más clara y una base lista para operar miles de transacciones diarias sin perder control."
        },
        {
          meta: "02 / Automatización",
          title: "WhatsApp Ops Pipeline",
          desc: "Sistema de webhooks y mensajería operativa que conecta eventos logísticos con notificaciones automáticas en WhatsApp, reduciendo seguimiento manual y mejorando tiempos de respuesta.",
          impactText: "Menos intervención manual en atención y actualización de estados hacia clientes y equipos internos.",
          stackText: "Meta Webhooks, Next.js, Redis, colas de procesamiento y lógica de reintentos."
        },
        {
          meta: "03 / IA en Herramientas",
          title: "Copiloto RAG Interno",
          desc: "Sistema de recuperación contextual integrado a herramientas internas para responder preguntas operativas, acelerar consulta de información y reducir dependencia de soporte humano.",
          impactText: "Acceso más rápido al conocimiento interno y menor tiempo invertido en resolver consultas complejas del equipo.",
          stackText: "OpenAI GPT-4, Pinecone, LangChain, TypeScript y flujos de recuperación con contexto restringido."
        }
      ]
    },
    capabilities: {
      title: "Capacidades Estratégicas",
      subtitle: "Soluciones de infraestructura y arquitectura pensadas para convertir software en una ventaja operativa real.",
      items: [
        { title: "Sistemas Core SaaS", desc: "Diseño arquitecturas multi-tenant con control por roles, aislamiento de datos, sincronización confiable y bases sólidas para escalar sin perder orden operativo." },
        { title: "Desarrollo de Flujos", desc: "Conecto software interno con servicios externos mediante webhooks, colas y automatizaciones que eliminan trabajo manual y reducen puntos de fricción." },
        { title: "Sistemas Inteligentes de IA", desc: "Integro copilotos y motores de búsqueda contextual en herramientas internas para acelerar decisiones, acceso a información y soporte operativo." },
        { title: "Visibilidad y Dashboards", desc: "Construyo interfaces para monitorear métricas, estados y variables críticas del negocio con claridad suficiente para operar y decidir mejor." }
      ]
    },
    contact: {
      title: "¿Listo para construir algo que sí funcione?",
      subtitle: "Disponible para proyectos, colaboraciones y consultoría. Si necesitas un sistema desde cero o un perfil con visión de producto — hablemos.",
      btn: "Hablemos",
      btnEmail: "Enviar un correo",
      rights: "Todos los derechos reservados. Diseñado para operaciones reales."
    }
  }
};
