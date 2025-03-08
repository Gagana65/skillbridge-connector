
export interface Skill {
  id: string;
  name: string;
  category: string;
  importance: number; // 1-10 scale, 10 being most important
}

export interface JobRole {
  id: string;
  title: string;
  category: string;
  description: string;
  skills: Skill[];
  icon: string;
}

const jobRoles: JobRole[] = [
  {
    id: "cloud-architect",
    title: "Cloud Architect",
    category: "Cloud Computing",
    description: "Design and oversee cloud computing strategies and infrastructure.",
    icon: "cloud",
    skills: [
      { id: "aws", name: "AWS", category: "Cloud", importance: 10 },
      { id: "azure", name: "Microsoft Azure", category: "Cloud", importance: 9 },
      { id: "gcp", name: "Google Cloud Platform", category: "Cloud", importance: 8 },
      { id: "docker", name: "Docker", category: "Containerization", importance: 9 },
      { id: "kubernetes", name: "Kubernetes", category: "Orchestration", importance: 9 },
      { id: "terraform", name: "Terraform", category: "IaC", importance: 8 },
      { id: "cloudformation", name: "CloudFormation", category: "IaC", importance: 7 },
      { id: "networking", name: "Cloud Networking", category: "Infrastructure", importance: 9 },
      { id: "security", name: "Cloud Security", category: "Security", importance: 10 },
      { id: "cicd", name: "CI/CD Pipelines", category: "DevOps", importance: 8 },
    ]
  },
  {
    id: "data-scientist",
    title: "Data Scientist",
    category: "Data Analytics",
    description: "Analyze and interpret complex data to inform business decisions.",
    icon: "bar-chart-2",
    skills: [
      { id: "python", name: "Python", category: "Programming", importance: 10 },
      { id: "r", name: "R", category: "Programming", importance: 7 },
      { id: "sql", name: "SQL", category: "Data Management", importance: 9 },
      { id: "statistics", name: "Statistical Analysis", category: "Analysis", importance: 10 },
      { id: "ml", name: "Machine Learning", category: "AI", importance: 9 },
      { id: "data-viz", name: "Data Visualization", category: "Visualization", importance: 8 },
      { id: "big-data", name: "Big Data Technologies", category: "Data", importance: 7 },
      { id: "pandas", name: "Pandas", category: "Data Wrangling", importance: 9 },
      { id: "numpy", name: "NumPy", category: "Computation", importance: 8 },
      { id: "tableau", name: "Tableau", category: "Visualization", importance: 7 },
    ]
  },
  {
    id: "ml-engineer",
    title: "Machine Learning Engineer",
    category: "AIML",
    description: "Develop and deploy machine learning models for production.",
    icon: "brain",
    skills: [
      { id: "python", name: "Python", category: "Programming", importance: 10 },
      { id: "ml-algorithms", name: "ML Algorithms", category: "AI", importance: 10 },
      { id: "deep-learning", name: "Deep Learning", category: "AI", importance: 9 },
      { id: "tensorflow", name: "TensorFlow", category: "Frameworks", importance: 9 },
      { id: "pytorch", name: "PyTorch", category: "Frameworks", importance: 8 },
      { id: "nlp", name: "Natural Language Processing", category: "AI", importance: 7 },
      { id: "computer-vision", name: "Computer Vision", category: "AI", importance: 7 },
      { id: "mlops", name: "MLOps", category: "Operations", importance: 8 },
      { id: "model-deployment", name: "Model Deployment", category: "Operations", importance: 9 },
      { id: "feature-engineering", name: "Feature Engineering", category: "Data", importance: 8 },
    ]
  },
  {
    id: "aerospace-engineer",
    title: "Aerospace Engineer",
    category: "Aerospace",
    description: "Design and test aircraft, spacecraft, and related systems.",
    icon: "plane",
    skills: [
      { id: "cad", name: "CAD Software", category: "Design", importance: 9 },
      { id: "fea", name: "Finite Element Analysis", category: "Analysis", importance: 9 },
      { id: "cfd", name: "Computational Fluid Dynamics", category: "Analysis", importance: 9 },
      { id: "materials", name: "Materials Science", category: "Engineering", importance: 8 },
      { id: "propulsion", name: "Propulsion Systems", category: "Engineering", importance: 8 },
      { id: "avionics", name: "Avionics", category: "Electronics", importance: 7 },
      { id: "systems-engineering", name: "Systems Engineering", category: "Engineering", importance: 9 },
      { id: "matlab", name: "MATLAB", category: "Computation", importance: 8 },
      { id: "project-management", name: "Project Management", category: "Management", importance: 7 },
      { id: "testing", name: "Testing Methodologies", category: "QA", importance: 8 },
    ]
  },
  {
    id: "product-manager",
    title: "Product Manager",
    category: "Business",
    description: "Oversee product development from conception to launch.",
    icon: "briefcase",
    skills: [
      { id: "product-strategy", name: "Product Strategy", category: "Strategy", importance: 10 },
      { id: "ux", name: "User Experience", category: "Design", importance: 9 },
      { id: "market-research", name: "Market Research", category: "Research", importance: 9 },
      { id: "agile", name: "Agile Methodologies", category: "Process", importance: 8 },
      { id: "roadmapping", name: "Product Roadmapping", category: "Planning", importance: 9 },
      { id: "stakeholder-management", name: "Stakeholder Management", category: "Communication", importance: 8 },
      { id: "data-analysis", name: "Data Analysis", category: "Analysis", importance: 8 },
      { id: "presentation", name: "Presentation Skills", category: "Communication", importance: 7 },
      { id: "project-management", name: "Project Management", category: "Management", importance: 8 },
      { id: "technical-understanding", name: "Technical Understanding", category: "Knowledge", importance: 7 },
    ]
  }
];

export default jobRoles;
