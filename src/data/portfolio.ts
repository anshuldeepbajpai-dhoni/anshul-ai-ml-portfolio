export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Anshul Deep Bajpai',
  displayName: 'Anshul Deep Bajpai',
  firstName: 'ANSHUL',
  seriesTag: 'THE SERIES',
  originalLabel: 'ANSHUL ORIGINAL',
  role: 'AI & Machine Learning Engineer',
  tagline: ['AI / ML', 'Data Science', 'Generative AI', 'Data Analytics'],
  intro:
    'A B.Tech Artificial Intelligence & Machine Learning student at Dr. A.P.J. Abdul Kalam Technical University, with hands-on internship experience across machine learning, generative AI, and data analytics. I build practical AI applications, data-driven tools, and full-stack solutions using Python, FastAPI, SQL, React, and modern AI frameworks.',
  location: 'Unnao, Uttar Pradesh, India',
  email: 'anshuldeepbajpai@gmail.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/anshul-deep-bajpai-441b1b37b/',
    github: 'https://github.com/anshuldeepbajpai-dhoni',
    portfolio: 'https://anshul-deep-bajpai-portfolio.vercel.app/',
  },
  resumePdf: '/assets/Anshul_Deep_Bajpai_Resume.pdf',
  portrait: {
    src: '/assets/portrait-720.webp',
    srcSet: '/assets/portrait-420.webp 420w, /assets/portrait-720.webp 720w, /assets/portrait-1100.webp 1100w',
    alt: 'Portrait of Anshul Deep Bajpai',
  },
  interests: ['Agentic AI', 'RAG and LLM applications', 'Data Science', 'Computer Vision', 'Financial Analytics'],
};

export const education = [
  {
    school: 'Dr. A.P.J. Abdul Kalam Technical University (AKTU)',
    place: 'Lucknow, Uttar Pradesh',
    degree: 'Bachelor of Technology — Artificial Intelligence & Machine Learning',
    period: 'July 2023 – June 2027',
    score: 'Expected graduation: 2027',
  },
];

