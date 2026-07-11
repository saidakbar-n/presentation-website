export interface JourneyStep {
  id: string;
  year: string;
  title: string;
  subtitle: string;
  description: string;
  image?: string;
  icon: string;
}

export interface Project {
  id: string;
  name: string;
  role: string;
  tagline: string;
  description: string;
  technologies: string[];
  lessons: string[];
  impact: string;
  gradient: string;
  accent: string;
  url?: string;
}

export interface PhilosophyPillar {
  id: string;
  title: string;
  summary: string;
  description: string;
  icon: string;
}

export interface CoreValue {
  id: string;
  title: string;
  story: string;
}

export interface FutureMilestone {
  year: string;
  title: string;
  description: string;
}

export interface PersonalInterest {
  id: string;
  title: string;
  description: string;
  image?: string;
  imageClassName?: string;
}
