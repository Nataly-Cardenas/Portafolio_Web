// Perfil y experiencia proporcionados por Nátaly.
export type NavItem = { id: string; label: string };

export type Skill = {
  /** Stable id — also the key into TechLogo's BRAND / CONCEPT maps. */
  id: string;
  name: string;
  symbol: string;
};

export type SkillGroup = { family: string; short: string; skills: Skill[] };

export type Experience = {
  id: string;
  org: string;
  client?: string;
  mode?: string;
  title: string;
  start: string; // "YYYY-MM"
  end: string | null; // null = present
  period: string;
  status?: string;
  bullets: string[];
};

export type Education = {
  id: string;
  school: string;
  place: string;
  degree: string;
  start: string;
  end: string;
  period: string;
  bullets: string[];
};

export type Project = {
  id: string;
  index: string;
  title: string;
  /** Company / context the work was done for, exactly as in the résumé. */
  kicker: string;
  description: string;
  features: string[];
  /** Skill ids (see SKILL_GROUPS) — rendered as chips with tiny logos. */
  tech: string[];
  github: string | null;
};

export type CommunityItem = {
  id: string;
  name: string;
  /** Short context line, e.g. what I did there. */
  kicker: string;
  status: "Live" | "In progress" | "Volunteer";
  description: string;
  url: string;
  domain: string;
  /** Full-page capture in /public/community (scripts/capture-community.cjs). */
  image: string;
};

