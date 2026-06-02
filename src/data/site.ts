import type {
  Experience,
  NewsItem,
  Profile,
  Publication,
  ResearchArea,
  SkillGroup,
  SimpleEntry,
} from "../types";

export const profile: Profile = {
  name: "Jiadong Zhang",
  title: "MSAIE in ECE Student at Carnegie Mellon University",
  affiliation: "Carnegie Mellon University, Electrical and Computer Engineering",
  location: "Pittsburgh, PA",
  email: "jiadongzhangtony@gmail.com",
  summary:
    "I work on edge-deployable multimodal reasoning, spatial world models, and robust machine learning systems for complex visual and environmental data. My research connects model compression, vision-language evaluation, geospatial analysis, and reproducible research engineering.",
  availability:
    "Open to research conversations around multimodal AI, robotics perception, model robustness, and deployable machine learning systems.",
  headshot: "headshot.jpg",
  cvUrl: "",
  links: [
    { label: "Email", href: "mailto:jiadongzhangtony@gmail.com", kind: "primary" },
    {
      label: "CV",
      href: "",
      kind: "primary",
      tooltip: "CV content will be updated soon.",
      disabled: true,
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/tonyzhangjd",
      kind: "primary",
    },
    {
      label: "Google Scholar",
      href: "https://scholar.google.com/citations?user=K3TplTAAAAAJ&hl=en",
      kind: "primary",
    },
  ],
};

export const researchOverview = {
  eyebrow: "Research",
  title:
    "Building reliable multimodal intelligence for long-horizon reasoning and planning.",
  lede:
    "I am broadly interested in building multimodal foundation-model systems that can reason, predict, and make reliable decisions in complex, partially observable, and interactive environments. My research currently focuses on three closely connected directions:",
  closing:
    "Across these directions, my research studies why current models fail in complex sequential tasks — through state drift, compounding errors, sparse feedback, and unreliable future prediction — and develops better representations, training signals, and predictive models to improve reliability in complex interactive settings.",
};

export const researchAreas: ResearchArea[] = [
  {
    title: "Dynamic multimodal state representations",
    summary:
      "Stable, continuously updated state understanding for long-horizon reasoning, counterfactual reasoning, and adaptation.",
    keywords: ["state-level alignment", "latent state update", "task-conditioned tracking"],
    relatedProjects: ["multimodal belief state", "planning-oriented representation"],
  },
  {
    title: "Verifiable RL post-training",
    summary:
      "Step-level and process-level rewards for reliable multi-step reasoning, planning, and reduced compounding errors.",
    keywords: ["process reward models", "step-level verification", "GRPO / PPO"],
    relatedProjects: ["trajectory reliability", "reward-hacking mitigation"],
  },
  {
    title: "Predictive world models",
    summary:
      "Diverse, calibrated future-state prediction for uncertainty-aware planning, replanning, and decision-making.",
    keywords: ["future rollout", "counterfactual simulation", "uncertainty estimation"],
    relatedProjects: ["latent dynamics", "calibrated future-state hypotheses"],
  },
];

export const researchApplications: string[] = [
  "Agentic Systems",
  "Digital Environments",
  "Interactive Tasks",
  "Scientific Workflows",
  "Real-World Settings",
];

export const news: NewsItem[] = [
  {
    date: "2026-06",
    text: "Launched this academic personal website as an additional information hub for research interests, selected projects, and CV materials.",
    highlight: true,
  },
  {
    date: "2026",
    text: "RAD: A Dataset and Benchmark for Real-Life Anomaly Detection with Robotic Observations listed as an arXiv preprint.",
  },
  {
    date: "2025-08",
    text: "Started MSAIE study in Electrical and Computer Engineering at Carnegie Mellon University.",
  },
  {
    date: "2025-06",
    text: "Completed B.S. in Computer Science at the University of Washington Paul G. Allen School.",
  },
];