export const experience = [
  {
    company: 'Decode Labs',
    role: 'Artificial Intelligence Intern (Virtual)',
    place: 'Remote',
    period: 'July 2026 – August 2026',
    points: [
      'Built a rule-based AI chatbot handling greetings and exit commands using conditional control flow and a continuous interaction loop.',
      'Developed a basic data-classification model covering data loading, train/test splitting, and supervised classification.',
      'Built a preference-based recommendation system using similarity logic to recommend items from user input.',
    ],
  },
  {
    company: 'Bluestock Fintech',
    role: 'Data Analyst Intern',
    place: 'Remote · Lucknow, Uttar Pradesh',
    period: 'June 2026 – August 2026',
    points: [
      'Analyzed mutual-fund and investment data for a fintech analytics workflow.',
      'Performed data cleaning and exploratory data analysis using Python, SQL, and Pandas.',
      'Built a Mutual Fund Analytics Dashboard in Power BI to visualize fund performance, risk metrics, and ML-based recommendations.',
    ],
  },
  {
    company: 'Ei Systems',
    role: 'Python with Machine Learning Intern',
    place: 'Remote · Lucknow, Uttar Pradesh',
    period: 'June 2026 – August 2026 · 8 weeks',
    points: [
      'Applied Python programming and core machine-learning algorithms to practical ML tasks.',
      'Collaborated on ML-based solutions supporting technology initiatives.',
      'Completed an AI Resume Screening & ATS Analyzer using NLP and Generative AI techniques as the internship capstone.',
    ],
  },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  github?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const projects: Project[] = [
  {
    id: 'neurotwin-ai',
    title: 'NeuroTwin AI — Intelligent Digital Twin',
    year: '2026',
    genre: 'Generative AI • RAG • Multi-Agent Systems',
    logline: 'An AI-powered digital twin with long-term memory, document understanding, and conversational intelligence.',
    stack: ['Python', 'FastAPI', 'React', 'LangChain', 'Gemini', 'ChromaDB', 'PostgreSQL'],
    build: [
      'Built an AI-powered digital twin with conversational AI, retrieval-augmented generation, long-term memory, document understanding, and multi-agent capabilities.',
      'Implemented authentication, digital-twin profiles, memory management, and document indexing.',
      'Designed a React frontend with a FastAPI backend architecture and deployed the frontend on Vercel.',
    ],
    features: [
      'Conversational AI and RAG',
      'Long-term memory and memory management',
      'Document indexing and understanding',
      'Digital-twin profiles and authentication',
      'Multi-agent architecture',
    ],
    metrics: [
      { value: 'RAG', label: 'retrieval-augmented generation' },
      { value: 'Multi-agent', label: 'AI architecture' },
      { value: 'Vercel', label: 'frontend deployment' },
    ],
    github: 'https://github.com/anshuldeepbajpai-dhoni/NeuroTwin-AI',
    palette: { from: '#24060b', via: '#7a0f24', to: '#0b0710', accent: '#ff3d5a' },
    motif: 'shield',
  },
  {
    id: 'mutual-fund-analytics',
    title: 'Bluestock Mutual Fund Analytics',
    year: '2026',
    genre: 'Data Analytics • FinTech • BI',
    logline: 'An end-to-end analytics platform for mutual-fund performance, risk, and investment data.',
    stack: ['Python', 'SQL', 'Power BI', 'Flask', 'Pandas', 'SciPy'],
    build: [
      'Built an end-to-end fintech analytics platform processing more than 46,000 NAV records and 32,800 transactions.',
      'Implemented CAGR, Sharpe, Sortino, Alpha, Beta, Maximum Drawdown, and VaR/CVaR analysis.',
      'Created a four-page interactive Power BI dashboard for risk-based fund analysis.',
    ],
    features: [
      'NAV and transaction data analysis',
      'Data cleaning and exploratory data analysis',
      'Fund performance and risk metrics',
      'Four-page Power BI dashboard',
      'Flask API integration',
    ],
    metrics: [
      { value: '46K+', label: 'NAV records' },
      { value: '32.8K', label: 'transactions' },
      { value: '4', label: 'dashboard pages' },
    ],
    github: 'https://github.com/anshuldeepbajpai-dhoni/Bluestock-mutual-fund-analytics',
    palette: { from: '#1a0d02', via: '#8a4a07', to: '#0a0806', accent: '#ffb547' },
    motif: 'flow',
  },
  {
    id: 'ai-mood-analytics',
    title: 'AI Mood Analytics & Music Recommendation',
    year: '2026',
    genre: 'Computer Vision • AI • Recommendations',
    logline: 'A real-time face and emotion analytics application that recommends music based on detected mood.',
    stack: ['Python', 'OpenCV', 'DeepFace', 'MediaPipe', 'Streamlit'],
    build: [
      'Developed real-time face, age, gender, and emotion detection.',
      'Added emotion-based music recommendations, screenshots, video recording, and analytics export.',
    ],
    features: [
      'Real-time face analysis',
      'Age, gender, and emotion estimation',
      'Emotion-based music recommendations',
      'Screenshot and video recording',
      'Analytics export',
    ],
    metrics: [
      { value: 'Real-time', label: 'visual analysis' },
      { value: 'CV + AI', label: 'computer vision pipeline' },
    ],
    github: 'https://github.com/anshuldeepbajpai-dhoni/AI-Face-Analytics',
    palette: { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' },
    motif: 'tenants',
  },
  {
    id: 'ai-resume-ats',
    title: 'AI Resume Screening & ATS Analyzer',
    year: '2026',
    genre: 'NLP • Generative AI • Career Tech',
    logline: 'An AI-assisted resume analyzer for ATS scoring, skill extraction, and job-description matching.',
    stack: ['Python', 'NLP', 'FastAPI', 'Flask', 'React'],
    build: [
      'Built an AI-based resume analyzer for ATS scoring, skill extraction, and job-description matching.',
      'Generated actionable recommendations to improve resume relevance.',
      'Completed the project as the capstone for a Python with Machine Learning internship.',
    ],
    features: [
      'Resume analysis and ATS-oriented scoring',
      'Skill extraction',
      'Job-description matching',
      'Actionable resume recommendations',
    ],
    metrics: [
      { value: 'NLP', label: 'resume processing' },
      { value: 'GenAI', label: 'AI-assisted feedback' },
    ],
    github: 'https://github.com/anshuldeepbajpai-dhoni/AI-Resume-Reviewer',
    palette: { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' },
    motif: 'shield',
  },
  {
    id: 'spam-classifier',
    title: 'ShieldMail AI-Spam Email/SMS Classifier',
    year: '2026',
    genre: 'Machine Learning • NLP',
    logline: 'A text-classification application that identifies spam using TF-IDF and a Linear SVM model.',
    stack: ['Python', 'NLP', 'Scikit-learn', 'Flask'],
    build: [
      'Developed an ML-based spam detection system using TF-IDF text features and Linear SVM.',
      'Deployed the prediction API as a web application.',
    ],
    features: ['Text preprocessing', 'TF-IDF feature extraction', 'Linear SVM classification', 'Flask web application'],
    metrics: [
      { value: 'TF-IDF', label: 'text features' },
      { value: 'Linear SVM', label: 'classification model' },
    ],
    github: 'https://github.com/anshuldeepbajpai-dhoni/ShieldMail-AI',
    palette: { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' },
    motif: 'flow',
  },
  {
    id: 'customer-churn',
    title: 'Customer Churn Prediction',
    year: '2026',
    genre: 'Machine Learning • Data Science',
    logline: 'A churn-prediction workflow comparing classification models and identifying customer-retention factors.',
    stack: ['Python', 'Pandas', 'Scikit-learn', 'Power BI'],
    build: [
      'Built customer-churn prediction models using Logistic Regression, Decision Tree, Random Forest, and Gradient Boosting.',
      'Performed exploratory data analysis and identified factors influencing customer retention.',
    ],
    features: ['Exploratory data analysis', 'Classification model comparison', 'Churn prediction', 'Customer-retention insights'],
    metrics: [
      { value: '4', label: 'ML models compared' },
      { value: 'EDA', label: 'retention-factor analysis' },
    ],
    github: 'https://github.com/anshuldeepbajpai-dhoni/Customer-Churn-Prediction-ML',
    palette: { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' },
    motif: 'tenants',
  },
  {
    id: 'movie-recommendation',
    title: 'Movie Recommendation System',
    year: '2026',
    genre: 'Machine Learning • Recommendations',
    logline: 'A content-based recommendation system that suggests movies using similarity between movie features.',
    stack: ['Python', 'Pandas', 'Scikit-learn', 'Flask'],
    build: [
      'Developed a content-based movie recommendation system using similarity-based techniques.',
      'Recommended movies based on user-selected titles and movie features.',
    ],
    features: ['Content-based filtering', 'Feature similarity', 'Title-based recommendations'],
    metrics: [
      { value: 'Content-based', label: 'recommendation approach' },
      { value: 'Similarity', label: 'matching method' },
    ],
    github: 'https://github.com/anshuldeepbajpai-dhoni/movie-recommendation-system',
    palette: { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' },
    motif: 'flow',
  },
  {
    id: 'n100-financial-intelligence',
    title: 'N100 Financial Intelligence',
    year: '2026',
    genre: 'Financial Data • ML • NLP',
    logline: 'A financial intelligence platform for NIFTY 100 companies with ETL, ML clustering, NLP insights, and dashboards.',
    stack: ['Python', 'FastAPI', 'Machine Learning', 'NLP', 'Streamlit'],
    build: [
      'Developed an end-to-end financial intelligence platform for NIFTY 100 companies.',
      'Combined automated ETL, machine-learning clustering, NLP-based insights, a FastAPI backend, and a Streamlit dashboard.',
    ],
    features: ['Automated ETL', 'ML clustering', 'NLP insights', 'FastAPI backend', 'Streamlit dashboard'],
    metrics: [
      { value: 'NIFTY 100', label: 'company universe' },
      { value: 'ETL + ML + NLP', label: 'integrated pipeline' },
    ],
    github: 'https://github.com/anshuldeepbajpai-dhoni/N100-Financial-Intelligence',
    palette: { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' },
    motif: 'tenants',
  },
  {
    id: 'deep-packet-inspector',
    title: 'Deep Packet Inspector',
    year: '2026',
    genre: 'Network Security • Packet Analysis • Cybersecurity',
    logline:
      'A network traffic inspection tool designed to analyze packet data and support network security monitoring.',
    stack: [
      'Python',
      'Network Packet Analysis',
      'Cybersecurity',
      'Protocol Analysis',
      'C++',
    ],
    build: [
      'Developed a network traffic inspection project focused on analyzing packet-level data.',
      'Designed the project around network packet inspection and traffic analysis workflows.',
      'Organized the implementation as a dedicated repository for network security analysis.',
    ],
    features: [
      'Network packet inspection',
      'Traffic analysis',
      'Packet-level data examination',
      'Network security investigation',
    ],
    metrics: [
      { value: 'Packet-Level', label: 'traffic inspection' },
      { value: 'Network', label: 'security analysis' },
    ],

    github:
      'https://github.com/anshuldeepbajpai-dhoni/Deep-packet-inspector',

    palette: {
      from: '#071a16',
      via: '#14532d',
      to: '#05080d',
      accent: '#46e3a8',
    },

    motif: 'shield',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    id: 'gate-da-2026',
    title: 'GATE DA',
    org: 'IIT Guwahati',
    laurel: 'QUALIFIED',
    detail: 'Qualified GATE 2026 in Data Science and Artificial Intelligence.',
    link: ''
  }
];

export type Certification = { issuer: string; name: string; link: string };

export const certifications: Certification[] = [
  { issuer: 'Google / Coursera', name: 'Google AI Essentials Specialization (5 courses)', link: 'https://www.coursera.org/' },
  { issuer: 'Oracle University', name: 'Oracle Certified Foundations Associate — Agentic AI', link: 'https://education.oracle.com/' },
  { issuer: 'IBM SkillsBuild', name: 'Getting Started with Generative AI', link: 'https://skillsbuild.org/' },
  { issuer: 'BCG X / Forage', name: 'Data Science Job Simulation', link: 'https://www.theforage.com/' },
  { issuer: 'JPMorgan Chase & Co. / Forage', name: 'Quantitative Research Job Simulation', link: 'https://www.theforage.com/' },
  { issuer: 'Deloitte / Forage', name: 'Data Analytics Job Simulation', link: 'https://www.theforage.com/' },
  { issuer: 'Tata / Forage', name: 'GenAI Powered Data Analytics Job Simulation', link: 'https://www.theforage.com/' },
  { issuer: 'freeCodeCamp', name: 'Machine Learning with Python — Developer Certification (~300 hours)', link: 'https://www.freecodecamp.org/' },
  { issuer: 'freeCodeCamp', name: 'Data Analysis with Python — Developer Certification (~300 hours)', link: 'https://www.freecodecamp.org/' },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'ai-ml',
    title: 'AI & Machine Learning',
    subtitle: 'Models, evaluation, and intelligent systems',
    skills: [
      { name: 'Machine Learning', mono: 'ML' },
      { name: 'Deep Learning', mono: 'DL' },
      { name: 'NLP', mono: 'NL' },
      { name: 'Generative AI', mono: 'AI' },
      { name: 'LLMs', mono: 'LL' },
      { name: 'RAG', mono: 'RG' },
      { name: 'Prompt Engineering', mono: 'PE' },
      { name: 'Transformer Models', mono: 'TM' },
      { name: 'Feature Engineering', mono: 'FE' },
      { name: 'Model Evaluation', mono: 'ME' },
    ],
  },
  {
    id: 'languages',
    title: 'Programming Languages',
    subtitle: 'Tools for building and experimentation',
    skills: [
      { name: 'Python', mono: 'Py', note: 'Primary' },
      { name: 'C++', mono: 'C+' },
      { name: 'Java', mono: 'Jv' },
      { name: 'C', mono: 'C' },
      { name: 'SQL', mono: 'SQ' },
    ],
  },
  {
    id: 'ml-libraries',
    title: 'ML & Data Libraries',
    subtitle: 'Data processing, training, and explainability',
    skills: [
      { name: 'NumPy', mono: 'Np' },
      { name: 'Pandas', mono: 'Pd' },
      { name: 'Scikit-learn', mono: 'Sk' },
      { name: 'TensorFlow', mono: 'Tf' },
      { name: 'XGBoost', mono: 'Xg' },
      { name: 'CatBoost', mono: 'Cb' },
      { name: 'LightGBM', mono: 'Lg' },
      { name: 'SHAP', mono: 'Sh' },
      { name: 'Optuna', mono: 'Op' },
      { name: 'OpenCV', mono: 'Cv' },
      { name: 'MediaPipe', mono: 'Mp' },
    ],
  },
  {
    id: 'backend',
    title: 'Web & Backend',
    subtitle: 'APIs and application delivery',
    skills: [
      { name: 'FastAPI', mono: 'Fa' },
      { name: 'Flask', mono: 'Fl' },
      { name: 'Streamlit', mono: 'St' },
      { name: 'React', mono: 'Re' },
      { name: 'Docker', mono: 'Dk' },
      { name: 'SQLAlchemy', mono: 'Sa' },
    ],
  },
  {
    id: 'data-bi',
    title: 'Data & Business Intelligence',
    subtitle: 'Analysis, databases, and reporting',
    skills: [
      { name: 'PostgreSQL', mono: 'Pg' },
      { name: 'SQLite', mono: 'Sq' },
      { name: 'ChromaDB', mono: 'Ch' },
      { name: 'Power BI', mono: 'BI' },
      { name: 'Tableau', mono: 'Tb' },
      { name: 'Excel', mono: 'Xl' },
      { name: 'EDA', mono: 'Ed' },
      { name: 'Matplotlib', mono: 'Mt' },
      { name: 'Seaborn', mono: 'Sb' },
    ],
  },
  {
    id: 'llm-tools',
    title: 'Generative AI Tools',
    subtitle: 'LLM orchestration and model APIs',
    skills: [
      { name: 'LangChain', mono: 'Lc' },
      { name: 'Google Gemini API', mono: 'Ge' },
      { name: 'RAG Pipelines', mono: 'Rg' },
      { name: 'Prompt Engineering', mono: 'Pe' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools & Foundations',
    subtitle: 'Development workflow and CS fundamentals',
    skills: [
      { name: 'Git / GitHub', mono: 'Gt' },
      { name: 'Jupyter Notebook', mono: 'Jn' },
      { name: 'DSA in C++', mono: 'Ds' },
      { name: 'OOP', mono: 'Oo' },
      { name: 'DBMS', mono: 'Db' },
    ],
  },
];

export const skillEvidence: Record<string, string[]> = {
  'Machine Learning': ['Customer Churn Prediction', 'Spam Email/SMS Classifier', 'GATE DA 2026 Qualified'],
  'Deep Learning': ['AI Mood Analytics', 'Machine Learning with Python certification'],
  NLP: ['AI Resume Screening & ATS Analyzer', 'Spam Email/SMS Classifier', 'Sentiment Analysis System'],
  'Generative AI': ['NeuroTwin AI', 'AI Resume Screening & ATS Analyzer', 'Oracle Agentic AI certification'],
  LLMs: ['NeuroTwin AI', 'LangChain and Gemini API'],
  RAG: ['NeuroTwin AI — retrieval-augmented generation'],
  Python: ['NeuroTwin AI', 'Mutual Fund Analytics', 'AI Mood Analytics', 'Machine Learning internships'],
  SQL: ['Mutual Fund Analytics', 'PostgreSQL and SQLite projects'],
  Pandas: ['Mutual Fund Analytics', 'Customer Churn Prediction'],
  'Scikit-learn': ['Spam Classifier', 'Customer Churn Prediction', 'Movie Recommendation System'],
  FastAPI: ['NeuroTwin AI', 'AI Resume ATS', 'N100 Financial Intelligence'],
  Flask: ['Mutual Fund Analytics', 'Spam Email/SMS Classifier', 'Movie Recommendation System'],
  React: ['NeuroTwin AI', 'AI Resume ATS'],
  'Power BI': ['Bluestock Mutual Fund Analytics Dashboard'],
  PostgreSQL: ['NeuroTwin AI', 'Mutual Fund Analytics'],
  OpenCV: ['AI Mood Analytics & Music Recommendation'],
  LangChain: ['NeuroTwin AI'],
  'Google Gemini API': ['NeuroTwin AI'],
  'Git / GitHub': ['Public project repositories'],
  'DSA in C++': ['Currently strengthening DSA through LeetCode practice'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

export const seasons: Season[] = [
  {
    number: 1,
    title: 'The Foundation',
    period: '2023 – 2027',
    synopsis: 'A B.Tech journey in Computer Science and Engineering, specializing in Artificial Intelligence and Machine Learning at AKTU.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'The Engineer',
        description: 'Pursuing a Bachelor of Technology in Artificial Intelligence and Machine Learning at Dr. A.P.J. Abdul Kalam Technical University.',
        tags: ['B.Tech', 'AI & ML', 'AKTU'],
        runtime: 'Jul 2023 – Jun 2027',
        palette: violet,
      },
      {
        code: 'S01 E02',
        title: 'The Data Mindset',
        description: 'Building foundations in data preparation, exploratory analysis, machine learning, and communicating insights.',
        tags: ['Python', 'EDA', 'SQL'],
        runtime: 'Ongoing',
        palette: ocean,
      },
      {
        code: 'S01 E03',
        title: 'The Art of Problem Solving',
        description:
          'Currently strengthening problem-solving skills through Data Structures and Algorithms in C++ and Python, focusing on algorithmic thinking, efficient solutions, and complexity analysis.',
        tags: ['C++', 'Python', 'DSA', 'Problem Solving'],
        runtime: 'In Progress',
        palette: crimson,
      },
      {
        code: 'S01 E04',
        title: 'The Industry Explorer',
        description: 'Gaining practical industry exposure through internships in data analytics, data science, and artificial intelligence, applying technical knowledge to real-world problems.',
        tags: ['Data Analytics', 'Machine Learning', 'AI', 'Internships'],
        runtime: '2026',
        palette: jade,
      },
      {
        code: 'S01 E05',
        title: 'The Research Mindset',
        description: 'Exploring advanced AI concepts, Generative AI, retrieval-augmented generation, and intelligent agent architectures while developing practical projects and experimenting with emerging technologies.',
        tags: ['Generative AI', 'RAG', 'LLMs', 'AI Agents'],
        runtime: 'Ongoing',
        palette: ocean,
      },
      {
        code: 'S01 E06',
        title: 'The GATE Qualifier',
        description: 'Qualified GATE 2026 in Data Science and Artificial Intelligence, demonstrating a foundation in analytical reasoning and core technical concepts.',
        tags: ['GATE 2026', 'Data Science', 'Artificial Intelligence'],
        runtime: '2026',
        palette: crimson,
      },
    ],
  },
  {
    number: 2,
    title: 'The Internship Arc',
    period: '2026',
    synopsis: 'Practical experience across AI, machine learning, and fintech data analytics.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'The AI Intern',
        description: 'At Decode Labs, built a rule-based chatbot, a basic supervised classification model, and a preference-based recommendation system.',
        tags: ['AI', 'Classification', 'Recommendations'],
        runtime: 'Jul – Aug 2026',
        palette: crimson,
      },
      {
        code: 'S02 E02',
        title: 'The Data Analyst',
        description: 'At Bluestock Fintech, cleaned and explored mutual-fund data and built a Power BI dashboard with performance and risk insights.',
        tags: ['FinTech', 'Python', 'SQL', 'Power BI'],
        runtime: 'Jun – Aug 2026',
        palette: amber,
      },
      {
        code: 'S02 E03',
        title: 'The ML Builder',
        description: 'At Ei Systems, applied Python and ML techniques and completed an AI Resume Screening & ATS Analyzer capstone using NLP and Generative AI.',
        tags: ['Python', 'Machine Learning', 'NLP', 'GenAI'],
        runtime: 'Jun – Aug 2026',
        palette: jade,
      },
    ],
  },
  {
    number: 3,
    title: 'Building Intelligent Systems',
    period: '2026',
    synopsis: 'Projects that connect AI, data, computer vision, and practical application development.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'The Digital Twin',
        description: 'NeuroTwin AI combines conversational AI, RAG, long-term memory, document understanding, and multi-agent capabilities.',
        tags: ['FastAPI', 'LangChain', 'Gemini', 'ChromaDB'],
        runtime: 'In development',
        palette: crimson,
      },
      {
        code: 'S03 E02',
        title: 'The Financial Analyst',
        description: 'Mutual Fund Analytics processes 46K+ NAV records and 32.8K transactions, with investment performance and risk metrics.',
        tags: ['Python', 'SQL', 'Power BI', 'Flask'],
        runtime: '2026',
        palette: amber,
      },
      {
        code: 'S03 E03',
        title: 'The Vision Builder',
        description: 'AI Mood Analytics combines real-time face and emotion analysis with mood-based music recommendations.',
        tags: ['OpenCV', 'DeepFace', 'MediaPipe'],
        runtime: '2026',
        palette: ocean,
      },
      {
        code: 'S03 E04',
        title: 'The Financial Intelligence',
        description: 'N100 Financial Intelligence combines automated ETL, machine learning clustering, NLP-driven insights, and interactive dashboards to analyze NIFTY 100 companies.',
        tags: ['Python', 'FastAPI', 'Machine Learning', 'NLP', 'Streamlit'],
        runtime: '2026',
        palette: amber,
      },
      {
        code: 'S03 E05',
        title: 'The Network Guardian',
        description: 'Deep Packet Inspector focuses on network packet inspection and traffic analysis, exploring how packet-level data can support network security investigation.',
        tags: ['Python', 'Network Security', 'Packet Analysis', 'Cybersecurity'],
        runtime: '2026',
        palette: ocean,
      },
    ],
  },
  {
    number: 4,
    title: 'Data to Decisions',
    period: '2026',
    synopsis: 'Applying machine learning and analytics to classification, prediction, recommendations, and financial intelligence.',
    episodes: [
      {
        code: 'S04 E01',
        title: 'The Classifier',
        description: 'Built a spam detection application using TF-IDF and Linear SVM, and deployed it through a Flask web application.',
        tags: ['NLP', 'TF-IDF', 'Linear SVM'],
        runtime: '2026',
        palette: jade,
      },
      {
        code: 'S04 E02',
        title: 'The Predictor',
        description: 'Compared Logistic Regression, Decision Tree, Random Forest, and Gradient Boosting for customer churn prediction.',
        tags: ['Scikit-learn', 'EDA', 'Classification'],
        runtime: '2026',
        palette: violet,
      },
      {
        code: 'S04 E03',
        title: 'The Financial Intelligence Engine',
        description: 'N100 Financial Intelligence combines automated ETL, ML clustering, NLP insights, FastAPI, and a Streamlit dashboard.',
        tags: ['ETL', 'ML', 'NLP', 'FastAPI'],
        runtime: '2026',
        palette: ocean,
      },
      {
        code: 'S04 E04',
        title: 'The Portfolio Strategist',
        description: 'Built a mutual fund analytics platform processing 46K+ NAV records and 32.8K transactions, with exploratory data analysis, investment performance metrics, SQL queries, and an interactive Power BI dashboard.',
        tags: ['Python', 'Pandas', 'SQL', 'Power BI', 'Flask'],
        runtime: '2026',
        palette: amber,
      },
      {
        code: 'S04 E05',
        title: 'The Resume Intelligence',
        description: 'Developed an AI-powered resume screening and ATS analyzer using natural language processing and Generative AI to analyze resume content and support job-description matching.',
        tags: ['Python', 'NLP', 'Generative AI', 'Text Analysis'],
        runtime: '2026',
        palette: violet,
      },
    ],
  },
  {
    number: 5,
    title: 'The Next Chapter',
    period: 'Now streaming',
    synopsis: 'Continuing to deepen AI engineering and data science skills while building practical, useful software.',
    episodes: [
      {
        code: 'S05 E01',
        title: 'GATE Qualified',
        description: 'Qualified GATE 2026 in Data Science and Artificial Intelligence.',
        tags: ['GATE DA 2026', 'Data Science', 'AI'],
        runtime: '2026',
        palette: crimson,
      },
      {
        code: 'S05 E02',
        title: 'What Comes Next',
        description: 'Continuing to strengthen Data Structures and Algorithms in C++ while exploring RAG, LLMs, machine learning, and data-driven applications.',
        tags: ['DSA', 'RAG', 'LLMs', 'Machine Learning'],
        runtime: 'In progress',
        palette: violet,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'Signature build', title: 'NeuroTwin AI', detail: 'RAG • Long-term memory • Multi-agent AI', palette: crimson },
  { label: 'FinTech analytics', title: 'Mutual Fund Analytics', detail: '46K+ NAV records • 32.8K transactions', palette: amber },
  { label: 'Qualification', title: 'GATE DA 2026', detail: 'Qualified in Data Science & AI', palette: ocean },
  { label: 'Computer vision', title: 'AI Mood Analytics', detail: 'Face and emotion analysis • Music recommendations', palette: violet },
  { label: 'GenAI application', title: 'AI Resume ATS', detail: 'NLP • Skill extraction • Job matching', palette: jade },
  { label: 'Financial intelligence', title: 'N100 Financial Intelligence', detail: 'ETL • ML clustering • NLP insights', palette: ocean },
  { label: 'Text classification', title: 'Spam Classifier', detail: 'TF-IDF • Linear SVM • Flask', palette: crimson },
  { label: 'Predictive analytics', title: 'Customer Churn', detail: 'Four classification models compared', palette: amber },
  { label: 'Recommendations', title: 'Movie Recommendation', detail: 'Content-based similarity', palette: jade },
  { label: 'Current focus', title: 'AI Engineering', detail: 'RAG • LLMs • Data Science • DSA', palette: violet },
];

/** Slides for the "▶ Play Intro" cinematic sequence. */
export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Education',
    title: 'B.Tech · AI & ML',
    lines: ['Dr. A.P.J. Abdul Kalam Technical University', 'July 2023 – June 2027'],
    chips: ['AI & ML'],
  },
  {
    kicker: 'Technical focus',
    title: 'AI meets data.',
    lines: ['Python · C++ · Java · SQL', 'Machine Learning · NLP · Deep Learning · Generative AI', 'FastAPI · Flask · React · Power BI'],
    chips: ['Python', 'ML', 'GenAI', 'SQL', 'Power BI'],
  },
  {
    kicker: 'Experience',
    title: 'Three Internship Experiences',
    lines: ['AI Intern · Decode Labs', 'Data Analyst Intern · Bluestock Fintech', 'Python with ML Intern · Ei Systems'],
  },
  {
    kicker: 'Projects',
    title: 'Built to Solve Problems',
    lines: ['NeuroTwin AI — RAG, long-term memory, and multi-agent capabilities', 'Mutual Fund Analytics — 46K+ NAV records and 32.8K transactions', 'AI Mood Analytics — real-time face and emotion analysis'],
  },
  {
    kicker: 'Achievement',
    title: 'GATE DA 2026',
    lines: ['Qualified in Data Science and Artificial Intelligence'],
    chips: ['GATE Qualified'],
  },
  {
    kicker: 'Certifications',
    title: 'Learning in Motion',
    lines: ['Google · Oracle · IBM · freeCodeCamp', 'BCG X · JPMorgan Chase · Deloitte · Tata'],
  },
  {
    kicker: 'Current mission',
    title: 'Build. Evaluate. Improve.',
    lines: ['AI engineering · Machine learning · Data science · RAG and LLM applications'],
  },
];

export type ProfileId = 'anshul' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'anshul',
    name: 'Anshul',
    blurb: 'The full series, in order',
    color: '#e5132b',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Resume, internships, projects & skills first',
    color: '#4cc9ff',
    order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
  },
  {
    id: 'developer',
    name: 'Developer',
    blurb: 'Projects, stack & GitHub first',
    color: '#46e3a8',
    order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
  },
  {
    id: 'creative',
    name: 'Creative',
    blurb: 'The story arc & highlights first',
    color: '#ffb547',
    order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Education & internships', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Originals', card: 'My Projects', meta: `${projects.length} Originals • AI & Data`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Featured projects and milestones', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Moments', card: 'Achievements', meta: `${achievements.length} Achievements • ${certifications.length} Certifications`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume • View & download', palette: violet },
};
