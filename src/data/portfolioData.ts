export interface ExperienceItem {
  id: string;
  role: { en: string; de: string };
  company: string;
  location: string;
  period: string;
  magicalTitle: { en: string; de: string };
  department: string;
  bulletPoints: { en: string[]; de: string[] };
  skills: string[];
  metrics: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  magicalArtifact: string;
  tech: string[];
  description: { en: string; de: string };
  highlights: { en: string[]; de: string[] };
  category: 'AI / NLP' | 'Full-Stack & APIs';
  starsOrCitations?: string;
}

export interface AwardItem {
  id: string;
  title: { en: string; de: string };
  issuer: { en: string; de: string };
  year: string;
  magicalTrophy: string;
  badge: string;
  description: { en: string; de: string };
}

export const RESUME_DATA = {
  personal: {
    name: "Sai Surya Alla",
    location: "Amberg, Deutschland",
    phone: "+49 175 7408006",
    email: "allasaisurya5292@gmail.com",
    linkedin: "https://linkedin.com/in/saisurya2818",
    linkedinHandle: "saisurya2818",
    nationality: { en: "Indian", de: "Indisch" },
    visa: { en: "Student Visa (Germany)", de: "Aufenthaltstitel: Studienvisum (Deutschland)" },
    targetRole: {
      en: "Working Student IT Project Management | E-Commerce & Digital Transformation",
      de: "Werkstudent IT-Projektmanagement im Bereich E-Commerce und digitale Transformation"
    },
    bio: {
      en: "Master's student in Artificial Intelligence with hands-on expertise in IT Project Management, Agile Software Engineering, and data-driven architectures. Skilled in steering cross-functional teams, coordinating project lifecycles, and engineering production ML & Full-Stack solutions. Currently pursuing M.Sc. in Germany, passionate about transforming e-commerce and enterprise digital systems.",
      de: "Master-Student im Bereich Künstliche Intelligenz mit fundierter Erfahrung in IT-Projektmanagement, agiler Softwareentwicklung und datengetriebenen Lösungen. Koordination funktionsübergreifender Teams, Steuerung von Projektlebenszyklen sowie Umsetzung von ML- und Full-Stack-Anwendungen. Angestrebte Position: Werkstudent IT-Projektmanagement im Bereich E-Commerce und digitale Transformation."
    },
    quote: {
      en: "“Words are, in my not-so-humble opinion, our most inexhaustible source of magic.” — Albus Dumbledore",
      de: "„Worte sind, meiner nicht so bescheidenen Meinung nach, unsere unerschöpflichste Quelle der Magie.“ — Albus Dumbledore"
    }
  },

  education: [
    {
      degree: {
        en: "M.Sc. Artificial Intelligence for Industrial Applications",
        de: "M.Sc. Künstliche Intelligenz für industrielle Anwendungen"
      },
      institution: "Ostbayerische Technische Hochschule (OTH) Amberg-Weiden",
      location: "Amberg, Deutschland",
      period: "10/2025 – present",
      periodDe: "10/2025 – heute",
      houseNote: {
        en: "Advanced Industrial AI, Neural Architectures & Agile Lifecycle Systems",
        de: "Vertiefung Industrielle KI, neuronale Architekturen & agile Lebenszyklen"
      },
      status: "In Progress"
    },
    {
      degree: {
        en: "Bachelor of Technology (B.Tech.) – Computer Science",
        de: "Bachelor of Technology (B.Tech.) – Informatik"
      },
      institution: "Koneru Lakshmaiah Education Foundation (KL University)",
      location: "India",
      period: "08/2021 – 05/2025",
      periodDe: "08/2021 – 05/2025",
      grade: "9.21 / 10.0 (German equivalent: ~1.3 'Sehr Gut')",
      honor: "Top 5% of the graduating cohort",
      houseNote: {
        en: "Graduated with 9.21/10.0 CGPA (Top 5% Class Rank) • Comprehensive Computer Science & Software Engineering Foundation",
        de: "Abschlussnote 9,21/10,0 (Top 5% des Jahrgangs) • Fundierte Informatik- und Softwareentwicklungsausbildung"
      },
      status: "Completed with Distinction"
    }
  ],

  experiences: [
    {
      id: "nielit",
      role: {
        en: "Data Science Intern – IT Project Coordination & ML Development",
        de: "Data Science Intern – IT-Projektkoordination & ML-Entwicklung"
      },
      company: "National Institute of Electronics and Information Technology (NIELIT)",
      location: "Calicut, Indien",
      period: "02/2025 – 08/2025",
      magicalTitle: {
        en: "Chief Alchemist of Healthcare Intelligence & Cross-Functional Guild Master",
        de: "Leitender Alchemist für Healthcare Analytics & Gilden-Koordinator"
      },
      department: "Full-Stack Healthcare Analytics Division",
      bulletPoints: {
        en: [
          "Led planning and execution of a Full-Stack Healthcare Analytics platform; coordinated a 6-member cross-functional team across development, QA, and cloud deployment.",
          "Elicited and documented requirements from 4+ key clinical stakeholders, cutting scope creep requests by 30% through disciplined requirements engineering.",
          "Engineered high-throughput ML pipelines with Python and Flask, boosting prediction processing rate by 25% via optimized vector preprocessing workflows.",
          "Maintained executive sprint dashboards, risk registers, and technical architectural documentation for senior management."
        ],
        de: [
          "Leitete Planung und Durchführung einer Full-Stack-Healthcare-Analytics-Plattform; koordinierte 6-köpfiges, funktionsübergreifendes Team über Entwicklung, Testing und Deployment.",
          "Erhob Anforderungen von 4+ Stakeholdern; reduzierte Scope-Änderungsanfragen um 30 % durch strukturiertes Anforderungsmanagement.",
          "Entwickelte ML-Pipelines mit Python und Flask; steigerte Vorhersage-Durchsatz um 25 % durch optimierte Vorverarbeitungs-Workflows.",
          "Pflegte Sprint-Dashboards und technische Dokumentation für das Senior-Management."
        ]
      },
      skills: ["Python", "Flask", "ML Pipelines", "Agile Leadership", "Cross-Functional Coordination", "Stakeholder Management"],
      metrics: ["-30% Scope Creep", "+25% Throughput", "6-Member Team Led", "4+ Stakeholders"]
    },
    {
      id: "coursevita",
      role: {
        en: "Project Management Intern (Praktikant Projektmanagement)",
        de: "Praktikant Projektmanagement"
      },
      company: "CourseVita",
      location: "Hyderabad, Indien",
      period: "10/2024 – 01/2025",
      magicalTitle: {
        en: "Time-Turner Agile Steward & Sprint Spellbinder",
        de: "Agiler Zeremonienmeister & Sprint-Koordinator"
      },
      department: "Agile Web Delivery Squad",
      bulletPoints: {
        en: [
          "Directed delivery of 3 major web platforms following Agile/Scrum ceremonies; facilitated sprint plannings, daily stand-ups, backlog grooming, and retrospectives.",
          "Synchronized API integrations and end-to-end UI testing, shaving 15% off sprint cycle duration through lean workflow bottlenecks elimination.",
          "Tracked tasks, dependencies, and velocity in JIRA; secured 100% on-time milestone delivery across every active sprint cycle."
        ],
        de: [
          "Steuerte Lieferung von 3 Webprojekten nach Agile/Scrum; moderierte Sprint-Planungen, Stand-ups und Retrospektiven.",
          "Koordinierte API-Integration und UI-Testing; verkürzte Sprint-Zykluszeit um 15 % durch Prozessoptimierung.",
          "Verfolgte Aufgaben und Risiken in JIRA; 100 % pünktliche Meilensteinlieferung bei allen Sprints."
        ]
      },
      skills: ["Agile / Scrum", "JIRA", "Sprint Planning", "UI Testing", "API Integration", "Risk Mitigation"],
      metrics: ["3 Web Projects", "-15% Cycle Time", "100% On-Time Sprints", "Zero Milestone Delays"]
    }
  ] as ExperienceItem[],

  projects: [
    {
      id: "whatsapp-voice",
      title: "WhatsApp Voice-to-Text Conversion Application",
      magicalArtifact: "The Howler Transcriber & Whispering Mirror",
      tech: ["Python", "Baileys Library", "NLP", "REST API", "Real-time Webhooks"],
      description: {
        en: "An automated real-time voice message recognition and transcription engine tightly integrated with WhatsApp, allowing frictionless audio-to-text processing for busy users.",
        de: "Echtzeit-Spracherkennungssystem mit WhatsApp-Integration für automatisierte Audio-zu-Text-Transkription."
      },
      highlights: {
        en: [
          "Real-time speech recognition pipeline integrated seamlessly via Baileys WhatsApp client library.",
          "Managed a product backlog of 15+ complex user stories and delivered working MVP within a rapid 4-week sprint cycle.",
          "Implemented resilient REST API handlers to process audio payloads and stream back instant natural language transcriptions."
        ],
        de: [
          "Echtzeit-Spracherkennungssystem mit WhatsApp-Integration; verwaltete Backlog von 15+ Aufgaben.",
          "Lieferte voll funktionsfähiges MVP in einem komprimierten 4-wöchigen Sprint-Zyklus ab.",
          "Robuste REST-API-Architektur zur Audio-Verarbeitung und sofortigen Rückmeldung."
        ]
      },
      category: "Full-Stack & APIs"
    },
    {
      id: "bert-fake-news",
      title: "Fake News Detection mittels BERT und NLP",
      magicalArtifact: "The Veritaserum Truth-Teller Engine",
      tech: ["Python", "HuggingFace Transformers", "TensorFlow", "Pandas", "BERT", "NLP"],
      description: {
        en: "High-precision linguistic classification model leveraging Bidirectional Encoder Representations from Transformers (BERT) to uncover deceptive digital news patterns across massive text corpora.",
        de: "Hochpräzises BERT-basiertes NLP-Klassifikationsmodell zur Erkennung von Falschmeldungen auf 40.000 Datenpunkten."
      },
      highlights: {
        en: [
          "Trained and fine-tuned BERT transformer architecture achieving exceptional 94% classification accuracy on a 40,000-sample benchmark dataset.",
          "Authored peer-reviewed paper presented at the IRF International Conference 2024.",
          "Formally cited in 2 subsequent scientific publications within machine learning and NLP domains."
        ],
        de: [
          "BERT-Modell mit 94 % Genauigkeit auf 40.000-Sample-Datensatz trainiert und evaluiert.",
          "Veröffentlicht auf der IRF International Conference 2024 (Peer-Reviewed).",
          "In 2 Folgepublikationen als Referenzmodell zitiert."
        ]
      },
      starsOrCitations: "94% Accuracy • Cited in 2 Publications",
      category: "AI / NLP"
    }
  ] as ProjectItem[],

  skills: {
    projectManagement: {
      categoryName: { en: "Project Management & Agile Guild", de: "IT-Projektmanagement & Agilität" },
      magicalSpell: "Temporis Ordinare (Order of the Time-Turners)",
      items: [
        "Agile", "Scrum", "Kanban", "Sprint-Planung", "Anforderungs- & Risikomanagement",
        "Stakeholder-Kommunikation", "JIRA", "Confluence", "MS Project"
      ]
    },
    programming: {
      categoryName: { en: "Incantations & Programming Languages", de: "Programmiersprachen" },
      magicalSpell: "Scriptura Magica",
      items: ["Python", "Java", "JavaScript", "SQL"]
    },
    webApis: {
      categoryName: { en: "Web Architecture & API Conduit", de: "Web & Schnittstellen (APIs)" },
      magicalSpell: "Portus Digitalis",
      items: ["MERN-Stack", "REST APIs", "Flask", "Swagger"]
    },
    dataAi: {
      categoryName: { en: "Data Sorcery & Artificial Intelligence", de: "Daten & Künstliche Intelligenz" },
      magicalSpell: "Cogito Machina",
      items: ["Machine Learning", "NLP", "TensorFlow", "HuggingFace Transformers", "Pandas", "NumPy"]
    },
    devOpsCloud: {
      categoryName: { en: "Cloud Citadel & Deployment Alchemy", de: "DevOps & Cloud-Infrastruktur" },
      magicalSpell: "Nubes Fortificata",
      items: ["Git", "GitHub", "Docker", "AWS (Cloud Practitioner)", "CI/CD"]
    },
    languages: {
      categoryName: { en: "Spoken Tongues & Polyglot Prowess", de: "Sprachkenntnisse" },
      magicalSpell: "Linguarum Veritas",
      items: [
        { lang: "English", level: "C1 (Fluent)", deLevel: "C1 (fließend)" },
        { lang: "German (Deutsch)", level: "A2 (Actively Learning in Germany)", deLevel: "A2 (aktiv lernend)" },
        { lang: "Telugu", level: "Native Speaker", deLevel: "Muttersprache" }
      ]
    }
  },

  awards: [
    {
      id: "sih-2024",
      title: {
        en: "Grand Winner – Smart India Hackathon 2024",
        de: "Gewinner – Smart India Hackathon 2024"
      },
      issuer: {
        en: "Ministry of Education, Government of India",
        de: "Bundesministerium für Bildung, Regierung Indien"
      },
      year: "2024",
      magicalTrophy: "The Triwizard Cup of Public Innovation",
      badge: "Top 1 / 10,000+ Nationwide Teams",
      description: {
        en: "Selected as the champion team out of more than 10,000+ competitive engineering teams across India. Architected, coded, and pitched an AI-powered solution tailored for public sector impact.",
        de: "Ausgewählt aus 10.000+ Teams; KI-Lösung für den öffentlichen Sektor entwickelt, präsentiert und als Gesamtsieger prämiert."
      }
    },
    {
      id: "police-hackathon-2025",
      title: {
        en: "Winner – AI for Andhra Police Hackathon 2025",
        de: "Gewinner – AI for Andhra Police Hackathon 2025"
      },
      issuer: {
        en: "State Police Department & Technology Board",
        de: "Polizeibehörde & Technologiedirektion Andhra Pradesh"
      },
      year: "2025",
      magicalTrophy: "Order of the Auror Shield",
      badge: "AI Law Enforcement Honor",
      description: {
        en: "Engineered a specialized artificial intelligence solution engineered for law enforcement operations, digital investigations, and crime pattern detection; recognized with top state honor.",
        de: "KI-basierte Lösung für den Strafverfolgungsbereich, digitale Forensik und Mustererkennung entwickelt und ausgezeichnet."
      }
    },
    {
      id: "irf-paper-2024",
      title: {
        en: "Peer-Reviewed Publication: Fake News Detection using BERT-based NLP",
        de: "Veröffentlichung: „Fake News Detection using BERT-based NLP Models“"
      },
      issuer: {
        en: "IRF International Conference 2024",
        de: "IRF International Conference 2024 (Peer-Reviewed)"
      },
      year: "2024",
      magicalTrophy: "Tome of Ravenclaw Scholarly Wisdom",
      badge: "Cited in 2 Follow-Up Papers",
      description: {
        en: "Formally published research detailing BERT transformer optimization on 40,000 text samples; recognized with 2 scholarly citations in successive publications.",
        de: "Wissenschaftliche Veröffentlichung über BERT-Transformer-Optimierung auf 40.000 Textbeispielen; in zwei Folgepublikationen zitiert."
      }
    }
  ] as AwardItem[],

  spells: [
    {
      name: "Lumos",
      incantation: "Lumos!",
      type: "Illumination Charm",
      effect: "Ignites your wand tip, bathing the parchment in magical golden light",
      sound: "lumos"
    },
    {
      name: "Alohomora",
      incantation: "Alohomora!",
      type: "Unlocking Charm",
      effect: "Unlocks the Marauder's Vault & hidden project management philosophies",
      sound: "alohomora"
    },
    {
      name: "Expecto Patronum",
      incantation: "Expecto Patronum!",
      type: "Patronus Charm",
      effect: "Summons a glowing silver patronus stag to shield against scope creep and project delays",
      sound: "patronum"
    },
    {
      name: "Wingardium Leviosa",
      incantation: "Wingardium Leviosa!",
      type: "Levitation Charm",
      effect: "Swish and flick! Makes milestone cards and achievements float weightlessly",
      sound: "leviosa"
    },
    {
      name: "Accio",
      incantation: "Accio Resume!",
      type: "Summoning Charm",
      effect: "Summons Sai Surya's formatted official resume scroll directly to your screen",
      sound: "accio"
    },
    {
      name: "Expelliarmus",
      incantation: "Expelliarmus!",
      type: "Disarming Charm",
      effect: "Disarms bottlenecks, misalignments, and software bugs with a surge of red sparks",
      sound: "expelliarmus"
    }
  ]
};

