
export interface Course {
  id: string;
  title: string;
  provider: string;
  description: string;
  skills: string[];
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  url: string;
  rating: number;
}

const courses: Course[] = [
  // AWS Courses
  {
    id: "aws-certified-solutions-architect",
    title: "AWS Certified Solutions Architect",
    provider: "Amazon Web Services",
    description: "Learn to design and deploy scalable, highly available systems on AWS. This course covers key AWS services and best practices for building secure and reliable applications.",
    skills: ["AWS", "Cloud Architecture", "Security", "Networking"],
    level: "Intermediate",
    duration: "40 hours",
    url: "https://aws.amazon.com/training/learn-about/architect/",
    rating: 4.8
  },
  {
    id: "aws-certified-developer",
    title: "AWS Certified Developer",
    provider: "Amazon Web Services",
    description: "Develop, deploy, and debug cloud-based applications using AWS. Learn how to write code that optimizes AWS services and implement AWS security best practices.",
    skills: ["AWS", "Cloud Development", "Security", "Lambda"],
    level: "Intermediate",
    duration: "30 hours",
    url: "https://aws.amazon.com/training/learn-about/developer/",
    rating: 4.7
  },
  
  // Azure Courses
  {
    id: "azure-fundamentals",
    title: "Microsoft Azure Fundamentals",
    provider: "Microsoft",
    description: "Build foundational knowledge of cloud services and how those services are provided with Microsoft Azure. Learn cloud concepts, core Azure services, security, privacy, compliance, and trust.",
    skills: ["Azure", "Cloud Computing", "Security"],
    level: "Beginner",
    duration: "8 hours",
    url: "https://learn.microsoft.com/en-us/training/paths/az-900-describe-cloud-concepts/",
    rating: 4.6
  },
  {
    id: "azure-administrator",
    title: "Microsoft Azure Administrator",
    provider: "Microsoft",
    description: "Learn how to implement, monitor, and maintain Microsoft Azure solutions, including major services related to compute, storage, network, and security.",
    skills: ["Azure", "Cloud Administration", "Networking", "Security"],
    level: "Intermediate",
    duration: "40 hours",
    url: "https://learn.microsoft.com/en-us/training/paths/az-104-administrator-prerequisites/",
    rating: 4.7
  },
  
  // GCP Courses
  {
    id: "gcp-fundamentals",
    title: "Google Cloud Fundamentals",
    provider: "Google Cloud",
    description: "Gain an overview of Google Cloud Platform and a detailed look at the essential features. Learn about computing, storage, networking, security, and more.",
    skills: ["Google Cloud Platform", "Cloud Computing"],
    level: "Beginner",
    duration: "10 hours",
    url: "https://cloud.google.com/training/courses/fundamentals",
    rating: 4.5
  },
  
  // Infrastructure as Code
  {
    id: "terraform-fundamentals",
    title: "Terraform Fundamentals",
    provider: "HashiCorp",
    description: "Learn how to use Terraform to automate infrastructure deployment. This course covers Terraform basics, configuration language, providers, and best practices.",
    skills: ["Terraform", "Infrastructure as Code", "DevOps"],
    level: "Beginner",
    duration: "6 hours",
    url: "https://learn.hashicorp.com/collections/terraform/certification",
    rating: 4.9
  },
  
  // Containerization
  {
    id: "docker-kubernetes-fundamentals",
    title: "Docker and Kubernetes Fundamentals",
    provider: "Linux Foundation",
    description: "Learn containerization with Docker and orchestration with Kubernetes. This course covers container creation, management, deployment strategies, and scaling.",
    skills: ["Docker", "Kubernetes", "Containerization", "Microservices"],
    level: "Intermediate",
    duration: "25 hours",
    url: "https://training.linuxfoundation.org/training/kubernetes-fundamentals/",
    rating: 4.7
  },
  
  // Machine Learning
  {
    id: "machine-learning-specialization",
    title: "Machine Learning Specialization",
    provider: "Coursera (Stanford University)",
    description: "Learn fundamental AI concepts and develop practical machine learning skills. This course covers supervised learning, unsupervised learning, and best practices in machine learning.",
    skills: ["Python", "Machine Learning", "Supervised Learning", "Unsupervised Learning"],
    level: "Intermediate",
    duration: "60 hours",
    url: "https://www.coursera.org/specializations/machine-learning-introduction",
    rating: 4.9
  },
  {
    id: "deep-learning-specialization",
    title: "Deep Learning Specialization",
    provider: "Coursera (DeepLearning.AI)",
    description: "Master deep learning techniques and build neural networks. Learn about CNNs, RNNs, LSTM, and how to lead successful machine learning projects.",
    skills: ["Deep Learning", "Neural Networks", "TensorFlow", "PyTorch"],
    level: "Intermediate",
    duration: "80 hours",
    url: "https://www.coursera.org/specializations/deep-learning",
    rating: 4.8
  },
  {
    id: "tensorflow-developer",
    title: "TensorFlow Developer Certificate",
    provider: "TensorFlow",
    description: "Develop deep learning applications with TensorFlow. Learn how to build and train neural networks for computer vision, NLP, and time series forecasting.",
    skills: ["TensorFlow", "Neural Networks", "Deep Learning", "Computer Vision"],
    level: "Intermediate",
    duration: "50 hours",
    url: "https://www.tensorflow.org/certificate",
    rating: 4.7
  },
  
  // Data Analysis
  {
    id: "data-analysis-with-python",
    title: "Data Analysis with Python",
    provider: "IBM",
    description: "Learn how to analyze data using Python. This course covers data wrangling, exploratory data analysis, model development, and evaluation using Python libraries.",
    skills: ["Python", "Pandas", "NumPy", "Data Visualization"],
    level: "Beginner",
    duration: "20 hours",
    url: "https://www.coursera.org/learn/data-analysis-with-python",
    rating: 4.6
  },
  {
    id: "sql-for-data-analysis",
    title: "SQL for Data Analysis",
    provider: "Udacity",
    description: "Learn SQL fundamentals for analyzing data. This course covers data manipulation, aggregations, subqueries, window functions, and joins.",
    skills: ["SQL", "Database", "Data Analysis"],
    level: "Beginner",
    duration: "15 hours",
    url: "https://www.udacity.com/course/sql-for-data-analysis--ud198",
    rating: 4.5
  },
  
  // Data Visualization
  {
    id: "tableau-analyst",
    title: "Tableau Desktop Specialist",
    provider: "Tableau",
    description: "Learn how to create effective visualizations with Tableau. This course covers creating basic to complex visualizations, calculations, and dashboards.",
    skills: ["Tableau", "Data Visualization", "Dashboard Design"],
    level: "Beginner",
    duration: "25 hours",
    url: "https://www.tableau.com/learn/certification/desktop-specialist",
    rating: 4.7
  },
  {
    id: "power-bi-data-analyst",
    title: "Microsoft Power BI Data Analyst",
    provider: "Microsoft",
    description: "Learn how to build and implement Power BI solutions. This course covers data preparation, modeling, visualization, and analysis with Power BI.",
    skills: ["Power BI", "Data Modeling", "DAX", "Data Visualization"],
    level: "Intermediate",
    duration: "30 hours",
    url: "https://learn.microsoft.com/en-us/training/paths/power-bi-data-analyst/",
    rating: 4.8
  },
  
  // Aerospace Engineering
  {
    id: "flight-dynamics-control",
    title: "Flight Dynamics and Control",
    provider: "edX (MIT)",
    description: "Learn the principles of flight dynamics and control systems for aircraft. This course covers aerodynamics, stability, control laws, and simulation.",
    skills: ["Aerodynamics", "Control Systems", "MATLAB", "Simulation"],
    level: "Advanced",
    duration: "45 hours",
    url: "https://www.edx.org/professional-certificate/mitx-system-engineering",
    rating: 4.8
  },
  {
    id: "computational-fluid-dynamics",
    title: "Computational Fluid Dynamics",
    provider: "Coursera (University of Colorado Boulder)",
    description: "Learn numerical simulation techniques for fluid flow. This course covers governing equations, discretization methods, turbulence modeling, and CFD software usage.",
    skills: ["Computational Fluid Dynamics", "Numerical Methods", "Simulation"],
    level: "Advanced",
    duration: "40 hours",
    url: "https://www.coursera.org/learn/computational-fluid-dynamics",
    rating: 4.6
  },
  
  // Product Management
  {
    id: "product-management-fundamentals",
    title: "Product Management Fundamentals",
    provider: "Product School",
    description: "Learn the fundamentals of product management. This course covers product strategy, roadmapping, user research, and product development methodologies.",
    skills: ["Product Strategy", "Roadmapping", "User Research", "Agile"],
    level: "Beginner",
    duration: "30 hours",
    url: "https://productschool.com/product-management-certification/",
    rating: 4.7
  },
  
  // Project Management
  {
    id: "pmp-certification",
    title: "Project Management Professional (PMP)",
    provider: "PMI",
    description: "Prepare for the PMP certification exam. This course covers project management frameworks, methodologies, and best practices across various industries.",
    skills: ["Project Planning", "Risk Management", "Stakeholder Management", "Agile"],
    level: "Advanced",
    duration: "60 hours",
    url: "https://www.pmi.org/certifications/project-management-pmp",
    rating: 4.8
  },
  {
    id: "agile-scrum-master",
    title: "Certified ScrumMaster (CSM)",
    provider: "Scrum Alliance",
    description: "Learn Scrum framework and practices for agile project management. This course covers Scrum roles, events, artifacts, and implementation.",
    skills: ["Scrum", "Agile", "Team Facilitation", "Sprint Planning"],
    level: "Intermediate",
    duration: "16 hours",
    url: "https://www.scrumalliance.org/get-certified/scrum-master-track/certified-scrummaster",
    rating: 4.6
  }
];

export default courses;