export type Achievement = {
  id: string;
  /** Skill id for a real brand logo, or a CONCEPT icon id. */
  icon: string;
  value: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  label: string;
  caption: string;
  detail: string;
};
export const PROFILE = {
  "name": "Nátaly Andrea Cárdenas Izáquita",
  "firstName": "Nátaly",
  "initials": "NC",
  "role": "Ciencia de Datos",
  "roles": [
    "Data Science",
    "Data Visualization",
    "Machine Learning",
    "AI"
  ],
  "email": "natalycardenasizaquita@gmail.com",
  "phone": "",
  "phoneHref": "",
  "location": "Barranquilla, Colombia",
  "website": "https://www.instagram.com/natalycardenasi/",
  "websiteLabel": "Instagram",
  "github": "https://github.com/Nataly-Cardenas",
  "linkedin": "https://www.linkedin.com/in/n%C3%A1taly-c%C3%A1rdenas-iz%C3%A1quita",
  "instagram": "https://www.instagram.com/natalycardenasi/",
  "resume": "",
  "booking": "",
  "resumeSummary": "Me apasiona transformar datos en soluciones estratégicas para el mundo real. Como estudiante de Ciencia de Datos, combino una mentalidad analítica con un enfoque orientado a resultados: cada desafío es una oportunidad para encontrar soluciones eficientes. En Singularity coordino iniciativas académicas, promuevo la colaboración y el aprendizaje continuo en comunidad.",
  "aboutLine": "Estudiante de Ciencia de Datos en la Universidad del Norte. Curiosidad, iniciativa y compromiso con la excelencia.",
  "quote": "Transformar datos en soluciones para el mundo real.",
  "current": {
    "title": "Secretaria General",
    "org": "Singularity",
    "client": ""
  },
  "card": {
    "id": "NACI-2024",
    "dept": "Ciencia de Datos",
    "validTill": "2024 — 2028"
  }
};
export const NAV: NavItem[] = [
  {
    "id": "about",
    "label": "Sobre mí"
  },
  {
    "id": "skills",
    "label": "Habilidades"
  },
  {
    "id": "work",
    "label": "Iniciativas"
  },
  {
    "id": "experience",
    "label": "Trayectoria"
  },
  {
    "id": "contact",
    "label": "Contacto"
  }
];
export const SKILL_GROUPS: SkillGroup[] = [
  {
    "family": "Ciencia de datos",
    "short": "Data",
    "skills": [
      {
        "id": "eda",
        "name": "Análisis exploratorio",
        "symbol": "Ed"
      },
      {
        "id": "predictive",
        "name": "Modelado predictivo",
        "symbol": "Pm"
      },
      {
        "id": "visualization",
        "name": "Visualización de datos",
        "symbol": "Dv"
      }
    ]
  },
  {
    "family": "Inteligencia artificial",
    "short": "IA",
    "skills": [
      {
        "id": "machinelearning",
        "name": "Machine Learning",
        "symbol": "Ml"
      },
      {
        "id": "ai",
        "name": "Inteligencia artificial",
        "symbol": "Ai"
      }
    ]
  },
  {
    "family": "Liderazgo y comunidad",
    "short": "Liderazgo",
    "skills": [
      {
        "id": "leadership",
        "name": "Liderazgo",
        "symbol": "Ld"
      },
      {
        "id": "coordination",
        "name": "Coordinación de iniciativas",
        "symbol": "Co"
      },
      {
        "id": "logistics",
        "name": "Gestión logística",
        "symbol": "Lg"
      },
      {
        "id": "collaboration",
        "name": "Colaboración",
        "symbol": "Cl"
      },
      {
        "id": "learning",
        "name": "Aprendizaje continuo",
        "symbol": "Ac"
      }
    ]
  }
];
export const EXPERIENCE: Experience[] = [
  {
    "id": "secretaria",
    "org": "Singularity | Grupo de Ciencia de Datos e IA",
    "mode": "Barranquilla, Colombia",
    "title": "Secretaria General",
    "start": "2026-07",
    "end": null,
    "period": "Jul 2026 — Actualidad",
    "bullets": [
      "Coordinación de comunicaciones de la junta directiva, agendas y seguimiento de planes de acción.",
      "Organización de procesos internos y canales de comunicación para promover la participación y el intercambio de conocimiento."
    ]
  },
  {
    "id": "logistica",
    "org": "Singularity | Grupo de Ciencia de Datos e IA",
    "mode": "Barranquilla, Colombia",
    "title": "Directora de Logística",
    "start": "2025-07",
    "end": "2026-06",
    "period": "Jul 2025 — Jun 2026",
    "bullets": [
      "Coordinación logística de eventos universitarios de ciencia de datos, hackathons y charlas técnicas.",
      "Gestión de espacios, preparación técnica y distribución de materiales para las iniciativas del grupo."
    ]
  }
];
export const EDUCATION: Education[] = [
  {
    "id": "uninorte",
    "school": "Universidad del Norte",
    "place": "Barranquilla",
    "degree": "Ciencia de Datos",
    "start": "2024-01",
    "end": "2028-12",
    "period": "2024 — 2028 · En curso",
    "bullets": []
  },
  {
    "id": "prado",
    "school": "Nuevo Colegio del Prado",
    "place": "Colombia",
    "degree": "Educación secundaria",
    "start": "2010-01",
    "end": "2023-12",
    "period": "2010 — 2023",
    "bullets": []
  }
];
export const PROJECTS: Project[] = [
  {
    "id": "governance",
    "index": "01",
    "title": "Coordinación y gobernanza",
    "kicker": "Singularity · Secretaria General",
    "description": "Organización de las comunicaciones y seguimiento de las iniciativas de la junta directiva.",
    "features": [
      "Coordinación de agendas",
      "Seguimiento de planes de acción",
      "Comunicación de la junta directiva"
    ],
    "tech": [
      "leadership",
      "coordination"
    ],
    "github": null
  },
  {
    "id": "events",
    "index": "02",
    "title": "Eventos y logística",
    "kicker": "Singularity · Directora de Logística",
    "description": "Coordinación de recursos y espacios para eventos académicos de ciencia de datos.",
    "features": [
      "Eventos universitarios",
      "Hackathons y charlas técnicas",
      "Preparación técnica y gestión de materiales"
    ],
    "tech": [
      "logistics",
      "coordination"
    ],
    "github": null
  },
  {
    "id": "community",
    "index": "03",
    "title": "Aprender en comunidad",
    "kicker": "Singularity · Ciencia de Datos e IA",
    "description": "Participación en una comunidad que comparte conocimiento y conecta personas alrededor de los datos.",
    "features": [
      "Intercambio de conocimiento",
      "Participación de los miembros",
      "Colaboración y aprendizaje continuo"
    ],
    "tech": [
      "collaboration",
      "learning"
    ],
    "github": null
  }
];
export const COMMUNITY: CommunityItem[] = [];
export const CERTIFICATIONS: { title: string; issuer: string; href?: string }[] = [];
export const ACHIEVEMENTS: Achievement[] = [];
export const ALL_SKILLS = SKILL_GROUPS.flatMap((g) =>
  g.skills.map((s) => ({ ...s, family: g.family, short: g.short })),
);

export function skillById(id: string) {
  return ALL_SKILLS.find((s) => s.id === id);
}

export function projectsUsing(skillId: string) {
  return PROJECTS.filter((p) => p.tech.includes(skillId));
}

/** Section index used by the "03 — Selected work" tags, in page order (empty sections are skipped). */
export const SECTION_INDEX: Record<string, string> = Object.fromEntries(
  [
    "about",
    "skills",
    ...(PROJECTS.length ? ["work"] : []),
    ...(COMMUNITY.length ? ["community"] : []),
    ...(CERTIFICATIONS.length ? ["certifications"] : []),
    "experience",
    ...(ACHIEVEMENTS.length ? ["achievements"] : []),
    "contact",
  ].map((id, i) => [id, String(i + 1).padStart(2, "0")]),
);
