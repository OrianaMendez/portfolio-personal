export type Language = "en" | "es";
export type SkillCategory = "all" | "frontend" | "backend" | "cloud_ai";
export type CertCategory = "all" | "ai" | "fullstack" | "uiux";

export interface SkillItem {
  name: string;
  icon: string;
  category: Exclude<SkillCategory, "all">;
}

export interface ExperiencePosition {
  role: string;
  employmentType: string;
  period: string;
  duration?: string;
  current?: boolean;
  bullets: string[];
  technologies: { name: string; icon: string }[];
}

export interface ExperienceItem {
  company: string;
  companyUrl?: string;
  totalDuration?: string;
  positions: ExperiencePosition[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: "Platzi" | "LinkedIn" | "Ingeniería Digital";
  date: string;
  credentialId?: string;
  credentialUrl?: string;
  skills?: string[];
  category: Exclude<CertCategory, "all">;
}

export interface ProjectItem {
  id: string;
  title: string;
  period: string;
  category: string;
  live: boolean;
  description: string;
  highlights: { label: string; value: string }[];
  technologies: { name: string; icon: string }[];
  liveUrl?: string;
  repoUrl?: string;
}

export interface FocusBox {
  title: string;
  items: {
    label: string;
    detail: string;
    href?: string;
  }[];
}

export interface PortfolioContent {
  meta: {
    name: string;
    role: string;
    email: string;
    linkedinUrl: string;
    githubUrl: string;
    platziUrl: string;
  };
  nav: {
    resume: string;
    skills: string;
    experience: string;
    projects: string;
    certifications: string;
    contact: string;
    cmdHint: string;
  };
  hero: {
    availableBadge: string;
    greetingPrefix: string;
    roleConnector: string;
    roleHighlight: string;
    title: string;
    introParagraphs: string[];
    primaryCta: string;
    secondaryCta: string;
  };
  skills: {
    title: string;
    description: string;
    categories: Record<SkillCategory, string>;
  };
  experience: {
    title: string;
    descriptionPrefix: string;
    downloadLabel: string;
    items: ExperienceItem[];
  };
  projects: {
    title: string;
    description: string;
    upcomingNote: string;
    liveBadge: string;
    visitDemo: string;
    viewCode: string;
    items: ProjectItem[];
  };
  certifications: {
    title: string;
    description: string;
    showCredential: string;
    credentialIdLabel: string;
    issuedLabel: string;
    categories: Record<CertCategory, string>;
    items: CertificationItem[];
  };
  focusAreas: {
    title: string;
    subtitle: string;
    boxes: FocusBox[];
  };
  contact: {
    title: string;
    subtitle: string;
    cardTitle: string;
    emailLabel: string;
    linkedinLabel: string;
    copyEmailBtn: string;
    copiedEmailBtn: string;
    sendEmailBtn: string;
    linkedinBtn: string;
  };
  footer: {
    builtWith: string;
    by: string;
    backToTop: string;
  };
  commandPalette: {
    placeholder: string;
    noResults: string;
    groups: {
      navigation: string;
      preferences: string;
      quickActions: string;
    };
    actions: {
      goToResume: string;
      goToSkills: string;
      goToExperience: string;
      goToProjects: string;
      goToCertifications: string;
      goToContact: string;
      toggleTheme: string;
      toggleLang: string;
      copyEmail: string;
      openLinkedin: string;
    };
  };
}

export const skillsList: SkillItem[] = [
  // Frontend y UI/UX
  { name: "Next.js", icon: "nextjs", category: "frontend" },
  { name: "React", icon: "react", category: "frontend" },
  { name: "JavaScript", icon: "javascript", category: "frontend" },
  { name: "TypeScript", icon: "typescript", category: "frontend" },
  { name: "Tailwind CSS", icon: "tailwind", category: "frontend" },
  { name: "Angular", icon: "angular", category: "frontend" },
  { name: "Vue.js", icon: "vue", category: "frontend" },
  { name: "HTML5", icon: "html", category: "frontend" },
  { name: "CSS3", icon: "css", category: "frontend" },
  { name: "Diseño UI / UX", icon: "uiux", category: "frontend" },
  // Backend, Datos y APIs
  { name: "Python", icon: "python", category: "backend" },
  { name: "FastAPI", icon: "fastapi", category: "backend" },
  { name: "Prisma", icon: "prisma", category: "backend" },
  { name: "PostgreSQL", icon: "postgres", category: "backend" },
  { name: "MySQL", icon: "mysql", category: "backend" },
  { name: "Redis", icon: "redis", category: "backend" },
  { name: "Celery", icon: "celery", category: "backend" },
  { name: "Django", icon: "django", category: "backend" },
  { name: "PHP", icon: "php", category: "backend" },
  { name: "Axios", icon: "axios", category: "backend" },
  { name: "WebSockets", icon: "websockets", category: "backend" },
  { name: "APIs RESTful", icon: "rest", category: "backend" },
  // Cloud, BI, DevOps e IA
  { name: "AWS (S3 / Cloud)", icon: "aws", category: "cloud_ai" },
  { name: "Amazon QuickSight", icon: "quicksight", category: "cloud_ai" },
  { name: "Docker", icon: "docker", category: "cloud_ai" },
  { name: "Jenkins (CI/CD)", icon: "jenkins", category: "cloud_ai" },
  { name: "Vercel", icon: "vercel", category: "cloud_ai" },
  { name: "OpenAI (Whisper / GPT)", icon: "ai", category: "cloud_ai" },
  { name: "n8n", icon: "n8n", category: "cloud_ai" },
  { name: "ElevenLabs API", icon: "elevenlabs", category: "cloud_ai" },
  { name: "Prompt Engineering", icon: "ai", category: "cloud_ai" },
  { name: "Git y GitHub", icon: "git", category: "cloud_ai" },
];

export const portfolioData: Record<Language, PortfolioContent> = {
  es: {
    meta: {
      name: "Oriana Méndez",
      role: "Front-End Developer y Analista de Datos",
      email: "orianamendez.work@gmail.com",
      linkedinUrl: "https://www.linkedin.com/in/oriana-mendez-ma/",
      githubUrl: "https://github.com",
      platziUrl: "https://platzi.com/p/or1ana/",
    },
    nav: {
      resume: "Resumen",
      skills: "Habilidades",
      experience: "Experiencia",
      projects: "Proyectos",
      certifications: "Certificaciones",
      contact: "Contacto",
      cmdHint: "Menú",
    },
    hero: {
      availableBadge: "Disponible para proyectos",
      greetingPrefix: "Hola, soy",
      roleConnector: "Desarrolladora",
      roleHighlight: "Front-End y Analista de Datos.",
      title: "Oriana Méndez",
      introParagraphs: [
        "Especialista en React y Next.js con experiencia construyendo aplicaciones web modernas, integraciones de Inteligencia Artificial en tiempo real y paneles de inteligencia de negocios.",
        "En esta página puedes conocer en detalle mi stack tecnológico, mi trayectoria profesional en empresas e iniciativas independientes, mis proyectos destacados y todas mis certificaciones verificadas.",
      ],
      primaryCta: "Contactar ahora",
      secondaryCta: "Ver Experiencia",
    },
    skills: {
      title: "Habilidades y Tecnologías",
      description:
        "Estos son los frameworks, librerías, bases de datos y servicios en la nube e Inteligencia Artificial con los que trabajo día a día. Estoy en constante aprendizaje sumando nuevas herramientas.",
      categories: {
        all: "Todas",
        frontend: "Frontend y Diseño UI/UX",
        backend: "Backend, Datos y APIs",
        cloud_ai: "Cloud, BI e Inteligencia Artificial",
      },
    },
    experience: {
      title: "Experiencia Laboral",
      descriptionPrefix:
        "A continuación encontrarás el detalle de mi experiencia laboral reciente. Además, si lo requieres, puedes",
      downloadLabel: "descargar mi CV en PDF",
      items: [
        {
          company: "Momentum Bienes Raíces C.A",
          companyUrl: "https://www.linkedin.com/company/7099844/",
          totalDuration: "3 años",
          positions: [
            {
              role: "Data Analyst",
              employmentType: "Jornada parcial",
              period: "Ene 2024 - Sept 2026",
              duration: "2 años 9 meses",
              current: true,
              bullets: [
                "Implementación de paneles de inteligencia de negocios (BI) utilizando Amazon QuickSight para la visualización interactiva de estadísticas, análisis de métricas y generación de proyecciones de datos.",
              ],
              technologies: [
                { name: "Amazon QuickSight", icon: "quicksight" },
                { name: "AWS", icon: "aws" },
              ],
            },
            {
              role: "Front-End Developer (React Specialist)",
              employmentType: "Jornada completa",
              period: "Oct 2023 - Ene 2026",
              duration: "2 años 4 meses",
              bullets: [
                "Desarrollo y mantenimiento de aplicaciones web utilizando React, Next.js y Tailwind CSS. Configurar y mantener una canalización de CI/CD en AWS.",
                "Diseño e implementación de APIs RESTful utilizando buenas prácticas y estándares de la industria.",
                "Experiencia con Axios para realizar peticiones HTTP y consumir APIs externas.",
                "Integración de datos con Prisma para garantizar la consistencia y precisión de los datos.",
                "Jenkins: Automatización de procesos de integración y despliegue continuo (CI/CD).",
              ],
              technologies: [
                { name: "Next.js", icon: "nextjs" },
                { name: "React", icon: "react" },
                { name: "Tailwind CSS", icon: "tailwind" },
                { name: "Prisma", icon: "prisma" },
                { name: "Axios", icon: "axios" },
                { name: "AWS", icon: "aws" },
                { name: "Jenkins", icon: "jenkins" },
                { name: "APIs RESTful", icon: "rest" },
              ],
            },
          ],
        },
        {
          company: "Proyecto Independiente (Plataforma de Transcripción y Resumen con IA)",
          totalDuration: "10 meses",
          positions: [
            {
              role: "Full-Stack / Front-End Developer",
              employmentType: "Profesional independiente",
              period: "Ene 2025 - Oct 2025",
              duration: "10 meses",
              bullets: [
                "Interfaz y Gestión de Archivos: Desarrollé la experiencia frontend para la carga de grabaciones de audio largas (hasta 2 horas), visualización del estado de procesamiento, descarga de transcripciones y envío directo de resultados por correo electrónico.",
                "Transcripción y Resúmenes con IA (OpenAI Whisper y GPT): Integré el flujo de transcripción automática con segmentación inteligente y eliminación de silencios mediante Whisper, junto con la generación de resúmenes ejecutivos usando modelos GPT.",
                "Procesamiento Asíncrono con Python y FastAPI: Conecté la aplicación con una API modular en FastAPI apoyada en colas de tareas en segundo plano con Celery y Redis para procesar audios extensos sin bloquear la experiencia de usuario.",
                "Almacenamiento Cloud Automatizado: Gestión y clasificación automática de grabaciones, transcripciones y documentos en buckets de AWS S3 y Google Drive.",
              ],
              technologies: [
                { name: "Python", icon: "python" },
                { name: "FastAPI", icon: "fastapi" },
                { name: "OpenAI (Whisper / GPT)", icon: "ai" },
                { name: "AWS S3", icon: "aws" },
                { name: "Celery", icon: "celery" },
                { name: "Redis", icon: "redis" },
                { name: "Docker", icon: "docker" },
                { name: "React / Next.js", icon: "nextjs" },
              ],
            },
          ],
        },
        {
          company: "Proyecto Independiente (Plataforma de IA para RRHH)",
          totalDuration: "3 meses",
          positions: [
            {
              role: "Front-End Developer",
              employmentType: "Profesional independiente",
              period: "Ago 2025 - Oct 2025",
              duration: "3 meses",
              bullets: [
                "Desarrollo y Arquitectura: Construí el frontend completo de la plataforma de IA para Recursos Humanos utilizando Next.js, gestionando su despliegue y optimización continua a través de Vercel.",
                "Comunicación en Tiempo Real: Implementé una arquitectura basada en WebSockets para recibir datos y eventos instantáneos desde flujos de automatización de n8n directamente en el frontend.",
                "Integración de Inteligencia Artificial: Configuré e integré la API de ElevenLabs para habilitar la síntesis y modulación de interacciones de voz dinámicas en la aplicación.",
                "Orquestación de Datos: Diseñé la conexión entre la lógica del backend, los flujos de n8n y la interfaz de usuario, garantizando una sincronización de datos estable y fluida.",
              ],
              technologies: [
                { name: "Next.js", icon: "nextjs" },
                { name: "WebSockets", icon: "websockets" },
                { name: "n8n", icon: "n8n" },
                { name: "ElevenLabs API", icon: "elevenlabs" },
                { name: "Vercel", icon: "vercel" },
              ],
            },
          ],
        },
        {
          company: "Gobernación del Táchira",
          totalDuration: "1 año 8 meses",
          positions: [
            {
              role: "Web Developer / Analista de Procesamiento de Datos",
              employmentType: "Jornada completa",
              period: "Mar 2022 - Oct 2023",
              duration: "1 año 8 meses",
              bullets: [
                "Administración y mantenimiento de bases de datos relacionales en PostgreSQL y MySQL.",
                "Control, soporte y mantenimiento de sistemas institucionales en PHP.",
                "Creación y desarrollo de sistemas web construidos sobre el framework Django.",
              ],
              technologies: [
                { name: "PostgreSQL", icon: "postgres" },
                { name: "MySQL", icon: "mysql" },
                { name: "Django", icon: "django" },
                { name: "PHP", icon: "php" },
              ],
            },
          ],
        },
      ],
    },
    projects: {
      title: "Proyectos Destacados",
      description:
        "Soluciones reales que he construido integrando interfaces modernas, flujos de automatización con Inteligencia Artificial y arquitecturas en la nube.",
      upcomingNote: "Próximamente agregaremos más proyectos al portafolio.",
      liveBadge: "Producción",
      visitDemo: "Ver Detalles",
      viewCode: "Repositorio",
      items: [
        {
          id: "ai-hr-platform",
          title: "Plataforma de IA y Voz en Tiempo Real para Recursos Humanos",
          period: "2025",
          category: "APLICACIÓN WEB CON IA Y TIEMPO REAL",
          live: true,
          description:
            "Aplicación web interactiva para procesos de Recursos Humanos impulsada por agentes de Inteligencia Artificial, síntesis de voz dinámica y sincronización de eventos en tiempo real.",
          highlights: [
            {
              label: "Frontend y Nube",
              value: "Arquitectura en Next.js desplegada y optimizada en Vercel",
            },
            {
              label: "Tiempo Real",
              value: "WebSockets bidireccionales conectados con flujos de n8n",
            },
            {
              label: "Síntesis de Voz",
              value: "Integración de ElevenLabs API para respuestas de voz naturales",
            },
          ],
          technologies: [
            { name: "Next.js", icon: "nextjs" },
            { name: "WebSockets", icon: "websockets" },
            { name: "n8n", icon: "n8n" },
            { name: "ElevenLabs API", icon: "elevenlabs" },
            { name: "Vercel", icon: "vercel" },
          ],
        },
        {
          id: "momentum-platform-bi",
          title: "Ecosistema Web Inmobiliario y Paneles de Inteligencia de Negocios",
          period: "2023 - 2026",
          category: "DESARROLLO FULL-STACK Y BI",
          live: true,
          description:
            "Desarrollo de aplicaciones web inmobiliarias de alto rendimiento, integración de datos con Prisma y APIs RESTful, y tableros ejecutivos de proyecciones en AWS.",
          highlights: [
            {
              label: "Arquitectura Web",
              value: "Aplicaciones en React, Next.js y Tailwind CSS con Prisma ORM",
            },
            {
              label: "Inteligencia de Negocios",
              value: "Paneles interactivos de métricas y proyecciones en Amazon QuickSight",
            },
            {
              label: "Automatización CI/CD",
              value: "Canalizaciones de integración y despliegue continuo con AWS y Jenkins",
            },
          ],
          technologies: [
            { name: "React", icon: "react" },
            { name: "Next.js", icon: "nextjs" },
            { name: "Tailwind CSS", icon: "tailwind" },
            { name: "Prisma", icon: "prisma" },
            { name: "Amazon QuickSight", icon: "quicksight" },
            { name: "AWS", icon: "aws" },
          ],
        },
      ],
    },
    certifications: {
      title: "Licencias y Certificaciones",
      description:
        "Historial completo de mis certificaciones y rutas de aprendizaje en desarrollo Full Stack, Frameworks Frontend, Inteligencia Artificial, Automatización y Diseño UI/UX.",
      showCredential: "Mostrar credencial",
      credentialIdLabel: "ID de la credencial:",
      issuedLabel: "Expedición:",
      categories: {
        all: "Todas (14)",
        ai: "IA y Automatización",
        fullstack: "Frontend y Full-Stack",
        uiux: "Diseño UI y UX",
      },
      items: [
        {
          id: "prompt-engineering",
          title: "Curso de Prompt Engineering",
          issuer: "Platzi",
          date: "jul. de 2025",
          credentialId: "8439caaa-093c-4afc-94de-b232eb465808",
          credentialUrl:
            "https://platzi.com/p/or1ana/curso/12001-prompt-engineering/diploma/detalle/",
          skills: ["Prompt Engineering", "Inteligencia Artificial"],
          category: "ai",
        },
        {
          id: "curso-n8n",
          title: "Curso de N8N",
          issuer: "Platzi",
          date: "jul. de 2025",
          credentialId: "2bce6956-2e6a-40f1-b5d6-1d67793284ec",
          credentialUrl:
            "https://platzi.com/p/or1ana/curso/12028-n8n/diploma/detalle/",
          skills: ["n8n", "Automatización de Flujos"],
          category: "ai",
        },
        {
          id: "fullstack-js",
          title: "Full Stack Developer con JavaScript",
          issuer: "Platzi",
          date: "sept. de 2024",
          credentialId: "72a589f4-6948-4e80-8294-c40a9edb8f20",
          credentialUrl:
            "https://platzi.com/p/or1ana/learning-path/100-javascript-full-stack/diploma/detalle/",
          skills: ["JavaScript", "Desarrollo Full-Stack"],
          category: "fullstack",
        },
        {
          id: "fullstack-nextjs",
          title: "Full Stack con Next.js",
          issuer: "Platzi",
          date: "sept. de 2024",
          credentialId: "ad007412-ea4e-4324-8f3b-b874116fd64f",
          credentialUrl:
            "https://platzi.com/p/or1ana/learning-path/7049-web-next/diploma/detalle/",
          skills: ["Next.js", "React", "SSR y API Routes"],
          category: "fullstack",
        },
        {
          id: "frontend-angular",
          title: "Frontend con Angular",
          issuer: "Platzi",
          date: "sept. de 2024",
          credentialId: "6447c54d-b7ea-46da-8f11-038a30d7f31e",
          credentialUrl:
            "https://platzi.com/p/or1ana/learning-path/7045-web-angular/diploma/detalle/",
          skills: ["Angular", "TypeScript", "SPA"],
          category: "fullstack",
        },
        {
          id: "frontend-vue",
          title: "Frontend con Vue.js",
          issuer: "Platzi",
          date: "sept. de 2024",
          credentialId: "40c2d014-f01b-43de-9631-e8fe6f92454b",
          credentialUrl:
            "https://platzi.com/p/or1ana/learning-path/7044-web-vue/diploma/detalle/",
          skills: ["Vue.js", "Componentes Reactivos"],
          category: "fullstack",
        },
        {
          id: "frontend-react",
          title: "Frontend con React.js",
          issuer: "Platzi",
          date: "jul. de 2024",
          credentialId: "ad53ff11-c134-4fd7-955f-c54e7e06263f",
          credentialUrl:
            "https://platzi.com/p/or1ana/ruta/7043-web-react/diploma/detalle/",
          skills: ["Aplicaciones web", "React.js", "Desarrollo front end"],
          category: "fullstack",
        },
        {
          id: "aprende-js",
          title: "Aprende JavaScript",
          issuer: "Platzi",
          date: "jul. de 2024",
          credentialId: "5b4885ae-ea3c-462e-be50-1e3cfa6effee",
          credentialUrl:
            "https://platzi.com/p/or1ana/ruta/7041-web-javascript/diploma/detalle/",
          skills: ["Ciencias de la computación", "Desarrollo front end", "JavaScript"],
          category: "fullstack",
        },
        {
          id: "html-css-cero",
          title: "HTML y CSS desde cero",
          issuer: "Platzi",
          date: "jul. de 2024",
          credentialId: "0de96d9c-fbd3-42a1-8053-98087b77bca1",
          credentialUrl:
            "https://platzi.com/p/or1ana/ruta/7040-web-frontend/diploma/detalle/",
          skills: ["HTML5", "CSS3", "Diseño Responsivo"],
          category: "fullstack",
        },
        {
          id: "ui-avanzado",
          title: "Diseño de interfaz (UI) avanzado",
          issuer: "LinkedIn",
          date: "jun. de 2023",
          credentialUrl:
            "https://www.linkedin.com/learning/certificates/ec2392982f9137240c236b8c2d4af8e96edd66026809dcb303dfa4b683343dfb/",
          skills: ["Aplicaciones web", "Desarrollo front end", "Diseño UI"],
          category: "uiux",
        },
        {
          id: "ui-esencial",
          title: "Diseño de interfaz (UI) esencial",
          issuer: "LinkedIn",
          date: "jun. de 2023",
          credentialUrl:
            "https://www.linkedin.com/learning/certificates/da7dee741780f398c5dbbf6d1843f500a5ac7d358e5af11b9b739f99e7706636/",
          skills: ["Aplicaciones web", "Desarrollo front end", "Sistemas de Diseño"],
          category: "uiux",
        },
        {
          id: "ux-avanzado",
          title: "Experiencia de usuario (UX) avanzado",
          issuer: "LinkedIn",
          date: "jun. de 2023",
          credentialUrl:
            "https://www.linkedin.com/learning/certificates/7d30fa8199b79a74ef9cd53092d2368369163b8645864dbf3868b39eb55f990e/",
          skills: ["Aplicaciones web", "Desarrollo front end", "Investigación UX"],
          category: "uiux",
        },
        {
          id: "ux-esencial",
          title: "Experiencia de usuario (UX) esencial",
          issuer: "LinkedIn",
          date: "jun. de 2023",
          credentialUrl:
            "https://www.linkedin.com/learning/certificates/e3d81b0f31ad9923212094933b123d52e321c7008932286abbf026bff1a9b0d4/",
          skills: ["Experiencia de Usuario (UX)", "Desarrollo front end"],
          category: "uiux",
        },
        {
          id: "ing-digital-js",
          title: "Certificación de Programación en JavaScript",
          issuer: "Ingeniería Digital",
          date: "2022",
          skills: ["Lógica de Programación", "JavaScript"],
          category: "fullstack",
        },
      ],
    },
    focusAreas: {
      title: "Especialidades y Áreas de Enfoque",
      subtitle: "El valor que aporto en cada equipo y proyecto de desarrollo.",
      boxes: [
        {
          title: "Ingeniería Front-End y Diseño UI/UX",
          items: [
            {
              label: "Ecosistema Principal",
              detail: "React.js, Next.js (App Router) y Tailwind CSS",
            },
            {
              label: "Frameworks Adicionales",
              detail: "Experiencia certificada en Angular y Vue.js",
            },
            {
              label: "Diseño de Producto",
              detail: "Interfaces centradas en UX/UI avanzado y accesibilidad",
            },
            {
              label: "Comunicación con APIs",
              detail: "APIs RESTful con Axios y eventos en vivo con WebSockets",
            },
          ],
        },
        {
          title: "Inteligencia Artificial, Datos y Cloud",
          items: [
            {
              label: "Automatización y Voz con IA",
              detail: "Orquestación con n8n, ElevenLabs API y Prompt Engineering",
            },
            {
              label: "Inteligencia de Negocios",
              detail: "Paneles interactivos y proyecciones en Amazon QuickSight",
            },
            {
              label: "Bases de Datos y ORM",
              detail: "Modelado y consultas en PostgreSQL, MySQL y Prisma",
            },
            {
              label: "Infraestructura CI/CD",
              detail: "Despliegues continuos en AWS, Jenkins y Vercel",
            },
          ],
        },
      ],
    },
    contact: {
      title: "Contacto",
      subtitle:
        "¿Tienes un proyecto en mente o buscas una Desarrolladora Front-End / Analista de Datos para tu equipo? Escríbeme directamente.",
      cardTitle: "Canales de Contacto",
      emailLabel: "Correo electrónico",
      linkedinLabel: "LinkedIn",
      copyEmailBtn: "Copiar correo",
      copiedEmailBtn: "¡Correo copiado!",
      sendEmailBtn: "Enviar correo",
      linkedinBtn: "Ver perfil en LinkedIn",
    },
    footer: {
      builtWith: "Construido con",
      by: "por Oriana Méndez",
      backToTop: "Volver arriba",
    },
    commandPalette: {
      placeholder: "Escribe un comando o busca una sección...",
      noResults: "No se encontraron resultados.",
      groups: {
        navigation: "Navegación",
        preferences: "Preferencias",
        quickActions: "Acciones Rápidas",
      },
      actions: {
        goToResume: "Ir a Mi Resumen / Inicio",
        goToSkills: "Ir a Habilidades y Tecnologías",
        goToExperience: "Ir a Experiencia Laboral",
        goToProjects: "Ir a Proyectos Destacados",
        goToCertifications: "Ir a Licencias y Certificaciones",
        goToContact: "Ir a Contacto",
        toggleTheme: "Cambiar tema (Claro / Oscuro)",
        toggleLang: "Cambiar idioma a Inglés (EN)",
        copyEmail: "Copiar correo (orianamendez.work@gmail.com)",
        openLinkedin: "Abrir perfil de LinkedIn",
      },
    },
  },
  en: {
    meta: {
      name: "Oriana Méndez",
      role: "Front-End Developer and Data Analyst",
      email: "orianamendez.work@gmail.com",
      linkedinUrl: "https://www.linkedin.com/in/oriana-mendez-ma/",
      githubUrl: "https://github.com",
      platziUrl: "https://platzi.com/p/or1ana/",
    },
    nav: {
      resume: "Resume",
      skills: "Skills",
      experience: "Experience",
      projects: "Projects",
      certifications: "Certifications",
      contact: "Contact",
      cmdHint: "Command",
    },
    hero: {
      availableBadge: "Available for projects",
      greetingPrefix: "Hi, I'm",
      roleConnector: "I'm a",
      roleHighlight: "Front-End Developer and Data Analyst.",
      title: "Oriana Méndez",
      introParagraphs: [
        "React and Next.js specialist experienced in building modern web applications, real-time AI workflow integrations, and interactive Business Intelligence dashboards.",
        "On this page, you can learn more about my knowledge stack, my previous work history across companies and independent initiatives, featured projects, and all my verified certifications.",
      ],
      primaryCta: "Get in touch",
      secondaryCta: "View Work History",
    },
    skills: {
      title: "Skills and Technologies",
      description:
        "Here are the frameworks, libraries, databases, and cloud/AI services I have experience with. I'm constantly gaining new skills and expanding my toolkit.",
      categories: {
        all: "All",
        frontend: "Frontend and UI/UX",
        backend: "Backend, Data and APIs",
        cloud_ai: "Cloud, BI and AI Automation",
      },
    },
    experience: {
      title: "Work History",
      descriptionPrefix:
        "Below you will find a summary of my past employment experience. Additionally, if you require, you can",
      downloadLabel: "download my resume (PDF)",
      items: [
        {
          company: "Momentum Bienes Raíces C.A",
          companyUrl: "https://www.linkedin.com/company/7099844/",
          totalDuration: "3 yrs",
          positions: [
            {
              role: "Data Analyst",
              employmentType: "Part-Time",
              period: "Jan 2024 - Sep 2026",
              duration: "2 yrs 9 mos",
              current: true,
              bullets: [
                "Implemented Business Intelligence (BI) dashboards using Amazon QuickSight for interactive statistical visualization, metric analysis, and data forecasting.",
              ],
              technologies: [
                { name: "Amazon QuickSight", icon: "quicksight" },
                { name: "AWS", icon: "aws" },
              ],
            },
            {
              role: "Front-End Developer (React Specialist)",
              employmentType: "Full-Time",
              period: "Oct 2023 - Jan 2026",
              duration: "2 yrs 4 mos",
              bullets: [
                "Developed and maintained web applications using React, Next.js, and Tailwind CSS. Configured and maintained CI/CD pipelines on AWS.",
                "Designed and implemented RESTful APIs following industry best practices and standards.",
                "Leveraged Axios for HTTP requests and external API consumption.",
                "Integrated data layers with Prisma ORM to ensure data consistency and accuracy.",
                "Jenkins: Automated continuous integration and deployment (CI/CD) workflows.",
              ],
              technologies: [
                { name: "Next.js", icon: "nextjs" },
                { name: "React", icon: "react" },
                { name: "Tailwind CSS", icon: "tailwind" },
                { name: "Prisma", icon: "prisma" },
                { name: "Axios", icon: "axios" },
                { name: "AWS", icon: "aws" },
                { name: "Jenkins", icon: "jenkins" },
                { name: "RESTful APIs", icon: "rest" },
              ],
            },
          ],
        },
        {
          company: "Independent Project (AI Audio Transcription and Summarization Platform)",
          totalDuration: "10 mos",
          positions: [
            {
              role: "Full-Stack / Front-End Developer",
              employmentType: "Freelance",
              period: "Jan 2025 - Oct 2025",
              duration: "10 mos",
              bullets: [
                "Frontend Interface and File Management: Built the frontend workflow for uploading long audio recordings (up to 2 hours), tracking real-time processing status, downloading transcripts, and sending results directly via email.",
                "AI Transcription and Summarization (OpenAI Whisper and GPT): Integrated automated voice-to-text transcription with silence removal and smart audio segmentation using Whisper, paired with GPT-powered executive summaries.",
                "Asynchronous Processing with Python and FastAPI: Connected the platform with a modular FastAPI backend using Celery and Redis background task queues to process heavy audio files smoothly.",
                "Automated Cloud Storage: Implemented automatic organization and storage of audio recordings, transcripts, and documents across AWS S3 buckets and Google Drive.",
              ],
              technologies: [
                { name: "Python", icon: "python" },
                { name: "FastAPI", icon: "fastapi" },
                { name: "OpenAI (Whisper / GPT)", icon: "ai" },
                { name: "AWS S3", icon: "aws" },
                { name: "Celery", icon: "celery" },
                { name: "Redis", icon: "redis" },
                { name: "Docker", icon: "docker" },
                { name: "React / Next.js", icon: "nextjs" },
              ],
            },
          ],
        },
        {
          company: "Independent Project (AI HR Platform)",
          totalDuration: "3 mos",
          positions: [
            {
              role: "Front-End Developer",
              employmentType: "Freelance",
              period: "Aug 2025 - Oct 2025",
              duration: "3 mos",
              bullets: [
                "Development and Architecture: Built the complete frontend for an AI-powered HR platform using Next.js, managing continuous deployment and optimization on Vercel.",
                "Real-Time Communication: Implemented a WebSockets architecture to receive instant data and events from n8n automation workflows directly in the frontend.",
                "Artificial Intelligence Integration: Configured and integrated the ElevenLabs API to enable dynamic voice synthesis and modulation interactions.",
                "Data Orchestration: Designed the bridge between backend logic, n8n workflows, and the UI, ensuring stable and seamless data synchronization.",
              ],
              technologies: [
                { name: "Next.js", icon: "nextjs" },
                { name: "WebSockets", icon: "websockets" },
                { name: "n8n", icon: "n8n" },
                { name: "ElevenLabs API", icon: "elevenlabs" },
                { name: "Vercel", icon: "vercel" },
              ],
            },
          ],
        },
        {
          company: "Gobernación del Táchira",
          totalDuration: "1 yr 8 mos",
          positions: [
            {
              role: "Web Developer / Data Processing Analyst",
              employmentType: "Full-Time",
              period: "Mar 2022 - Oct 2023",
              duration: "1 yr 8 mos",
              bullets: [
                "Administered and maintained PostgreSQL and MySQL relational databases.",
                "Managed and maintained institutional PHP systems.",
                "Created and developed web systems built on the Django framework.",
              ],
              technologies: [
                { name: "PostgreSQL", icon: "postgres" },
                { name: "MySQL", icon: "mysql" },
                { name: "Django", icon: "django" },
                { name: "PHP", icon: "php" },
              ],
            },
          ],
        },
      ],
    },
    projects: {
      title: "Featured Projects",
      description:
        "Real-world applications and systems I've built combining modern interfaces, AI automation workflows, and cloud architectures.",
      upcomingNote: "More projects will be added to this showcase soon.",
      liveBadge: "Production",
      visitDemo: "View Details",
      viewCode: "Source",
      items: [
        {
          id: "ai-hr-platform",
          title: "AI and Real-Time Voice HR Platform",
          period: "2025",
          category: "AI AND REAL-TIME WEB APP",
          live: true,
          description:
            "Interactive Human Resources web application powered by AI workflows, dynamic voice synthesis, and real-time event synchronization.",
          highlights: [
            {
              label: "Frontend and Cloud",
              value: "Next.js architecture deployed and optimized on Vercel",
            },
            {
              label: "Real-Time Events",
              value: "Bi-directional WebSockets connected to n8n workflows",
            },
            {
              label: "Voice Synthesis",
              value: "ElevenLabs API integration for natural voice interactions",
            },
          ],
          technologies: [
            { name: "Next.js", icon: "nextjs" },
            { name: "WebSockets", icon: "websockets" },
            { name: "n8n", icon: "n8n" },
            { name: "ElevenLabs API", icon: "elevenlabs" },
            { name: "Vercel", icon: "vercel" },
          ],
        },
        {
          id: "momentum-platform-bi",
          title: "Real Estate Web Ecosystem and BI Analytics",
          period: "2023 - 2026",
          category: "FULL-STACK AND BI ANALYTICS",
          live: true,
          description:
            "High-performance real estate web applications, Prisma/REST API data integrations, and executive forecasting dashboards on AWS.",
          highlights: [
            {
              label: "Web Architecture",
              value: "React, Next.js, and Tailwind CSS apps with Prisma ORM",
            },
            {
              label: "Business Intelligence",
              value: "Interactive metric and forecasting dashboards in Amazon QuickSight",
            },
            {
              label: "DevOps CI/CD",
              value: "Automated integration and deployment pipelines with AWS and Jenkins",
            },
          ],
          technologies: [
            { name: "React", icon: "react" },
            { name: "Next.js", icon: "nextjs" },
            { name: "Tailwind CSS", icon: "tailwind" },
            { name: "Prisma", icon: "prisma" },
            { name: "Amazon QuickSight", icon: "quicksight" },
            { name: "AWS", icon: "aws" },
          ],
        },
      ],
    },
    certifications: {
      title: "Licenses and Certifications",
      description:
        "Complete list of my verified certifications and learning paths in Full-Stack Development, Frontend Frameworks, AI and Automation, and UI/UX Design.",
      showCredential: "Show credential",
      credentialIdLabel: "Credential ID:",
      issuedLabel: "Issued:",
      categories: {
        all: "All (14)",
        ai: "AI and Automation",
        fullstack: "Frontend and Full-Stack",
        uiux: "UI and UX Design",
      },
      items: [
        {
          id: "prompt-engineering",
          title: "Prompt Engineering Course",
          issuer: "Platzi",
          date: "Jul 2025",
          credentialId: "8439caaa-093c-4afc-94de-b232eb465808",
          credentialUrl:
            "https://platzi.com/p/or1ana/curso/12001-prompt-engineering/diploma/detalle/",
          skills: ["Prompt Engineering", "Artificial Intelligence"],
          category: "ai",
        },
        {
          id: "curso-n8n",
          title: "n8n Automation Course",
          issuer: "Platzi",
          date: "Jul 2025",
          credentialId: "2bce6956-2e6a-40f1-b5d6-1d67793284ec",
          credentialUrl:
            "https://platzi.com/p/or1ana/curso/12028-n8n/diploma/detalle/",
          skills: ["n8n", "Workflow Automation"],
          category: "ai",
        },
        {
          id: "fullstack-js",
          title: "Full Stack Developer with JavaScript",
          issuer: "Platzi",
          date: "Sep 2024",
          credentialId: "72a589f4-6948-4e80-8294-c40a9edb8f20",
          credentialUrl:
            "https://platzi.com/p/or1ana/learning-path/100-javascript-full-stack/diploma/detalle/",
          skills: ["JavaScript", "Full-Stack Development"],
          category: "fullstack",
        },
        {
          id: "fullstack-nextjs",
          title: "Full Stack with Next.js",
          issuer: "Platzi",
          date: "Sep 2024",
          credentialId: "ad007412-ea4e-4324-8f3b-b874116fd64f",
          credentialUrl:
            "https://platzi.com/p/or1ana/learning-path/7049-web-next/diploma/detalle/",
          skills: ["Next.js", "React", "SSR and API Routes"],
          category: "fullstack",
        },
        {
          id: "frontend-angular",
          title: "Frontend with Angular",
          issuer: "Platzi",
          date: "Sep 2024",
          credentialId: "6447c54d-b7ea-46da-8f11-038a30d7f31e",
          credentialUrl:
            "https://platzi.com/p/or1ana/learning-path/7045-web-angular/diploma/detalle/",
          skills: ["Angular", "TypeScript", "SPA"],
          category: "fullstack",
        },
        {
          id: "frontend-vue",
          title: "Frontend with Vue.js",
          issuer: "Platzi",
          date: "Sep 2024",
          credentialId: "40c2d014-f01b-43de-9631-e8fe6f92454b",
          credentialUrl:
            "https://platzi.com/p/or1ana/learning-path/7044-web-vue/diploma/detalle/",
          skills: ["Vue.js", "Reactive Components"],
          category: "fullstack",
        },
        {
          id: "frontend-react",
          title: "Frontend with React.js",
          issuer: "Platzi",
          date: "Jul 2024",
          credentialId: "ad53ff11-c134-4fd7-955f-c54e7e06263f",
          credentialUrl:
            "https://platzi.com/p/or1ana/ruta/7043-web-react/diploma/detalle/",
          skills: ["Web Applications", "React.js", "Front-End Development"],
          category: "fullstack",
        },
        {
          id: "aprende-js",
          title: "Learn JavaScript (Aprende JavaScript)",
          issuer: "Platzi",
          date: "Jul 2024",
          credentialId: "5b4885ae-ea3c-462e-be50-1e3cfa6effee",
          credentialUrl:
            "https://platzi.com/p/or1ana/ruta/7041-web-javascript/diploma/detalle/",
          skills: ["Computer Science", "Front-End Development", "JavaScript"],
          category: "fullstack",
        },
        {
          id: "html-css-cero",
          title: "HTML and CSS from Scratch",
          issuer: "Platzi",
          date: "Jul 2024",
          credentialId: "0de96d9c-fbd3-42a1-8053-98087b77bca1",
          credentialUrl:
            "https://platzi.com/p/or1ana/ruta/7040-web-frontend/diploma/detalle/",
          skills: ["HTML5", "CSS3", "Responsive Design"],
          category: "fullstack",
        },
        {
          id: "ui-avanzado",
          title: "Advanced User Interface (UI) Design",
          issuer: "LinkedIn",
          date: "Jun 2023",
          credentialUrl:
            "https://www.linkedin.com/learning/certificates/ec2392982f9137240c236b8c2d4af8e96edd66026809dcb303dfa4b683343dfb/",
          skills: ["Web Applications", "Front-End Development", "UI Design"],
          category: "uiux",
        },
        {
          id: "ui-esencial",
          title: "Essential User Interface (UI) Design",
          issuer: "LinkedIn",
          date: "Jun 2023",
          credentialUrl:
            "https://www.linkedin.com/learning/certificates/da7dee741780f398c5dbbf6d1843f500a5ac7d358e5af11b9b739f99e7706636/",
          skills: ["Web Applications", "Front-End Development", "Design Systems"],
          category: "uiux",
        },
        {
          id: "ux-avanzado",
          title: "Advanced User Experience (UX)",
          issuer: "LinkedIn",
          date: "Jun 2023",
          credentialUrl:
            "https://www.linkedin.com/learning/certificates/7d30fa8199b79a74ef9cd53092d2368369163b8645864dbf3868b39eb55f990e/",
          skills: ["Web Applications", "Front-End Development", "UX Research"],
          category: "uiux",
        },
        {
          id: "ux-esencial",
          title: "Essential User Experience (UX)",
          issuer: "LinkedIn",
          date: "Jun 2023",
          credentialUrl:
            "https://www.linkedin.com/learning/certificates/e3d81b0f31ad9923212094933b123d52e321c7008932286abbf026bff1a9b0d4/",
          skills: ["User Experience (UX)", "Front-End Development"],
          category: "uiux",
        },
        {
          id: "ing-digital-js",
          title: "JavaScript Programming Certification",
          issuer: "Ingeniería Digital",
          date: "2022",
          skills: ["Programming Logic", "JavaScript"],
          category: "fullstack",
        },
      ],
    },
    focusAreas: {
      title: "Core Focus and Capabilities",
      subtitle: "How I bring value to engineering teams and digital products.",
      boxes: [
        {
          title: "Front-End Engineering and UI/UX",
          items: [
            {
              label: "Primary Stack",
              detail: "React.js, Next.js (App Router), and Tailwind CSS",
            },
            {
              label: "Additional Frameworks",
              detail: "Certified proficiency in Angular and Vue.js",
            },
            {
              label: "Product Design",
              detail: "Advanced UI/UX foundations and responsive interfaces",
            },
            {
              label: "API Layer",
              detail: "RESTful APIs with Axios and live events via WebSockets",
            },
          ],
        },
        {
          title: "AI, Data Analytics and Cloud DevOps",
          items: [
            {
              label: "AI and Voice Automation",
              detail: "n8n workflows, ElevenLabs API, and Prompt Engineering",
            },
            {
              label: "Business Intelligence",
              detail: "Interactive dashboards and forecasting in Amazon QuickSight",
            },
            {
              label: "Databases and ORM",
              detail: "Relational modeling in PostgreSQL, MySQL, and Prisma",
            },
            {
              label: "CI/CD Infrastructure",
              detail: "Automated pipelines with AWS, Jenkins, and Vercel",
            },
          ],
        },
      ],
    },
    contact: {
      title: "Contact Me",
      subtitle:
        "Have a project in mind or looking for a Front-End Developer / Data Analyst for your team? Let's connect.",
      cardTitle: "Contact Channels",
      emailLabel: "Email",
      linkedinLabel: "LinkedIn",
      copyEmailBtn: "Copy email",
      copiedEmailBtn: "Email copied!",
      sendEmailBtn: "Send email",
      linkedinBtn: "View LinkedIn Profile",
    },
    footer: {
      builtWith: "Built with",
      by: "by Oriana Méndez",
      backToTop: "Back to top",
    },
    commandPalette: {
      placeholder: "Type a command or jump to a section...",
      noResults: "No matching commands found.",
      groups: {
        navigation: "Navigation",
        preferences: "Preferences",
        quickActions: "Quick Actions",
      },
      actions: {
        goToResume: "Go to Resume / Overview",
        goToSkills: "Go to Skills and Technologies",
        goToExperience: "Go to Work History",
        goToProjects: "Go to Featured Projects",
        goToCertifications: "Go to Licenses and Certifications",
        goToContact: "Go to Contact Me",
        toggleTheme: "Toggle Light / Dark theme",
        toggleLang: "Switch language to Spanish (ES)",
        copyEmail: "Copy email (orianamendez.work@gmail.com)",
        openLinkedin: "Open LinkedIn profile",
      },
    },
  },
};
