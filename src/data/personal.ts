import { SkillCategory, ActivityItem, LearningFocus } from "@/types";

export const personalData = {
  name: "VARSHA T.",
  firstName: "Varsha",
  lastName: "T.",
  initials: "VT.",
  brandTitle: "VARSHA — PORTFOLIO",
  heroEyebrow: "AI & MACHINE LEARNING ENGINEERING",
  professionalTitle: "Future AI Engineer | Building Real-World Solutions",
  tagline: "Turning ideas into intelligent solutions.",
  shortBio:
    "I'm an Artificial Intelligence and Machine Learning engineering student exploring technology, developing practical projects, and continuously strengthening my technical skills.",
  location: "Hosur, Tamil Nadu, India",
  availability: "Open to learning opportunities, internships and collaborations.",
  statusBadge: "Available for Internships",
  email: "varshatamil1106@gmail.com",
  linkedin: "https://www.linkedin.com/in/varsha-tamilarasan-71065032a/",
  github: "https://github.com/varsha-1106",
  resumePath: "/resume.pdf",
  profileImages: {
    primary: "/images/varsha-profile.png",
    withGlasses: "/images/varsha-profile-glasses.png",
  },
  
  about: {
    heading: "More than just a student.",
    paragraphs: [
      "I'm a curious, determined, and creative Artificial Intelligence and Machine Learning engineering student who is currently building my technical foundation.",
      "I'm at the beginning of my coding journey, actively learning programming and improving my practical skills through projects, experimentation, and continuous learning.",
      "I enjoy exploring technology, developing ideas, participating in technical events, working with teams, and learning how technology can solve real-world problems.",
      "My goal is to become technically strong, build meaningful intelligent solutions, and grow into a capable AI engineer."
    ],
    highlights: [
      { label: "Curious by nature", desc: "Driven to unpack complex systems and explore how AI can solve human problems." },
      { label: "Determined to improve", desc: "Consistently refining programming fundamentals, logic, and debugging stamina." },
      { label: "Creative problem-solver", desc: "Approaching challenges with fresh architectural thinking and empathetic design." },
      { label: "Collaborative team member", desc: "Thriving in hackathons, group presentations, and interdisciplinary coordination." },
      { label: "Continuous learner", desc: "Actively acquiring new tools, frameworks, and foundational concepts daily." }
    ],
    corePhilosophy: "Real innovation doesn't start with knowing every answer—it starts with the courage to ask questions, experiment honestly, and build solutions that matter."
  },

  education: {
    degree: "Bachelor of Engineering — Artificial Intelligence and Machine Learning",
    institution: "Sri Sairam College of Engineering",
    location: "Anekal, Bangalore",
    batch: "2024–2028",
    currentSemester: "5th Semester",
    expectedGraduation: "2028",
    focusAreas: [
      "Artificial Intelligence Principles",
      "Machine Learning Fundamentals",
      "Object-Oriented Programming",
      "Database Management Systems",
      "Discrete Mathematics & Algorithms",
      "Data Structures & Problem Solving"
    ]
  },

  skills: [
    {
      title: "Programming & Data",
      description: "Core languages and query tools I am actively developing proficiency in.",
      skills: [
        { name: "Python", level: "Basic / Building Fundamentals", context: "Syntax, logic building, data handling, scripting" },
        { name: "SQL", level: "Basic / Active Practice", context: "Relational database queries, filtering, joins" }
      ]
    },
    {
      title: "Web Technologies",
      description: "Frontend foundations for presenting interfaces and connecting AI models.",
      skills: [
        { name: "HTML", level: "Basic", context: "Semantic web page structure, forms, and layout hierarchy" }
      ]
    },
    {
      title: "Developer Tools & Workflow",
      description: "Version control and collaborative development workflows.",
      skills: [
        { name: "Git", level: "Basic", context: "Version control, branching, committing, and change tracking" },
        { name: "GitHub", level: "Basic", context: "Repository management, open-source workflow, project hosting" }
      ]
    },
    {
      title: "Development Environments",
      description: "Primary workspaces where I write, test, and debug code.",
      skills: [
        { name: "Visual Studio Code", level: "Primary IDE", context: "Daily code editor, extensions, terminal workflow" },
        { name: "Antigravity", level: "AI Agent Workspace", context: "Modern agentic engineering and accelerated development" }
      ]
    },
    {
      title: "Areas I'm Exploring",
      description: "Theoretical and applied domains currently driving my curiosity and project experiments.",
      skills: [
        { name: "Artificial Intelligence", level: "Core Domain", context: "Intelligent systems, heuristics, agentic behaviors" },
        { name: "Machine Learning", level: "Core Domain", context: "Supervised/unsupervised models, predictive analysis" },
        { name: "Computer Vision", level: "Applied Exploration", context: "Image processing, spatial tracking, gesture recognition" },
        { name: "Software Development", level: "Engineering Practice", context: "Modular architecture, clean code, application lifecycles" },
        { name: "Data Analysis", level: "Analytical Focus", context: "Data cleaning, statistical reasoning, insights extraction" }
      ]
    }
  ] as SkillCategory[],

  activities: [
    {
      id: "sih",
      role: "Participant & Team Collaborator",
      organization: "Smart India Hackathon (SIH)",
      category: "Hackathon",
      summary: "Participated across multiple editions in India's premier nationwide hackathon, tackling complex real-world governance and security challenges.",
      tags: ["Nationwide Hackathon", "Problem Solving", "Team Collaboration"],
      points: [
        "Collaborated in multidisciplinary teams under intense hackathon deadlines.",
        "Contributed to conceptual architecture, problem breakdown, and presentation decks.",
        "Focused on real-world applicability for national security and intelligent public systems."
      ]
    },
    {
      id: "hackathons",
      role: "Participant & Ideator",
      organization: "College Hackathons & Ideathons",
      category: "Hackathon",
      summary: "Active participant in technical competitive coding and design-thinking events, including early-stage participation at Nandha College of Engineering, Erode.",
      tags: ["Nandha College of Engg", "Ideathon", "Rapid Prototyping"],
      points: [
        "Tested conceptual problem-solving during first-year ideathon competitions in Erode.",
        "Developed rapid pitching and system mapping under structured time constraints.",
        "Gained valuable perspective on cross-college technical standards and emerging domains."
      ]
    },
    {
      id: "papers",
      role: "Presenter & Research Enthusiast",
      organization: "Technical Academic Conferences & Symposia",
      category: "Academic",
      summary: "Participated in technical paper presentations and academic symposiums, articulating emerging computational concepts.",
      tags: ["Paper Presentation", "Technical Writing", "Public Speaking"],
      points: [
        "Researched topic frameworks, reviewed literature, and organized structured technical slides.",
        "Presented findings before faculty evaluation panels and peer cohorts.",
        "Honed technical communication, concise articulation, and Q&A handling."
      ]
    },
    {
      id: "editor",
      role: "Student Book Editor",
      organization: "College Publication Division",
      category: "Editorial",
      summary: "Served as student book editor for an official publication produced and published by the college institution.",
      tags: ["Publication", "Content Review", "Attention to Detail"],
      points: [
        "Reviewed manuscripts, verified clarity, and ensured consistent formatting throughout.",
        "Coordinated with student contributors and faculty advisors to align on deadlines.",
        "Exercised editorial judgment, proofreading discipline, and publication standards."
      ]
    },
    {
      id: "coordinator",
      role: "Department Fest Event Coordinator",
      organization: "Sri Sairam College of Engineering",
      category: "Leadership",
      summary: "Led and coordinated technical and cultural event modules during the college's annual department festival.",
      tags: ["Event Management", "Leadership", "Logistics & Outreach"],
      points: [
        "Organized event flow, participant registration, rule briefing, and stage coordination.",
        "Collaborated with faculty coordinators and student volunteers for smooth execution.",
        "Strengthened public speaking, team management, conflict resolution, and logistical foresight."
      ]
    }
  ] as ActivityItem[],

  learningRoadmap: [
    { topic: "Python Programming", level: "Building Rigor", description: "Mastering data structures, object-oriented paradigms, and algorithm efficiency.", inProgress: true },
    { topic: "Coding Fundamentals", level: "Daily Practice", description: "Strengthening logic, recursion, string handling, and problem decomposition.", inProgress: true },
    { topic: "SQL & Databases", level: "Relational Queries", description: "Designing normalized schemas, complex joins, indexing, and aggregations.", inProgress: true },
    { topic: "Web Development Basics", level: "Interface Building", description: "Connecting dynamic user interfaces to backend APIs and AI services.", inProgress: true },
    { topic: "AI & ML Concepts", level: "Theoretical Foundation", description: "Understanding loss functions, gradient descent, feature engineering, and neural architectures.", inProgress: true },
    { topic: "Practical Projects", level: "Iterative Prototyping", description: "Translating course concepts into tangible, deployable, open-source repositories.", inProgress: true },
    { topic: "Problem Solving", level: "Algorithmic Stamina", description: "Regular practice on analytical puzzles, competitive tracks, and debugging.", inProgress: true },
    { topic: "Git & GitHub Workflow", level: "Standard Practice", description: "Maintaining clean branch hygiene, pull requests, semantic commit logs, and documentation.", inProgress: true }
  ] as LearningFocus[],

  journeyMilestones: [
    {
      phase: "01",
      title: "The Spark of Curiosity",
      desc: "Chose Artificial Intelligence & Data as my calling, enrolling in Sri Sairam College of Engineering to build from foundational principles up."
    },
    {
      phase: "02",
      title: "Stepping into Arenas",
      desc: "Dived into first-year hackathons and ideathons (including Nandha College of Engineering), embracing high-pressure team problem solving."
    },
    {
      phase: "03",
      title: "National Hackathons & Service",
      desc: "Competed in the Smart India Hackathon on high-impact challenges, while taking on roles as Student Book Editor and Department Fest Coordinator."
    },
    {
      phase: "04",
      title: "Building Real-World Prototypes",
      desc: "Initiated multi-domain applied projects spanning network analysis, rehabilitation vision tracking, emergency assist, and embedded footwear detection."
    },
    {
      phase: "05",
      title: "Growth Horizon",
      desc: "Sharpening programming fundamentals, seeking software and AI engineering internships, and preparing to build production-scale intelligent systems."
    }
  ]
};
