export const navLinks = [
  { id: "home", label: "Home" },
  { id: "education", label: "Education" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "responsibilities", label: "Roles" },
  { id: "skills", label: "Skills" },
  { id: "interests", label: "Research" },
  { id: "contact", label: "Contact" },
];

export const education = [
  {
    degree: "B.Sc (Honours) in  Data Science & Artificial Intelligence",
    institution: "Indian Institute of Technology - Guwahati (IIT-Guwahati)",
    period: "2023 - 2027",
    cpi: "7.65 / 10",
    color: "blue" as const,
  },
  {
    degree: "BE/BTech in Mechanical Engineering",
    institution: "Government Engineering College - Gandhinagar (GEC-GN)",
    period: "2023 - 2027",
    cpi: "8.52 / 10",
    color: "violet" as const,
  },
  {
    degree: "Minor in Internet of Things (IoT)",
    institution: "Government Engineering College - Gandhinagar (GEC-GN)",
    period: "2024-2026 (Minor Degree)",
    cpi: "9.00 / 10",
    color: "blue" as const,
  },
];

export const focusAreas = ["AI/ML Research", "AI Engineering", "Applied Machine Learning", "Computer Vision", "NLP", "Data Analytics", "IoT", "Robotics"];

export const experiences = [
  {
    role: "Research Intern",
    company: "Indian Institute of Technology — Gandhinagar (IIT Gandhinagar)",
    period: "May 2026 - Ongoing",
    color: "red" as const,
    logo: "IITGN.png",
    initials: "IIT",
    bullets: [
      "Research focus: Deep Learning, Scientific Machine Learning, Neural ODEs, Thermodynamics and Chemical Kinetics",
      "Learning underlying dynamical systems by parameterizing differential equations using neural networks",
      "Exploration of Physics-Informed Neural Networks (PINNs) for enforcing physical consistency in models",
      "Neural ODEs and continuous-time deep learning architectures",
      "Working with high-dimensional scientific datasets and structured data pipelines using Python and PyTorch"
    ],
    stack: ["PyTorch", "Python", "SciML", "Neural ODEs", "Deep Learning", "Cantera"],
  },
  {
    role: "Robotics + AI Intern",
    company: "Early-Stage Robotics Startup",
    period: "February 2026 - April 2026",
    color: "violet" as const,
    logo: "robotics.png",
    initials: "RB",
    bullets: [
      "Build robotics and IoT based systems with microcontrolers like ESP32, Arduino UNO R3 and Rasberry PI",
      "Trained and developed YOLO based models on custom datsets for deployement on robotic system",
      "Worked on integration of Computer Vision based models with robotics control systems",
      "Focused on intelligent decision systems and real-time inference pipelines",
      "Prototyped sensor fusion and embedded ML deployment workflows",
    ],
    stack: ["Robotics", "Computer Vision", "YOLO", "IoT", "Edge AI", "Real-time Inference"],
  },
  {
    role: "AI Engineer Intern",
    company: "Mirae Flux Labs Pvt. Ltd. (CognifyEV)",
    period: "Aug 2025 – Nov 2025",
    color: "blue" as const,
    logo: "cognify.png",
    initials: "MF",
    bullets: [
      "Built and optimized RAG-based pipelines for knowledge retrieval systems",
      "Improved response accuracy and reliability across AI applications",
      "Developed Agentic AI workflows for autonomous task execution",
      "Built backend services using FastAPI (Python) — API design, integration, deployment",
      "Followed Git/GitHub workflows: code reviews, branching strategies, CI hygiene",
    ],
    stack: ["RAG", "LangChain", "FastAPI", "Python", "Agentic AI"],
  },
];

export const responsibilities = [
  {
    role: "AI/ML Lead",
    org: "CLUB IDE — GEC Gandhinagar",
    period: "2025 – Present",
    color: "blue" as const,
    bullets: [
      "Mentored students on modular AI pipelines, tool integration & deployment",
      "Conducted workshops on Deep Learning using PyTorch",
      "Led sessions on building Agentic AI systems end-to-end",
      "Worked with LangChain and MCP (Model Context Protocol) for tool-augmented agents",
    ],
  },
];