export const experiences: Experience[] = [
  {
    type: "Research",
    institution: "Carnegie Mellon University",
    logo: "logos/cmu.png",
    lab: "AirLab at CMU",
    advisor: "Sebastian Scherer",
    role: "Researcher, QuantUFM",
    start: "Aug 2025",
    end: "Present",
    summary:
      "Working on quantization methods for edge-deployable multimodal reasoning, with a focus on preserving dense feature matching fidelity under compression.",
    outcomes: [
      "Performed layer-wise sensitivity analysis to identify failure-critical layers and establish a mixed-precision baseline.",
      "Designed a post-training quantization framework combining rotation-based outlier suppression with channel-wise smoothing.",
      "Developed task-aware calibration and token pruning/merging strategies targeting 2-3x acceleration while maintaining visual odometry trajectory accuracy.",
    ],
  },
  {
    type: "Research",
    institution: "MIT Media Lab",
    logo: "logos/mit.png",
    lab: "Media Lab",
    advisor: "Paul Liang",
    role: "Research Assistant, RAD",
    start: "Jun 2025",
    end: "Dec 2025",
    summary:
      "Built a 3D spatial world model benchmark for complex environment perception using robot-captured multi-view observations.",
    outcomes: [
      "Engineered a robot-captured multi-view pipeline for evaluating reasoning across 68-view trajectories.",
      "Built a scalable pixel-level supervision protocol for consistent masks and robust spatial grounding.",
      "Implemented a reproducible benchmark suite for VLM baselines including Qwen2.5-VL and analyzed 3D/VLM failure modes.",
    ],
  },
  {
    type: "Research",
    institution: "University of Washington",
    logo: "logos/uw.png",
    advisor: "Nicoleta Cristea",
    role: "Research Assistant, Skagit-Met",
    start: "Jun 2024",
    end: "Sept 2024",
    summary:
      "Evaluated hydrologic model validation and robustness using meteorological and geospatial data analysis.",
    outcomes: [
      "Conducted calibration and sensitivity analyses for the Distributed Hydrology Soil Vegetation Model.",
      "Processed multi-dimensional geospatial data in Python to improve data alignment and model reliability.",
      "Applied bias correction and WRF simulations, achieving an 11% error reduction and 23% accuracy increase.",
    ],
  },
  {
    type: "Research",
    institution: "University of Washington",
    logo: "logos/uw.png",
    advisor: "Nicoleta Cristea",
    role: "Research Assistant, HLS-SCA",
    start: "Jan 2024",
    end: "Jun 2024",
    summary:
      "Worked on multi-source geospatial modality fusion and snow cover mapping using machine learning models.",
    outcomes: [
      "Advanced from index-based mapping to a Random Forest classifier using NASA's HLS dataset.",
      "Developed a validation framework with a 25% improvement in detection accuracy and 15% reduction in prediction errors.",
      "Integrated Google Dynamic World and NASA-IBM Prithvi-100M outputs through multi-model consensus for snow cover prediction.",
    ],
  },
];

export const publications: Publication[] = [
  {
    title:
      "RAD: A Dataset and Benchmark for Real-Life Anomaly Detection with Robotic Observations",
    authors:
      "Kaichen Zhou, Xinhai Chang, Taewhan Kim, Jiadong Zhang, Yang Cao, Chufei Peng, Fangneng Zhan, Hao Zhao, Hao Dong, Kai Ming Ting, Ye Zhu",
    highlight: "Jiadong Zhang",
    venueTag: "arXiv 2026",
    year: "2026",
    thumbnail: "publications/rad-teaser.jpg",
    links: [
      { label: "Paper", href: "https://arxiv.org/abs/2410.00713" },
      { label: "Code", href: "https://github.com/kaichen-z/RAD" },
    ],
  },
];

export const education: SimpleEntry[] = [
  {
    date: "Aug 2025 - Present",
    title: "MSAIE in Electrical and Computer Engineering",
    organization: "Carnegie Mellon University",
    logo: "logos/cmu.png",
    description:
      "GPA: 4.0/4.0. Relevant coursework: Machine Learning, Computer Vision, Generative AI.",
  },
  {
    date: "Sept 2021 - Jun 2025",
    title: "B.S. in Computer Science",
    organization: "University of Washington Paul G. Allen School",
    logo: "logos/uw.png",
    description:
      "GPA: 3.97/4.0. Relevant coursework: Machine Learning, Database Systems, Algorithms and Data Structures, Data Management.",
  },
];

export const technicalSkills: SkillGroup[] = [
  {
    title: "Languages and Databases",
    items: [
      "Java",
      "C",
      "Python",
      "JavaScript",
      "TypeScript",
      "SQL",
      "Shell",
      "HTML",
      "CSS",
      "MySQL",
      "PostgreSQL",
      "Redis",
      "MongoDB",
    ],
  },
  {
    title: "DevOps and Cloud",
    items: ["Docker", "Kubernetes", "GitLab CI/CD", "AWS", "GCP", "Kafka"],
  },
  {
    title: "Frontend and Tools",
    items: ["React", "Redux", "Git", "Linux", "Maven", "IntelliJ IDEA"],
  },
];

export const awards: SimpleEntry[] = [
  {
    date: "All semesters",
    title: "Dean's Honor List",
    organization: "University of Washington",
    description: "Academic distinction during undergraduate study.",
  },
  {
    date: "Undergraduate",
    title: "Honors Undergraduate Research",
    organization: "University of Washington",
    description: "Recognition for undergraduate research engagement.",
  },
];

export const service: SimpleEntry[] = [
  {
    date: "Undergraduate",
    title: "Lead",
    organization: "Husky Coding Project",
    description: "Leadership experience listed in undergraduate activities.",
  },
];
