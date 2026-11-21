export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: string;
  status: "Ongoing" | "Completed" | "Hackathon Prototype" | "Mini-Project" | "Under Exploration";
  period?: string;
  problemStatement: string;
  proposedSolution: string;
  myContribution: string;
  technologies: string[];
  challenges: string;
  learningOutcomes: string[];
  githubUrl?: string;
  demoUrl?: string;
  visualType: "network-graph" | "pose-tracking" | "sensor-radar" | "emergency-alert" | "color-spectrum";
  keyMetrics?: { label: string; value: string }[];
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    level: string;
    context: string;
    icon?: string;
  }[];
}

export interface ActivityItem {
  id: string;
  role: string;
  organization: string;
  category: "Hackathon" | "Leadership" | "Academic" | "Editorial";
  summary: string;
  tags: string[];
  points: string[];
}

export interface LearningFocus {
  topic: string;
  level: string;
  description: string;
  inProgress: boolean;
}
