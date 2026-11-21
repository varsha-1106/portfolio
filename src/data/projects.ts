import { Project } from "@/types";

export const projectsData: Project[] = [
  {
    id: "criminal-network-analysis",
    number: "01",
    title: "AI-Powered Criminal Network Analysis System",
    subtitle: "Graph-based intelligence analysis exploring relationships between suspicious entities",
    category: "AI & Network Intelligence",
    status: "Hackathon Prototype",
    period: "Smart India Hackathon",
    problemStatement:
      "Law enforcement and investigative agencies encounter vast, fragmented datasets of communications, transactions, and associations. Manually parsing connections across multi-node networks is slow and susceptible to overlooking critical intermediary links.",
    proposedSolution:
      "A conceptual system designed to analyze entity relationships, map communication patterns, and visualize high-centrality nodes using graph intelligence to help analysts identify network structures efficiently.",
    myContribution:
      "Collaborated on problem-domain research, conceptualized system workflow, participated in entity mapping logic, and co-developed the solution architecture and presentation deck for the evaluation panel.",
    technologies: ["Python (Exploration)", "Graph Data Concepts", "Network Analysis Theory", "System Architecture"],
    challenges:
      "Structuring unstructured relational data and designing visual representations that remain legible as the number of interconnected nodes scales.",
    learningOutcomes: [
      "Gained deeper understanding of graph theory concepts (nodes, edges, centrality)",
      "Practiced breaking down massive investigative problems into algorithmic steps",
      "Collaborated under strict hackathon evaluation parameters"
    ],
    githubUrl: "https://github.com/varsha-1106",
    visualType: "network-graph",
    keyMetrics: [
      { label: "Context", value: "Smart India Hackathon" },
      { label: "Focus", value: "Relational Mapping" },
      { label: "Status", value: "Concept Prototype" }
    ]
  },
  {
    id: "physiotherapy-guidance-rehab",
    number: "02",
    title: "AI-Assisted Physiotherapy Exercise Guidance & Rehabilitation Platform",
    subtitle: "Computer vision exploration for hand and wrist movement analysis and rehabilitation monitoring",
    category: "Computer Vision & Healthcare",
    status: "Ongoing",
    period: "Academic Project (In Progress)",
    problemStatement:
      "Patients recovering from hand and wrist trauma or repetitive-strain injuries often struggle to perform targeted physical therapy exercises with proper form without continuous clinician supervision.",
    proposedSolution:
      "An ongoing assistive platform exploring real-time landmark tracking on hand and wrist joints to guide repetitions, evaluate angle ranges, and provide patients with structured feedback during at-home rehabilitation.",
    myContribution:
      "Currently leading the domain study on hand joint landmark kinematics, researching vision-based tracking models, and drafting the user workflow for guided exercise regimens.",
    technologies: ["Python", "Computer Vision Concepts", "Pose/Hand Landmark Theory", "UX Design"],
    challenges:
      "Ensuring accurate landmark detection across varying lighting environments and managing hand occlusions during complex joint rotations.",
    learningOutcomes: [
      "Deep dive into hand landmark topology and spatial coordinates",
      "Understanding clinical compliance in physical therapy workflows",
      "Structuring modular project phases for academic research"
    ],
    githubUrl: "https://github.com/varsha-1106",
    visualType: "pose-tracking",
    keyMetrics: [
      { label: "Focus", value: "Hand & Wrist Joint Tracking" },
      { label: "Domain", value: "Assistive Healthcare" },
      { label: "Phase", value: "Active Development" }
    ]
  },
  {
    id: "smart-safety-footwear",
    number: "03",
    title: "Adaptive AI Based Smart Safety Footwear",
    subtitle: "Wearable safety exploration leveraging embedded hardware and sensory alerts",
    category: "Embedded Systems & IoT",
    status: "Mini-Project",
    period: "Academic Mini-Project",
    problemStatement:
      "Navigating hazardous, conflict-adjacent or unmapped terrains exposes patrol personnel and field teams to buried antipersonnel hazards without immediate localized proximity warnings.",
    proposedSolution:
      "A conceptual wearable boot system exploring embedded proximity sensors, telemetry transmission, and localized haptic/audio alerts to detect metal anomalies beneath the ground plane prior to step impact.",
    myContribution:
      "Participated in sensor selection research, power-budgeting calculations, conceptual casing layout, and project documentation for department review.",
    technologies: ["Hardware / Embedded Concepts", "Sensor Integration", "Prototyping", "Technical Documentation"],
    challenges:
      "Balancing physical weight and power requirements on a wearable foot unit while maintaining reliable sensory responsiveness.",
    learningOutcomes: [
      "Hands-on exposure to embedded hardware design constraints",
      "Experience cross-referencing sensor specs with real-world terrain variables",
      "Team collaboration on hardware-software interfaces"
    ],
    githubUrl: "https://github.com/varsha-1106",
    visualType: "sensor-radar",
    keyMetrics: [
      { label: "Form Factor", value: "Wearable Footwear" },
      { label: "Type", value: "Academic Exploration" },
      { label: "Status", value: "Hardware Architecture" }
    ]
  },
  {
    id: "colour-name-recognizer",
    number: "04",
    title: "Colour Name Recognizer",
    subtitle: "Interactive computer vision tool translating RGB pixel inputs into precise nomenclature",
    category: "Computer Vision & Python",
    status: "Completed",
    period: "Individual Beginner Project",
    problemStatement:
      "Identifying exact shades, standardized color codes, and human-readable names across diverse digital palettes is difficult by visual estimation alone.",
    proposedSolution:
      "A Python-based utility that maps pixel coordinates from images, calculates color distances against standardized RGB datasets, and returns the nearest recognized color name and HEX/RGB values in real time.",
    myContribution:
      "Independently implemented image loading, pixel sampling logic, color difference distance calculation, and interactive terminal/window display.",
    technologies: ["Python", "OpenCV Basics", "Pandas", "Color Mathematics"],
    challenges:
      "Calibrating Euclidean distance metrics across RGB space to find natural closest-match names accurately.",
    learningOutcomes: [
      "Practical experience with pixel arrays and image coordinates in Python",
      "Hands-on data handling with Pandas for structured color lookup tables",
      "Completion of an end-to-end coding project from scratch"
    ],
    githubUrl: "https://github.com/varsha-1106",
    visualType: "color-spectrum",
    keyMetrics: [
      { label: "Type", value: "Individual Build" },
      { label: "Stack", value: "Python / Data Lookup" },
      { label: "Status", value: "Complete Foundation" }
    ]
  }
];
