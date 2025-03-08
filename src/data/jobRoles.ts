
export interface Skill {
  id: string;
  name: string;
  category: string;
}

export interface JobRole {
  id: string;
  title: string;
  description: string;
  category: string;
  skills: Skill[];
}

const jobRoles: JobRole[] = [
  // Cloud Computing
  {
    id: 'cloud-architect',
    title: 'Cloud Architect',
    description: 'Design and implement cloud infrastructure solutions for organizations.',
    category: 'Cloud Computing',
    skills: [
      { id: 'aws', name: 'AWS', category: 'Cloud Platform' },
      { id: 'azure', name: 'Microsoft Azure', category: 'Cloud Platform' },
      { id: 'gcp', name: 'Google Cloud Platform', category: 'Cloud Platform' },
      { id: 'terraform', name: 'Terraform', category: 'Infrastructure as Code' },
      { id: 'cloudformation', name: 'CloudFormation', category: 'Infrastructure as Code' },
      { id: 'kubernetes', name: 'Kubernetes', category: 'Container Orchestration' },
      { id: 'docker', name: 'Docker', category: 'Containerization' },
      { id: 'microservices', name: 'Microservices Architecture', category: 'Architecture' },
      { id: 'security', name: 'Cloud Security', category: 'Security' },
      { id: 'networking', name: 'Networking', category: 'Infrastructure' },
      { id: 'load-balancing', name: 'Load Balancing', category: 'Infrastructure' },
      { id: 'ci-cd', name: 'CI/CD Pipelines', category: 'DevOps' }
    ]
  },
  {
    id: 'cloud-engineer',
    title: 'Cloud Engineer',
    description: 'Build and maintain cloud infrastructure and services.',
    category: 'Cloud Computing',
    skills: [
      { id: 'aws', name: 'AWS', category: 'Cloud Platform' },
      { id: 'azure', name: 'Microsoft Azure', category: 'Cloud Platform' },
      { id: 'linux', name: 'Linux', category: 'Operating System' },
      { id: 'python', name: 'Python', category: 'Programming' },
      { id: 'docker', name: 'Docker', category: 'Containerization' },
      { id: 'terraform', name: 'Terraform', category: 'Infrastructure as Code' },
      { id: 'ansible', name: 'Ansible', category: 'Configuration Management' },
      { id: 'networking', name: 'Networking', category: 'Infrastructure' },
      { id: 'monitoring', name: 'Monitoring Tools', category: 'Operations' },
      { id: 'bash', name: 'Bash Scripting', category: 'Scripting' }
    ]
  },
  
  // AI/ML
  {
    id: 'ml-engineer',
    title: 'Machine Learning Engineer',
    description: 'Develop machine learning models and deploy them into production.',
    category: 'AI/ML',
    skills: [
      { id: 'python', name: 'Python', category: 'Programming' },
      { id: 'tensorflow', name: 'TensorFlow', category: 'ML Framework' },
      { id: 'pytorch', name: 'PyTorch', category: 'ML Framework' },
      { id: 'sklearn', name: 'Scikit-learn', category: 'ML Library' },
      { id: 'ml-algorithms', name: 'ML Algorithms', category: 'Machine Learning' },
      { id: 'deep-learning', name: 'Deep Learning', category: 'Machine Learning' },
      { id: 'data-processing', name: 'Data Processing', category: 'Data' },
      { id: 'feature-engineering', name: 'Feature Engineering', category: 'Data' },
      { id: 'mlops', name: 'MLOps', category: 'Operations' },
      { id: 'docker', name: 'Docker', category: 'Containerization' },
      { id: 'statistics', name: 'Statistics', category: 'Mathematics' },
      { id: 'sql', name: 'SQL', category: 'Database' }
    ]
  },
  {
    id: 'data-scientist',
    title: 'Data Scientist',
    description: 'Extract insights from data using statistical and machine learning methods.',
    category: 'AI/ML',
    skills: [
      { id: 'python', name: 'Python', category: 'Programming' },
      { id: 'r', name: 'R', category: 'Programming' },
      { id: 'statistics', name: 'Statistics', category: 'Mathematics' },
      { id: 'ml-algorithms', name: 'ML Algorithms', category: 'Machine Learning' },
      { id: 'data-visualization', name: 'Data Visualization', category: 'Visualization' },
      { id: 'sql', name: 'SQL', category: 'Database' },
      { id: 'pandas', name: 'Pandas', category: 'Data Analysis' },
      { id: 'numpy', name: 'NumPy', category: 'Computation' },
      { id: 'jupyter', name: 'Jupyter Notebooks', category: 'Development' },
      { id: 'experiment-design', name: 'Experiment Design', category: 'Research' },
      { id: 'etl', name: 'ETL', category: 'Data Engineering' }
    ]
  },
  
  // Data Analytics
  {
    id: 'data-analyst',
    title: 'Data Analyst',
    description: 'Analyze data to help organizations make better business decisions.',
    category: 'Data Analytics',
    skills: [
      { id: 'sql', name: 'SQL', category: 'Database' },
      { id: 'excel', name: 'Excel', category: 'Spreadsheet' },
      { id: 'tableau', name: 'Tableau', category: 'Visualization' },
      { id: 'power-bi', name: 'Power BI', category: 'Visualization' },
      { id: 'python', name: 'Python', category: 'Programming' },
      { id: 'r', name: 'R', category: 'Programming' },
      { id: 'statistics', name: 'Statistics', category: 'Mathematics' },
      { id: 'data-cleaning', name: 'Data Cleaning', category: 'Data Preparation' },
      { id: 'communication', name: 'Communication', category: 'Soft Skills' },
      { id: 'critical-thinking', name: 'Critical Thinking', category: 'Soft Skills' }
    ]
  },
  {
    id: 'business-intelligence',
    title: 'Business Intelligence Analyst',
    description: 'Develop and maintain BI solutions to transform data into actionable insights.',
    category: 'Data Analytics',
    skills: [
      { id: 'sql', name: 'SQL', category: 'Database' },
      { id: 'power-bi', name: 'Power BI', category: 'Visualization' },
      { id: 'tableau', name: 'Tableau', category: 'Visualization' },
      { id: 'data-warehousing', name: 'Data Warehousing', category: 'Data Management' },
      { id: 'etl', name: 'ETL Processes', category: 'Data Engineering' },
      { id: 'data-modeling', name: 'Data Modeling', category: 'Database Design' },
      { id: 'excel', name: 'Excel', category: 'Spreadsheet' },
      { id: 'dashboard-design', name: 'Dashboard Design', category: 'Visualization' },
      { id: 'business-acumen', name: 'Business Acumen', category: 'Business' },
      { id: 'requirement-gathering', name: 'Requirement Gathering', category: 'Analysis' }
    ]
  },
  
  // Aerospace/Aeronautical
  {
    id: 'aerospace-engineer',
    title: 'Aerospace Engineer',
    description: 'Design aircraft, spacecraft, satellites, and missiles.',
    category: 'Aerospace',
    skills: [
      { id: 'cad', name: 'CAD Software', category: 'Design' },
      { id: 'aerodynamics', name: 'Aerodynamics', category: 'Physics' },
      { id: 'structural-analysis', name: 'Structural Analysis', category: 'Engineering' },
      { id: 'matlab', name: 'MATLAB', category: 'Computation' },
      { id: 'fea', name: 'Finite Element Analysis', category: 'Simulation' },
      { id: 'computational-fluid-dynamics', name: 'Computational Fluid Dynamics', category: 'Simulation' },
      { id: 'materials-science', name: 'Materials Science', category: 'Engineering' },
      { id: 'propulsion', name: 'Propulsion Systems', category: 'Engineering' },
      { id: 'avionics', name: 'Avionics', category: 'Electronics' },
      { id: 'systems-engineering', name: 'Systems Engineering', category: 'Engineering' }
    ]
  },
  
  // Business
  {
    id: 'product-manager',
    title: 'Product Manager',
    description: 'Define the vision, strategy, and roadmap for products.',
    category: 'Business',
    skills: [
      { id: 'product-strategy', name: 'Product Strategy', category: 'Strategy' },
      { id: 'user-research', name: 'User Research', category: 'Research' },
      { id: 'market-analysis', name: 'Market Analysis', category: 'Research' },
      { id: 'roadmapping', name: 'Roadmapping', category: 'Planning' },
      { id: 'agile', name: 'Agile Methodologies', category: 'Project Management' },
      { id: 'user-stories', name: 'User Stories', category: 'Requirements' },
      { id: 'wireframing', name: 'Wireframing', category: 'Design' },
      { id: 'analytics', name: 'Analytics', category: 'Data' },
      { id: 'stakeholder-management', name: 'Stakeholder Management', category: 'Communication' },
      { id: 'presentation', name: 'Presentation Skills', category: 'Communication' },
      { id: 'technical-knowledge', name: 'Technical Knowledge', category: 'Technical' }
    ]
  },
  {
    id: 'project-manager',
    title: 'Project Manager',
    description: 'Plan, execute, and close projects to achieve specific goals and success criteria.',
    category: 'Business',
    skills: [
      { id: 'project-planning', name: 'Project Planning', category: 'Planning' },
      { id: 'risk-management', name: 'Risk Management', category: 'Management' },
      { id: 'agile', name: 'Agile Methodologies', category: 'Methodologies' },
      { id: 'waterfall', name: 'Waterfall Methodology', category: 'Methodologies' },
      { id: 'scrum', name: 'Scrum', category: 'Frameworks' },
      { id: 'kanban', name: 'Kanban', category: 'Frameworks' },
      { id: 'budget-management', name: 'Budget Management', category: 'Finance' },
      { id: 'communication', name: 'Communication', category: 'Soft Skills' },
      { id: 'leadership', name: 'Leadership', category: 'Soft Skills' },
      { id: 'negotiation', name: 'Negotiation', category: 'Soft Skills' },
      { id: 'ms-project', name: 'Microsoft Project', category: 'Tools' },
      { id: 'jira', name: 'JIRA', category: 'Tools' }
    ]
  }
];

export default jobRoles;
