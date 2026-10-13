/*
 * Contenido del portafolio — Diego Alejandro Estrada Beltran
 * -----------------------------------------------------------
 * Este archivo es la única fuente de datos para las secciones que crecen:
 * proyectos, experiencia, habilidades y credenciales.
 *
 * Para agregar un proyecto: copia un objeto dentro de `projects`, cambia sus
 * textos y, si existe un enlace público, completa `url`. El carrusel, los
 * indicadores y el contador se ajustan solos.
 *
 * Todo texto visible tiene versión { es, en }.
 */
window.SITE = {
  projects: [
    {
      category: { es: "Modernización backend", en: "Backend modernization" },
      context: { es: "Rugged Books Inc., Canadá", en: "Rugged Books Inc., Canada" },
      name: { es: "Migración de plataforma a Java 21 LTS", en: "Platform migration to Java 21 LTS" },
      description: {
        es: "Evolución escalonada de la plataforma backend sin detener la operación del negocio.",
        en: "Step-by-step evolution of the backend platform without stopping business operations."
      },
      problem: {
        es: "Servicios en Java 8 y Spring Boot 2.7 acercándose al fin de su soporte.",
        en: "Services on Java 8 and Spring Boot 2.7 approaching end of support."
      },
      solution: {
        es: "Migración por etapas Java 8 → 11 → 17 → 21 LTS y Spring Boot 2.7 → 3.3 → 3.5.x, validando compatibilidad en cada salto.",
        en: "Staged migration Java 8 → 11 → 17 → 21 LTS and Spring Boot 2.7 → 3.3 → 3.5.x, validating compatibility at every step."
      },
      result: {
        es: "Plataforma en versiones LTS, estable y con soporte a largo plazo.",
        en: "Platform on LTS versions, stable and with long-term support."
      },
      tech: ["Java 21", "Spring Boot 3.5", "Maven", "MySQL", "Docker Compose"],
      privateCode: true,
      url: ""
    },
    {
      category: { es: "IA aplicada", en: "Applied AI" },
      context: { es: "Rugged Books Inc., Canadá", en: "Rugged Books Inc., Canada" },
      name: { es: "Integración de IA con Model Context Protocol", en: "AI integration with Model Context Protocol" },
      description: {
        es: "Puente seguro entre las APIs internas y servicios basados en modelos de lenguaje (LLM).",
        en: "A secure bridge between internal APIs and LLM-based services."
      },
      problem: {
        es: "Exponer funcionalidades del negocio a herramientas de IA sin abrir la superficie de ataque.",
        en: "Expose business capabilities to AI tools without widening the attack surface."
      },
      solution: {
        es: "Capacidades MCP sobre Spring Boot que publican funciones controladas a través de APIs.",
        en: "MCP capabilities on Spring Boot that publish controlled functions through APIs."
      },
      result: {
        es: "Flujos de trabajo automatizados con IA, con acceso acotado y auditable.",
        en: "AI-automated workflows with scoped, auditable access."
      },
      tech: ["Java", "Spring Boot", "MCP", { es: "APIs REST", en: "REST APIs" }, "LLM"],
      privateCode: true,
      url: ""
    },
    {
      category: { es: "Calidad y automatización", en: "Quality and automation" },
      context: { es: "Rugged Books Inc., Canadá", en: "Rugged Books Inc., Canada" },
      name: { es: "Validación automatizada de punta a punta", en: "End-to-end automated validation" },
      description: {
        es: "Pruebas y validaciones automáticas para los flujos críticos del negocio.",
        en: "Automated tests and validations for business-critical flows."
      },
      problem: {
        es: "Validaciones manuales lentas y propensas a errores en operaciones críticas.",
        en: "Slow, error-prone manual validation in critical operations."
      },
      solution: {
        es: "Pipelines de pruebas y validación integrados al SDLC, con entornos reproducibles en Docker Compose.",
        en: "Test and validation pipelines built into the SDLC, with reproducible Docker Compose environments."
      },
      result: {
        es: "Más de 50% menos errores manuales y 99,9% de disponibilidad en operaciones críticas.",
        en: "Over 50% fewer manual errors and 99.9% uptime for critical operations."
      },
      tech: ["Java", "JUnit", "Docker Compose", "GitHub", "Jira"],
      privateCode: true,
      url: ""
    },
    {
      category: { es: "Backend empresarial", en: "Enterprise backend" },
      context: { es: "Proyecto propio", en: "Personal project" },
      name: { es: "Sistema de inventario empresarial", en: "Enterprise inventory system" },
      description: {
        es: "Plataforma backend para gestión de inventario y bodegas con reglas de negocio complejas.",
        en: "Backend platform for inventory and warehouse management with complex business rules."
      },
      problem: {
        es: "Controlar existencias, movimientos y bodegas con reglas que cambian según el negocio.",
        en: "Track stock, movements and warehouses under rules that change with the business."
      },
      solution: {
        es: "Modelo relacional cuidado, servicios en Spring Boot y consultas SQL avanzadas.",
        en: "A careful relational model, Spring Boot services and advanced SQL queries."
      },
      result: {
        es: "Reglas de negocio centralizadas en un backend mantenible y consultable.",
        en: "Business rules centralized in a maintainable, queryable backend."
      },
      tech: ["Java", "Spring Boot", "JPA/Hibernate", "PostgreSQL", "MySQL"],
      privateCode: false,
      url: ""
    },
    {
      category: { es: "Seguridad", en: "Security" },
      context: { es: "Proyecto propio", en: "Personal project" },
      name: { es: "API REST segura con JWT y RBAC", en: "Secure REST API with JWT and RBAC" },
      description: {
        es: "Autenticación y autorización por roles siguiendo las recomendaciones de OWASP.",
        en: "Role-based authentication and authorization following OWASP guidance."
      },
      problem: {
        es: "Proteger endpoints con permisos distintos por tipo de usuario.",
        en: "Protect endpoints with different permissions per user type."
      },
      solution: {
        es: "Spring Security con tokens JWT y control de acceso basado en roles (RBAC).",
        en: "Spring Security with JWT tokens and role-based access control (RBAC)."
      },
      result: {
        es: "Acceso por rol verificable y una base reutilizable para nuevas APIs.",
        en: "Verifiable role-based access and a reusable base for new APIs."
      },
      tech: ["Spring Security", "JWT", "RBAC", "OWASP", "Java"],
      privateCode: false,
      url: ""
    },
    {
      category: { es: "Automatización e IoT", en: "Automation and IoT" },
      context: { es: "Proyecto propio", en: "Personal project" },
      name: { es: "Plataforma de llamadas y SMS en Raspberry Pi", en: "Calls and SMS platform on Raspberry Pi" },
      description: {
        es: "Solución automatizada de llamadas y mensajes con seguimiento de respuestas.",
        en: "Automated calling and messaging with response tracking."
      },
      problem: {
        es: "Gestionar comunicaciones repetitivas y saber quién respondió y cuándo.",
        en: "Handle repetitive communications and know who answered and when."
      },
      solution: {
        es: "Plataforma en Raspberry Pi que llama, envía SMS, registra eventos y gestiona flujos.",
        en: "A Raspberry Pi platform that calls, sends SMS, logs events and manages workflows."
      },
      result: {
        es: "Comunicaciones automatizadas con trazabilidad de cada respuesta.",
        en: "Automated communications with every response traceable."
      },
      tech: ["Raspberry Pi", "Linux", "SMS", { es: "Automatización", en: "Automation" }],
      privateCode: false,
      url: ""
    },
    {
      category: { es: "Móvil y web", en: "Mobile and web" },
      context: { es: "Antojitos Inc., Canadá", en: "Antojitos Inc., Canada" },
      name: { es: "App móvil y sitio corporativo", en: "Mobile app and company website" },
      description: {
        es: "Presencia digital completa para un negocio de comida en Ontario.",
        en: "A complete digital presence for a food business in Ontario."
      },
      problem: {
        es: "El menú diario y las promociones solo se comunicaban en el local.",
        en: "The daily menu and promotions were only shared in-store."
      },
      solution: {
        es: "App multiplataforma en Flutter conectada a servicios backend, más el sitio web corporativo.",
        en: "A cross-platform Flutter app connected to backend services, plus the company website."
      },
      result: {
        es: "Menú y promociones publicados dinámicamente en móvil y web.",
        en: "Menu and promotions published dynamically on mobile and web."
      },
      tech: ["Flutter", { es: "APIs REST", en: "REST APIs" }, "Web"],
      privateCode: true,
      url: ""
    },
    {
      category: { es: "Calidad de software", en: "Software quality" },
      context: { es: "Choucair Testing S.A., Colombia", en: "Choucair Testing S.A., Colombia" },
      name: { es: "Framework de automatización BDD", en: "BDD automation framework" },
      description: {
        es: "Pruebas automatizadas legibles por negocio y por desarrollo.",
        en: "Automated tests readable by both business and engineering."
      },
      problem: {
        es: "Validar aplicaciones empresariales en cada entrega sin depender de pruebas manuales.",
        en: "Validate enterprise applications on every release without relying on manual testing."
      },
      solution: {
        es: "Escenarios en Gherkin automatizados con Java, Selenium WebDriver, Cucumber y Maven.",
        en: "Gherkin scenarios automated with Java, Selenium WebDriver, Cucumber and Maven."
      },
      result: {
        es: "Detección temprana de defectos y menor tiempo de salida a producción.",
        en: "Earlier defect detection and shorter time to market."
      },
      tech: ["Java", "Selenium", "Cucumber", "Gherkin", "Maven"],
      privateCode: true,
      url: ""
    }
  ],

  experience: [
    {
      from: "2021", to: "2026",
      period: { es: "oct 2021 – mar 2026", en: "Oct 2021 – Mar 2026" },
      role: { es: "Backend Software Engineer", en: "Backend Software Engineer" },
      company: "Rugged Books Inc.",
      place: { es: "Ontario, Canadá", en: "Ontario, Canada" },
      summary: {
        es: "Servicios backend y APIs REST consumidos por aplicaciones web, móviles y servicios internos.",
        en: "Backend services and REST APIs consumed by web, mobile and internal services."
      },
      points: [
        { es: "Lideré la migración de Java 8 a Java 21 LTS y de Spring Boot 2.7 a 3.5.x.", en: "Led the migration from Java 8 to Java 21 LTS and Spring Boot 2.7 to 3.5.x." },
        { es: "Implementé capacidades de IA con Model Context Protocol (MCP) expuestas de forma segura vía APIs.", en: "Implemented AI capabilities with Model Context Protocol (MCP), securely exposed via APIs." },
        { es: "Automaticé validaciones y pruebas: más de 50% menos errores manuales.", en: "Automated validation and testing: over 50% fewer manual errors." },
        { es: "Code reviews, Pull Requests y todo el SDLC, con Docker Compose, GitHub y Jira.", en: "Code reviews, pull requests and the full SDLC, with Docker Compose, GitHub and Jira." }
      ],
      tech: ["Java", "Spring Boot", "MySQL", "Maven", "MCP", "Docker"]
    },
    {
      from: "2019", to: "2020",
      period: { es: "jun 2019 – mar 2020", en: "Jun 2019 – Mar 2020" },
      role: { es: "IT Analyst (Co-op)", en: "IT Analyst (Co-op)" },
      company: "Antojitos Inc.",
      place: { es: "Barrie, Ontario, Canadá", en: "Barrie, Ontario, Canada" },
      summary: {
        es: "Programa Co-op de Georgian College: tecnología y presencia digital del negocio.",
        en: "Georgian College Co-op program: technology and the business's digital presence."
      },
      points: [
        { es: "Diseñé y desarrollé el sitio web corporativo.", en: "Designed and built the company website." },
        { es: "Desarrollé una app multiplataforma en Flutter para publicar menú y promociones.", en: "Built a cross-platform Flutter app to publish the menu and promotions." },
        { es: "Administré infraestructura y redes, y documenté procedimientos e incidentes.", en: "Ran infrastructure and networks, and documented procedures and incidents." }
      ],
      tech: ["Flutter", "Web", { es: "Redes", en: "Networking" }]
    },
    {
      from: "2018", to: "2019",
      period: { es: "feb 2018 – abr 2019", en: "Feb 2018 – Apr 2019" },
      role: { es: "Analista de automatización de pruebas", en: "QA Automation Analyst" },
      company: "Choucair Testing S.A.",
      place: { es: "Bogotá, Colombia", en: "Bogotá, Colombia" },
      summary: {
        es: "Automatización de pruebas para aplicaciones empresariales bajo enfoque BDD.",
        en: "Test automation for enterprise applications using BDD."
      },
      points: [
        { es: "Diseñé y mantuve pruebas con Java, Selenium WebDriver, Cucumber, Maven y Gherkin.", en: "Designed and maintained tests with Java, Selenium WebDriver, Cucumber, Maven and Gherkin." },
        { es: "Ejecuté pruebas funcionales, de regresión e integración en todo el SDLC.", en: "Ran functional, regression and integration tests across the SDLC." },
        { es: "Apoyé la definición de políticas y buenas prácticas de calidad.", en: "Helped define quality policies and best practices." }
      ],
      tech: ["Java", "Selenium", "Cucumber", "Gherkin"]
    },
    {
      from: "2016", to: "2017",
      period: { es: "nov 2016 – jul 2017", en: "Nov 2016 – Jul 2017" },
      role: { es: "Ingeniero de Software", en: "Software Engineer" },
      company: "Acies",
      place: { es: "Bogotá, Colombia", en: "Bogotá, Colombia" },
      summary: {
        es: "Soluciones Java para aplicaciones empresariales, backend y móviles.",
        en: "Java solutions for enterprise, backend and mobile applications."
      },
      points: [
        { es: "Desarrollé y mantuve funcionalidades sobre sistemas existentes.", en: "Built and maintained features on existing systems." },
        { es: "Analicé dependencias entre módulos para prevenir fallos encadenados.", en: "Analyzed module dependencies to prevent cascading failures." },
        { es: "Elaboré documentación técnica para mantenimiento y auditoría.", en: "Wrote technical documentation for maintenance and audits." }
      ],
      tech: ["Java", "Backend", { es: "Móvil", en: "Mobile" }]
    },
    {
      from: "2012", to: "2016",
      period: { es: "nov 2012 – nov 2016", en: "Nov 2012 – Nov 2016" },
      role: { es: "Ingeniero de Soporte de Servicios", en: "Service Support Engineer" },
      company: "Adecco / Agfa HealthCare",
      place: { es: "Bogotá, Colombia", en: "Bogotá, Colombia" },
      summary: {
        es: "Soporte especializado a plataformas de imágenes diagnósticas en el sector salud.",
        en: "Specialized support for diagnostic imaging platforms in healthcare."
      },
      points: [
        { es: "Soporte a plataformas RIS/PACS en instituciones de salud.", en: "Supported RIS/PACS platforms in healthcare institutions." },
        { es: "Administré Oracle, VMware ESX y almacenamiento EMC VNX/Centera.", en: "Administered Oracle, VMware ESX and EMC VNX/Centera storage." },
        { es: "Escalé incidentes críticos con equipos de ingeniería en Bélgica.", en: "Escalated critical incidents with engineering teams in Belgium." }
      ],
      tech: ["Oracle", "VMware", "RIS/PACS"]
    },
    {
      from: "2011", to: "",
      period: { es: "feb – jun 2011", en: "Feb – Jun 2011" },
      role: { es: "Ingeniero de Apoyo", en: "Support Engineer" },
      company: "Hospital Fontibón E.S.E.",
      place: { es: "Bogotá, Colombia", en: "Bogotá, Colombia" },
      summary: {
        es: "Aplicaciones internas para procesos administrativos y asistenciales; bases de datos y servidores.",
        en: "Internal applications for administrative and clinical processes; databases and servers."
      },
      points: [],
      tech: ["SQL", { es: "Soporte TI", en: "IT support" }]
    },
    {
      from: "2010", to: "",
      period: { es: "abr – dic 2010", en: "Apr – Dec 2010" },
      role: { es: "Analista Desarrollador de Software", en: "Software Developer Analyst" },
      company: "Centro Nacional de Consultoría",
      place: { es: "Bogotá, Colombia", en: "Bogotá, Colombia" },
      summary: {
        es: "Aplicaciones para investigación y encuestas en Java y Delphi; procesamiento de datos hacia SPSS.",
        en: "Research and survey applications in Java and Delphi; data processing into SPSS."
      },
      points: [],
      tech: ["Java", "Delphi", "SQL"]
    }
  ],

  skills: {
    core: ["Java", "Spring Boot", "APIs REST", "Microservicios", "MCP", "Desarrollo seguro"],
    coreEn: ["Java", "Spring Boot", "REST APIs", "Microservices", "MCP", "Secure development"],
    groups: [
      {
        name: { es: "Backend", en: "Backend" },
        items: ["Spring Boot", "Spring Security", "JPA / Hibernate", "Maven", { es: "Arquitecturas distribuidas", en: "Distributed architectures" }, { es: "Integración de sistemas", en: "Systems integration" }]
      },
      {
        name: { es: "Seguridad", en: "Security" },
        items: [{ es: "Seguridad de APIs", en: "API security" }, "JWT / RBAC", "OWASP", "OS Hardening", "ISO/IEC 27001", "NIST"]
      },
      {
        name: { es: "Datos", en: "Data" },
        items: ["SQL", "PostgreSQL", "MySQL", "Oracle", "SQL Server"]
      },
      {
        name: { es: "Calidad", en: "Quality" },
        items: ["JUnit", "Selenium WebDriver", "Cucumber / BDD", "Playwright", "Cypress"]
      },
      {
        name: { es: "DevOps y nube", en: "DevOps and cloud" },
        items: ["Docker", "Git / GitHub", "GitHub Actions", "CI/CD", "Linux", "AWS", "Azure"]
      },
      {
        name: { es: "Inteligencia artificial", en: "Artificial intelligence" },
        items: ["Model Context Protocol", { es: "Integraciones LLM", en: "LLM integrations" }, "Computer Vision", { es: "Automatización de procesos", en: "Process automation" }]
      },
      {
        name: { es: "Metodologías", en: "Methods" },
        items: ["SDLC", "Agile / Scrum", "Code Review", "Clean Architecture", "DDD", "ITIL"]
      },
      {
        name: { es: "Gestión y liderazgo", en: "Leadership" },
        items: [{ es: "Mentoría técnica", en: "Technical mentoring" }, { es: "Gestión de stakeholders", en: "Stakeholder management" }, { es: "Equipos multiculturales", en: "Multicultural teams" }, { es: "Documentación técnica", en: "Technical documentation" }]
      }
    ],
    languages: [
      { es: "Español, nativo", en: "Spanish, native" },
      { es: "Inglés, avanzado", en: "English, advanced" },
      { es: "Francés y alemán, básico", en: "French and German, basic" }
    ]
  },

  credentials: [
    {
      code: "C|CT",
      kind: { es: "Certificación", en: "Certification" },
      title: { es: "Certified Cybersecurity Technician", en: "Certified Cybersecurity Technician" },
      org: { es: "EC-Council, EE. UU.", en: "EC-Council, USA" },
      year: "2025"
    },
    {
      code: "DIP",
      kind: { es: "Diploma", en: "Diploma" },
      title: { es: "Computer Programmer (Co-op)", en: "Computer Programmer (Co-op)" },
      org: { es: "Georgian College, Barrie, Canadá", en: "Georgian College, Barrie, Canada" },
      year: "2021"
    },
    {
      code: "ESP",
      kind: { es: "Posgrado", en: "Postgraduate" },
      title: { es: "Especialización en Seguridad Informática", en: "Specialization in Information Security" },
      org: { es: "Universidad Piloto de Colombia, Bogotá", en: "Universidad Piloto de Colombia, Bogotá" },
      year: "2018"
    },
    {
      code: "ING",
      kind: { es: "Pregrado", en: "Bachelor's degree" },
      title: { es: "Ingeniería de Sistemas", en: "Systems Engineering" },
      org: { es: "Universidad Piloto de Colombia, Bogotá", en: "Universidad Piloto de Colombia, Bogotá" },
      year: "2010"
    }
  ]
};
