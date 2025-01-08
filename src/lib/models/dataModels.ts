type Diploma = {
  id: number;
  title: string;
  school_establishment: string;
  date_obtained: string;
  description: string;
};

type Project = {
  id: number;
  type: string;
  name: string;
  image: string;
  alt: string;
  description: string;
  url: string;
  tools: string[];
  stacks: string[];
  date_debut: string;
  date_fin: string;
};

export type Tool = {
  id: number;
  name: string;
  type: string;
  language: string;
  description: string;
  current_version: string;
  license: string;
  repository_url: string;
  official_website: string;
  created_at: string;
  maintained_by: string;
  status: string;
  popularity_score: number;
  tags: string[];
  dependencies: string[];
  ecosystem: string[];
  logo_url: string;
};

export type Stack = Tool & {
  is_mastered: boolean;
};

export type Diplomas = Diploma[];
export type Projects = Project[];
export type SideProjects = Project[];
export type Stacks = Stack[];
export type Tools = Tool[];
