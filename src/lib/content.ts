export type Link = { label: string; href: string };

export const profile = {
  name: "Basit Bashir",
  role: "Computer Science Engineer · Data Science & AI Solutions",
  location: "Anantnag, Jammu & Kashmir, India",
  email: "basitr82@gmail.com",
  eyebrow: "Data science · Generative AI · RAG systems",
  headline: "Building practical AI systems that make information useful.",
  summary:
    "Computer Science graduate with hands-on experience building predictive data pipelines and intelligent document applications in Python. His work spans retrieval-augmented generation, language models, and the data foundations that make them dependable.",
  about: [
    "Basit works at the intersection of data science and applied AI: preparing structured data, developing predictive models, and turning large language models into useful conversational tools.",
    "His experience includes project work at NIELIT and digital marketing analytics at Google, bringing both technical rigor and an awareness of how people discover and use digital products.",
  ],
  focusAreas: ["Retrieval-Augmented Generation", "Machine Learning", "Python Data Pipelines", "Conversational AI"],
};

export const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/basit-bashir-maharaza/" },
];

export const nav: Link[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const experience = [
  {
    role: "Project Intern",
    company: "National Institute of Electronics & Information Technology (NIELIT)",
    period: "Sep 2023 — Dec 2023",
    location: "Srinagar, Jammu & Kashmir",
    description: "Contributed to production-focused data science problem statements alongside technical mentors.",
    highlights: [
      "Developed and evaluated exploratory data analysis pipelines and machine-learning algorithms using Python.",
      "Used NumPy, Pandas, and Scikit-Learn for structured-data cleansing, feature engineering, and predictive modeling.",
      "Collaborated with technical mentors on practical data science work.",
    ],
    tags: ["Python", "Pandas", "NumPy", "Scikit-Learn"],
  },
  {
    role: "Digital Marketing Intern",
    company: "Google",
    period: "Jul 2022 — Nov 2022",
    location: "Remote",
    description: "Supported SEO, campaign analysis, and web-performance tracking across digital marketing work.",
    highlights: [
      "Executed SEO strategies and organic-reach initiatives to improve web visibility.",
      "Monitored marketing media metrics and user interaction signals across multi-channel campaigns.",
      "Collaborated on cross-functional digital marketing strategy and web performance tracking.",
    ],
    tags: ["SEO", "Web Analytics", "Digital Marketing"],
  },
];

export const projects = [
  {
    title: "DocSense",
    label: "2024 · Intelligent document assistant",
    description: "An intelligent document-questioning and retrieval system that helps users query uploaded documents through a responsive Streamlit interface.",
    details: "Designed around retrieval-augmented generation, using large language models and LangChain to provide context-accurate answers.",
    tags: ["Python", "Streamlit", "LangChain", "RAG", "LLMs"],
  },
];

export const skills = [
  { label: "AI & machine learning", items: ["Retrieval-Augmented Generation (RAG)", "Large Language Models (LLMs)", "LangChain", "Natural Language Processing", "Scikit-Learn", "Predictive Modeling"] },
  { label: "Languages & data", items: ["Python", "C/C++", "NumPy", "Pandas", "Matplotlib", "Seaborn"] },
  { label: "Tools & prototyping", items: ["Streamlit", "Git", "Linux/Unix"] },
  { label: "Growth & analytics", items: ["Search Engine Optimization", "Digital Marketing Media", "Web Analytics"] },
];

export const education = [
  { type: "Education", title: "Bachelor of Technology in Computer Science", org: "Government College of Engineering and Technology (GCET), Safapora Ganderbal, Jammu & Kashmir", period: "2019 — 2024" },
  { type: "Certification", title: "Applied Machine Learning in Python", org: "University of Michigan · Online credential", period: "Jun 2024", note: "Applied machine-learning algorithms, Scikit-Learn model creation, NumPy/Pandas preprocessing, and model evaluation." },
  { type: "Certification", title: "The Fundamentals of Digital Marketing", org: "Google Digital Garage · Credential ID: U33 RXC S8T", period: "Nov 2022", note: "SEO best practices, digital marketing strategy, and web optimization." },
];