export const projects = [
  {
    title: "Generative AI Text Generation System - HTS'25 Hackathon",
    description:
      "Architecture combining Custom LSTM and RNN for storytelling, Q&A and chat. Trained on multi-domain corpora with custom tokenization; served via Streamlit UI for live generation.",
    stack: ["PyTorch", "Transformer", "LSTM", "Streamlit"],
    href: "https://github.com/rikin-2911/Text_GenAI_HTS25",
  },
  {
    title: "Natural Scenes Image Classification (Custom ResNet9)",
    description:
      "Developed a ResNet9 convolutional neural network from scratch using PyTorch for natural scene classification, trained on 14K+ images with advanced augmentation techniques, achieving 90% validation accuracy and robust generalization.",
    stack: ["PyTorch", "Computer Vision", "Kaggle Intel Dataset", "Data Augmentation", "CNN", "Streamlit"],
    href: "https://github.com/rikin-2911/Natural_Scenes_Image_Classification_ResNet9",
  },
  {
    title: "DocuMind – Ask. Understand. Summarize.",
    description:
      "RAG-based intelligent document assistant for semantic search, Q&A, and summarization using vector embeddings and OpenAI LLM, enabling efficient interaction with unstructured data.",
    stack: ["LangChain", "HugginFace Embedding Models", "Python", "Streamlit", "FAISS Vector Store"],
    href: "https://github.com/rikin-2911/DocuMind_RAG_Project",
  },
  {
    title: "Full-Stack Brain Tumor MRI Classification using Deep Learning (ResNet18)",
    description:
      "ResNet18-based deep learning model for brain tumor MRI classification, trained with transfer learning and image augmentation. Integrated with FastAPI backend and React based frontend for real-time prediction, with Grad-CAM visualization for model interpretability.",
    stack: ["PyTorch", "Computer Vison", "ResNets", "FastAPI", "React-frontend"],
    href: "https://github.com/rikin-2911/ml-based-fullstack-brain-tumor-classification",
  },
  {
    title: "IoT Smart Home Energy Prediction",
    description:
      "Real-time household energy forecasting using XGBoost on IoT sensor streams. RMSE: 0.158 · Accuracy: 97.76%. Heavy preprocessing + feature engineering on time-series sensor data for production-grade reliability.",
    stack: ["XGBoost", "Scikit-learn", "Pandas", "Feature Eng."],
    href: "https://github.com/rikin-2911/IoT-Based-House-Components-Energy-Consumption-Prediction-using-XGBoost",
  },
  {
    title: "Credit Card Fraud Detection",
    description:
      "Credit card fraud detection system using LightGBM, trained on 6M+ transaction records. Achieved high performance through class imbalance handling and evaluation using precision, recall, and other classification metrics.",
    stack: ["LightGBM", "EDA", "scikit-learn", "Metrics Interpretation"],
    href: "https://github.com/rikin-2911/Fraud_Detection_Using_LightGBM",
  },
  {
    title: "Stock Price Prediction using Random Forest Regeression",
    description:
      "Implemented a Random Forest regression model for stock price prediction using historical time-series data, applying feature engineering and ensemble techniques to capture complex market patterns and improve generalization.",
    stack: ["Random Forest", "EDA", "Reliance Stock Dataset", "Time-Series analysis", "Pandas", "Finance"],
    href: "https://github.com/rikin-2911/Stock-Price-Prediction-using-Random-Forest-Regression",
  },
];

export const achievements = [
  { tag: "WINNER", color: "red" as const, text: "Team Leader - Ideathon'25 Winner (GEC-GN) - Built Agentic AI based Prototype for Government documentation analysis" },
  { tag: "TOP10", color: "blue" as const, text: "Team Leader - Hack The Spring'25 — Built Generative AI and NLP based system" },
  { tag: "FINALIST", color: "violet" as const, text: "Team Leader - XENESIS Hackathon — Coding related problem solving comptetion" },
  { tag: "MANY MORE TO GO....!", color: "red" as const }
  ,,
];

export const skills = [
  {
    group: "Programming",
    items: ["Python", "C", "Java", "R", "Linux Scripting"],
    color: "red" as const,
  },
  {
    group: "Machine Learning and Data Science",
    items: ["Linear and Logistic Regression", "Multi-Class Classification", "Feature Engineering", "EDA", "Scikit-learn", "Random Forest", "XGBoost","LightGBM", "SVM", "Time-Series Modelling and Analysis"],
    color: "blue" as const,
  },
  {
    group: "Generative AI and Agentic AI",
    items: ["LangChain", "LangGraph", "RAG", "MCP", "LLMs", "Prompt Engineering", "Pinecone Vector Database", "FAISS", "Chroma", "HuggingFace Models"],
    color: "red" as const,
  },
  {
    group: "Deep Learning",
    items: ["PyTorch", "Computer Vision", "Natural Language Processing", "CNN", "RNN", "LSTM", "Transformers", "YOLO", ],
    color: "violet" as const,
  },
  {
    group: "Backend & Deployment",
    items: ["FastAPI", "Docker", "Streamlit", "Git", "GitHub"],
    color: "blue" as const,
  },
  {
    group: "Soft Skills",
    items: ["Problem Solving", "Leadership", "Communication", "Analytical Thinking", "Team Collaboration", "Adaptability", "Critical Thinking"],
    color: "violet" as const,
  },
];

export const researchInterests = [
  { name: "Agentic AI Systems", color: "red" as const },
  { name: "Generative AI Applications", color: "blue" as const },
  { name: "Model Context Protocol (MCP)", color: "violet" as const },
  { name: "Backend AI Systems", color: "blue" as const },
  { name: "Scientific Machine Learning (SciML)", color: "red" as const },
  { name: "Neural ODEs and Physics Informed Neural Networks", color: "violet" as const },
];

export const socials = {
  Instagram: "https://www.instagram.com/rikin_2911?igsh=MWkwd3BoenVidGZqZQ==",
  linkedin: "http://www.linkedin.com/in/rikin-pithadia-20b94729b",
  github: "https://github.com/rikin-2911",
  email: "rikinpithadia98@gmail.com",
};