export type HouseType = 'ravenclaw' | 'gryffindor' | 'slytherin' | 'hufflepuff';

export interface HouseTheme {
  id: HouseType;
  name: string;
  motto: { en: string; de: string };
  primary: string; // Accent color
  secondary: string;
  bgDark: string;
  borderGold: string;
  crestIcon: string; // Lucide or custom glyph
  badgeText: string;
  description: { en: string; de: string };
}

export const HOUSES: Record<HouseType, HouseTheme> = {
  ravenclaw: {
    id: "ravenclaw",
    name: "Ravenclaw",
    motto: {
      en: "Wit beyond measure is man's greatest treasure",
      de: "Weisheit ohne Maß ist des Menschen größter Schatz"
    },
    primary: "#0e1a40",
    secondary: "#946b2d",
    bgDark: "#070b19",
    borderGold: "#cda851",
    crestIcon: "🦅",
    badgeText: "House of Intellect & AI Sorcery",
    description: {
      en: "The house of sharp intellect, BERT neural research, 9.21 CGPA, and analytical precision.",
      de: "Das Haus des Intellekts, BERT-Forschung, 9,21 CGPA und datengetriebener Präzision."
    }
  },
  gryffindor: {
    id: "gryffindor",
    name: "Gryffindor",
    motto: {
      en: "Where dwell the brave at heart, daring, nerve, and chivalry",
      de: "Wo die Tapferen im Herzen wohnen – Mut, Entschlossenheit und Kühnheit"
    },
    primary: "#740001",
    secondary: "#d3a625",
    bgDark: "#180608",
    borderGold: "#eeba30",
    crestIcon: "🦁",
    badgeText: "House of Hackathon Champions",
    description: {
      en: "The house of bold leadership, winning Smart India Hackathon among 10,000+ teams.",
      de: "Das Haus des Mutes, Sieger des Smart India Hackathons unter 10.000+ Teams."
    }
  },
  slytherin: {
    id: "slytherin",
    name: "Slytherin",
    motto: {
      en: "Greatness awaits those with ambition and resourcefulness",
      de: "Größe erwartet jene mit Ehrgeiz, Scharfsinn und Tatkraft"
    },
    primary: "#1a472a",
    secondary: "#aaaaaa",
    bgDark: "#08140c",
    borderGold: "#8cb393",
    crestIcon: "🐍",
    badgeText: "House of Ambition & Strategic Transformation",
    description: {
      en: "The house of strategic vision, driving enterprise e-commerce and digital transformation.",
      de: "Das Haus der strategischen Vision für E-Commerce & digitale Transformation."
    }
  },
  hufflepuff: {
    id: "hufflepuff",
    name: "Hufflepuff",
    motto: {
      en: "Where they are just and loyal, patient, true, and unafraid of toil",
      de: "Wo sie gerecht und treu sind, geduldig, wahrhaftig und unermüdlich fleißig"
    },
    primary: "#ecb939",
    secondary: "#372e29",
    bgDark: "#15120a",
    borderGold: "#f0c75e",
    crestIcon: "🦡",
    badgeText: "House of 100% On-Time Sprints & Loyalty",
    description: {
      en: "The house of reliable delivery, achieving 100% on-time milestone completion across all sprints.",
      de: "Das Haus der Verlässlichkeit mit 100 % pünktlicher Meilensteinlieferung."
    }
  }
};
