export type LinkItem = {
  label: string;
  href: string;
  kind?: "primary" | "secondary";
  tooltip?: string;
  disabled?: boolean;
};

export type Profile = {
  name: string;
  title: string;
  affiliation: string;
  location: string;
  email: string;
  summary: string;
  availability: string;
  headshot: string;
  cvUrl: string;
  links: LinkItem[];
};

export type ResearchArea = {
  title: string;
  summary: string;
  keywords: string[];
  relatedProjects: string[];
};

export type Experience = {
  type: "Research" | "Industry" | "Teaching" | "Leadership";
  institution: string;
  logo?: string;
  lab?: string;
  advisor?: string;
  role: string;
  start: string;
  end: string;
  summary: string;
  outcomes: string[];
};

export type Project = {
  title: string;
  authors: string;
  venue: string;
  year: string;
  role: string;
  abstract: string;
  tags: string[];
  links: LinkItem[];
  thumbnail: string;
};

export type Publication = {
  title: string;
  /** Comma-separated full author list. */
  authors: string;
  /** Profile owner's name to emphasize (bold). */
  highlight?: string;
  /** Map of author name -> superscript marker(s), e.g. { "Jiadong Zhang": "*" }. */
  authorMarks?: Record<string, string>;
  /** Footnote legend lines, e.g. ["* Equal contribution", "† Corresponding author"]. */
  legend?: string[];
  venueTag?: string;
  venueNote?: string;
  year: string;
  thumbnail?: string;
  stars?: number;
  links: LinkItem[];
};

export type NewsItem = {
  date: string;
  text: string;
  link?: LinkItem;
  highlight?: boolean;
};

export type SimpleEntry = {
  date: string;
  title: string;
  organization: string;
  description?: string;
  logo?: string;
};

export type SkillGroup = {
  title: string;
  items: string[];
};
