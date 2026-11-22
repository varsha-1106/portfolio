import { SkillCategory, ActivityItem, LearningFocus } from "@/types";

export const personalData = {
  name: "VARSHA T.",
  firstName: "Varsha",
  lastName: "T.",
  initials: "VT.",
  brandTitle: "VARSHA | PORTFOLIO",
  heroEyebrow: "AI & MACHINE LEARNING ENGINEERING",
  professionalTitle: "Third-Year AI/ML Student | GenAI, Agents & Full-Stack",
  tagline: "Building useful software with AI, data, and automation.",
  shortBio:
    "I'm a third-year Artificial Intelligence and Machine Learning engineering student building practical software across modern web development, generative AI, agent workflows, and automation.",
  location: "Hosur, Tamil Nadu, India",
  phone: "+91 9363750548",
  availability: "Open to learning opportunities, internships and collaborations.",
  statusBadge: "Available for Internships",
  email: "varshatamil1106@gmail.com",
  linkedin: "https://www.linkedin.com/in/varsha-tamilarasan-71065032a/",
  github: "https://github.com/varsha-1106",
  resumePath: "/resume.pdf",
  profileImages: {
    primary: "/images/varsha-profile-4k.jpg",
    withGlasses: "/images/varsha-profile-glasses.png",
  },
  
  about: {
    heading: "AI ideas, engineered into products.",
    paragraphs: [
      "I'm a third-year Artificial Intelligence and Machine Learning engineering student interested in building complete products, from clean web interfaces to intelligent workflows.",
      "My current toolkit spans Python, TypeScript, React, and Next.js. I am expanding into GenAI and LLM application patterns with LangChain, LangGraph, and retrieval-augmented generation.",
      "I also explore workflow automation, API integrations, and event-driven systems such as Kafka, connecting models and services into practical end-to-end flows.",
      "I enjoy turning project briefs into working prototypes, explaining trade-offs clearly, and improving systems through iteration."
    ],
    highlights: [
      { label: "Curious by nature", desc: "Driven to unpack complex systems and explore how AI can solve human problems." },
      { label: "Product-minded builder", desc: "Connecting interfaces, APIs, AI capabilities, and data into coherent project workflows." },
      { label: "AI systems explorer", desc: "Applying machine learning concepts while exploring LLMs, RAG, and agent orchestration." },
      { label: "Automation focused", desc: "Looking for repeatable workflows that can be connected with tools, APIs, and events." },
      { label: "Clear communicator", desc: "Documenting project decisions and collaborating in hackathons and academic teams." }
    ],
    corePhilosophy: "Real innovation starts with the courage to ask questions, experiment honestly, and build solutions that matter."
  },

  education: {
    degree: "Bachelor of Engineering in Artificial Intelligence and Machine Learning",
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
      description: "Languages and interfaces used to build application logic and connect services.",
      skills: [
        { name: "Python", level: "Project & coursework use", context: "Scripting, data handling, and AI/ML project work" },
        { name: "TypeScript", level: "Building familiarity", context: "Typed application code and frontend development" },
        { name: "Java", level: "Coursework", context: "Object-oriented programming and application fundamentals" },
        { name: "SQL", level: "Coursework & practice", context: "Relational queries, filtering, joins, and data modeling" }
      ]
    },
    {
      title: "Modern Web Engineering",
      description: "Building responsive product interfaces and connecting them to application services.",
      skills: [
        { name: "React", level: "Building", context: "Reusable components, state, and interactive interfaces" },
        { name: "Next.js", level: "Building", context: "Full-stack React applications and routing" },
        { name: "HTML & CSS", level: "Applied", context: "Accessible structure, responsive layouts, and styling" },
        { name: "REST APIs", level: "Integrating", context: "Connecting frontend experiences to backend services" }
      ]
    },
    {
      title: "Generative AI & Agent Systems",
      description: "Patterns for grounding language models and coordinating multi-step tasks.",
      skills: [
        { name: "Generative AI & LLMs", level: "Applied exploration", context: "Prompt design, model integration, and AI product patterns" },
        { name: "LangChain", level: "Exploring", context: "Composing model, prompt, and tool workflows" },
        { name: "LangGraph", level: "Exploring", context: "Stateful, multi-step agent workflows" },
        { name: "RAG", level: "Building familiarity", context: "Retrieval, grounding, and source-aware responses" }
      ]
    },
    {
      title: "Automation & Data Systems",
      description: "Connecting services and exploring reliable, event-driven workflows.",
      skills: [
        { name: "Workflow automation", level: "Exploring", context: "Designing repeatable flows across apps, APIs, and AI tools" },
        { name: "n8n / Make / Zapier", level: "Exploring", context: "No-code and low-code automation platforms" },
        { name: "Apache Kafka", level: "Learning", context: "Event streams and asynchronous system design" },
        { name: "Webhooks & integrations", level: "Building familiarity", context: "Passing events and data between services" }
      ]
    },
    {
      title: "AI/ML & Developer Practice",
      description: "Core engineering practices for prototyping and learning from project work.",
      skills: [
        { name: "Machine Learning", level: "Academic focus", context: "Model fundamentals, evaluation, and applied problem framing" },
        { name: "Computer Vision", level: "Project exploration", context: "Image processing and hand-landmark tracking concepts" },
        { name: "Git & GitHub", level: "Project workflow", context: "Version control, repository management, and collaboration" },
        { name: "Visual Studio Code", level: "Primary IDE", context: "Editing, terminal workflows, and debugging" }
      ]
    },
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
    { topic: "Full-Stack Product Development", level: "React + Next.js", description: "Building responsive interfaces and connecting them to application APIs.", inProgress: true },
    { topic: "GenAI Applications", level: "LLM Workflows", description: "Exploring prompt design, model integration, and grounded application patterns.", inProgress: true },
    { topic: "LangChain & LangGraph", level: "Agent Orchestration", description: "Learning composable chains, stateful graphs, and tool-connected workflows.", inProgress: true },
    { topic: "Retrieval-Augmented Generation", level: "RAG", description: "Studying document retrieval, context construction, and source-grounded answers.", inProgress: true },
    { topic: "Workflow Automation", level: "n8n · Make · Zapier", description: "Connecting APIs and everyday tools into repeatable automated flows.", inProgress: true },
    { topic: "Event-Driven Systems", level: "Apache Kafka", description: "Building understanding of event streams, consumers, and asynchronous processing.", inProgress: true },
    { topic: "Applied AI/ML", level: "Model Foundations", description: "Strengthening model selection, evaluation, and computer vision fundamentals.", inProgress: true },
    { topic: "Engineering Delivery", level: "Build · Integrate · Iterate", description: "Using version control, clear documentation, and incremental project delivery.", inProgress: true }
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
