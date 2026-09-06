export interface Project {
  id: string;
  title: string;
  subtitle: string;
  timeline: string;
  shortSummary: string;
  description: string;
  impactBullets: string[];
  techTakeaways: string[];
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
  category: 'Systems & DSA' | 'AI & Algorithms' | 'Web Applications';
  accentColor: string;
}

export interface SkillCategory {
  title: string;
  skills: { name: string; brandColor: string; proof: string; level: number }[];
}

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  image: string;
  description: string;
  skills: string[];
}

export interface TrainingItem {
  id: string;
  title: string;
  issuer: string;
  duration: string;
  grade: string;
  credentialId: string;
  image: string;
  description: string;
  skills: string[];
  capstone: string;
}

export interface PatentFigure {
  id: string;
  title: string;
  description: string;
  image: string;
  tag: string;
}

export const PERSONAL_INFO = {
  name: "Abhyudai Sood",
  title: "Software Engineer • Full-Stack Developer • Artificial Intelligence and Machine Learning",
  tagline: "Algorithms & Low-Level Systems • Applied AI & ML • Hardware-Software Innovation",
  headline: "Designing scalable full-stack applications, intelligent AI models, and algorithmic systems with computational rigor.",
  bio: "Computer Science undergraduate specializing in Artificial Intelligence & Machine Learning at Lovely Professional University. Experienced in C++, Java, Python, SQL, JavaScript, HTML, CSS, React, and modern UI engineering. Official Indian Patent Co-Inventor (#202411039860) for an autonomous sensor-guided electromechanical cleaning system. Passionate about solving real-world challenges through data structure optimizations, OS simulations, and machine learning route allocation.",
  location: "Shimla, HP & Punjab, India",
  timezone: "Asia/Kolkata (IST)",
  email: "abhyudai.edwards@gmail.com",
  phone: "+91-8894271085",
  github: "https://github.com/Abhyudai-Sood",
  githubUser: "Abhyudai-Sood",
  linkedin: "https://www.linkedin.com/in/abhyudai-sood/",
  avatar: "/profile.png",
  formalPhoto: "/abhyudai_formal.jpg",
  casualPhoto: "/abhyudai_casual.jpg",
  status: "🟢 Available for Software Engineering & AI/ML Roles",
  stats: {
    focus: "Full-Stack & AI/ML",
    patentFiled: "1 (Co-Inventor)",
    projectsBuilt: "5+",
    languagesMastered: "6",
  },
};

export const PATENT_INFO = {
  title: "Automatic Window Track Cleaner",
  applicationNo: "202411039860",
  status: "Indian Patent Application Filed & Published",
  filingDate: "May 21, 2024",
  publicationDate: "June 7, 2024",
  jurisdiction: "Indian Patent Office (IPO)",
  applicant: "Lovely Professional University",
  abstract: "An autonomous motorized electromechanical cleaning carriage engineered specifically for sliding window tracks and architectural grooves. The system integrates optical dust sensors, water level and turbidity monitoring, real-time clock (RTC) scheduling, and an Arduino UNO microcontroller to automate dust collection, washing, and track maintenance without manual labor.",
  keyFeatures: [
    "Arduino UNO Microcontroller & RTC Real-Time Scheduling",
    "Optical Dust Sensor & Turbidity Feedback for Condition-Based Cleaning",
    "Water Level Safety Sensing to Prevent Track Flooding or Component Wear",
    "Bi-Directional DC Motor & Pulley Carriage Traversal with I2C LCD Status",
    "Rope & Track Washing Tank Mechanism with Waste Water Management",
    "Official Indian Patent Application #202411039860 (Published June 7, 2024)"
  ],
  category: "Robotics & Embedded Systems Patent",
  // Prototype fabrication real laboratory photo
  labPhoto: {
    title: "Prototype Chassis Assembly & Lab Prototyping",
    tag: "Hardware Prototyping",
    description: "Physical hardware fabrication of the automated window track cleaner carriage in the university lab, showcasing the acrylic enclosure, LCD status display mounting, pulley alignment, and sensor wiring.",
    image: "/patent/patent_prototype_lab.jpg"
  },
  // Sequential figures: Fig 1 to Fig 5
  figures: [
    {
      id: "fig1",
      title: "Fig. 1: System Operation Flowchart",
      tag: "Control Logic",
      description: "Decision logic flow chart: time trigger, dust detection threshold comparison, washing sequence execution, and safety termination.",
      image: "/patent/patent_flow_diagram.png"
    },
    {
      id: "fig2",
      title: "Fig. 2: System Block Diagram",
      tag: "Hardware Architecture",
      description: "Interconnection between Arduino UNO, Optical Dust Sensor, Water Level Sensor, Turbidity Sensor, RTC Module, DC Motor, Fans, and I2C LCD display.",
      image: "/patent/patent_block_diagram.png"
    },
    {
      id: "fig3",
      title: "Fig. 3: Simulation Circuit Diagram",
      tag: "Circuit Simulation",
      description: "Full simulation circuit diagram of the automatic sliding window track cleaning system demonstrating power dispatch and sensor interrupts.",
      image: "/patent/patent_circuit_simulation.png"
    },
    {
      id: "fig4",
      title: "Fig. 4: Track, Pulley & Sensor Arrangement",
      tag: "Mechanical Assembly",
      description: "Top view of the track traversal mechanism, pulley guidance, and optical sensor positioning along the window frame.",
      image: "/patent/patent_track_pulley_arrangement.png"
    },
    {
      id: "fig5",
      title: "Fig. 5: Rope Cleaning Tank Assembly",
      tag: "Washing System",
      description: "Front view of the rope and track washing tank showcasing pressurized water delivery and sediment filtration.",
      image: "/patent/patent_cleaning_tank.png"
    }
  ]
};

// Exact GitHub repository links confirmed from user profile
export const PROJECTS: Project[] = [
  {
    id: "tracex",
    title: "TraceX – System Call Simulation",
    subtitle: "Web-Based Operating System Kernel & Syscall Visualizer",
    timeline: "Dec 2025",
    shortSummary: "Interactive OS simulator demonstrating POSIX system calls, process state machines, and memory allocation with Chart.js analytics.",
    description: "Built a web-based Operating System simulator for demonstrating system calls and core OS operations. Simulated file handling, process management, and memory allocation through an interactive interface. Visualized system-call activity with Chart.js timeline, pie, and bar charts for analysis.",
    impactBullets: [
      "Simulated POSIX low-level kernel system calls (fork, exec, read, write, exit) with real-time memory and PID lifecycle tracking.",
      "Simulated file handling, process state management, and memory allocation through an interactive, responsive interface.",
      "Visualized system-call activity with Chart.js timeline graphs, pie distributions, and bar charts for performance analysis."
    ],
    techTakeaways: [
      "Operating System Kernel Simulation",
      "POSIX Syscall Dispatching (fork/exec/read/write)",
      "Process Lifecycle & Memory Allocation",
      "Chart.js Telemetry & Real-Time Visualization"
    ],
    tags: ["JavaScript", "Operating Systems", "Chart.js", "Syscalls", "HTML5", "CSS3"],
    githubUrl: "https://github.com/Abhyudai-Sood/TraceX",
    category: "Systems & DSA",
    accentColor: "#8b5cf6"
  },
  {
    id: "smart-blood-donation",
    title: "Smart Blood Donation & Emergency Matching Network",
    subtitle: "High-Performance Java DSA Donor Management & Matching Engine",
    timeline: "Jun 2026 - Jul 2026",
    shortSummary: "Java-based donor management system with O(1) multi-index donor retrieval and PriorityQueue-based emergency dispatch.",
    description: "Developed a Java-based system for blood donor management and emergency request matching. Implemented HashMap, Nested HashMap, PriorityQueue, LinkedList, and Stack for efficient donor management and emergency processing. Optimized donor searches using blood-group and city indexing with O(1) average lookup and implemented priority-based emergency request handling.",
    impactBullets: [
      "Developed a robust Java-based backend for blood donor management and emergency request matching.",
      "Implemented HashMap, Nested HashMap, PriorityQueue, LinkedList, and Stack for efficient donor management and emergency processing.",
      "Optimized donor searches using blood-group and city indexing with O(1) average lookup time complexity.",
      "Implemented priority-based emergency request handling ensuring urgent critical-care requests are dispatched first."
    ],
    techTakeaways: [
      "O(1) Average Lookup via Nested HashMaps",
      "PriorityQueue Emergency Scheduling",
      "Dynamic LinkedList & Stack Operations",
      "Java Collections Framework & Java Swing GUI"
    ],
    tags: ["Java", "Java Swing", "Nested HashMaps", "PriorityQueue", "LinkedList", "Stack", "DSA"],
    // Exact repository link confirmed from GitHub API
    githubUrl: "https://github.com/Abhyudai-Sood/Smart-Blood-Donation-Matching-",
    category: "Systems & DSA",
    accentColor: "#ef4444"
  },
  {
    id: "opti-reach",
    title: "Opti-Reach: AI Rural Medical Health-Camp Planning",
    subtitle: "Linear Regression Scoring & Genetic Algorithm Route Optimizer",
    timeline: "Mar 2026 - Apr 2026",
    shortSummary: "AI rural healthcare optimization using Linear Regression for village priority scoring and Genetic Algorithms for doctor-village allocation.",
    description: "Created an AI-based rural healthcare optimization system using Linear Regression for village priority scoring. Applied a Genetic Algorithm for doctor–village–slot allocation, route optimization, and conflict reduction. Built an interactive dashboard with HTML, CSS, JavaScript, Leaflet.js, and Chart.js for route and data visualization.",
    impactBullets: [
      "Created an AI-based rural healthcare optimization system using Linear Regression for village distress and priority scoring.",
      "Applied a Genetic Algorithm for doctor–village–slot allocation, route optimization, and conflict reduction.",
      "Built an interactive dashboard with HTML, CSS, JavaScript, Leaflet.js, and Chart.js for route and geospatial data visualization."
    ],
    techTakeaways: [
      "Linear Regression for Village Priority Scoring",
      "Genetic Algorithm Multi-Slot Allocation",
      "Geospatial Route Mapping with Leaflet.js",
      "Telemetry Analytics with Chart.js"
    ],
    tags: ["Python", "Genetic Algorithm", "Linear Regression", "Leaflet.js", "Chart.js", "JavaScript"],
    // Exact repository link confirmed from GitHub API
    githubUrl: "https://github.com/Abhyudai-Sood/Opti--Reach",
    category: "AI & Algorithms",
    accentColor: "#06b6d4"
  },
  {
    id: "acadex",
    title: "ACADEX – SPI Calculator",
    subtitle: "Student Performance Index & Academic Telemetry Suite",
    timeline: "Jun 2025 - Jul 2025",
    shortSummary: "Frontend academic evaluation suite calculating SPI, CGPA, backlogs, and percentage with mobile-friendly presentation.",
    description: "Developed core frontend components using HTML and CSS for the Acadex Student Performance Index website. Structured interfaces to present grades, CGPA, percentage, backlogs, and performance information. Optimized an intuitive and mobile-friendly user interface with clear navigation and organized performance data presentation.",
    impactBullets: [
      "Developed core frontend components using HTML and CSS for the Acadex Student Performance Index platform.",
      "Structured interfaces to present grades, CGPA, percentage, backlogs, and academic performance information.",
      "Optimized an intuitive and mobile-friendly user interface with clear navigation and organized data presentation."
    ],
    techTakeaways: [
      "Credit-Weighted SPI/CGPA Algorithm",
      "Clean Semantic HTML5 & Responsive CSS3",
      "Mobile-Friendly Performance Dashboard"
    ],
    tags: ["HTML5", "CSS3", "JavaScript", "Academic Analytics", "UI/UX"],
    githubUrl: "https://github.com/Abhyudai-Sood/SPI_Calculator",
    category: "Web Applications",
    accentColor: "#10b981"
  },
  {
    id: "whts",
    title: "WHTS – We Help The Strays Website",
    subtitle: "Non-Profit Organization & Animal Welfare Community Portal",
    timeline: "Sep 2024 - Nov 2024",
    shortSummary: "Multi-page NGO portal with donation pipelines, membership onboarding, media galleries, and consistent CSS presentation.",
    description: "Created a multi-page NGO website using HTML and CSS for organizational information and user interaction. Integrated donation, membership, navigation, forms, image, and video sections across the website. Organized website assets and applied custom CSS styling for consistent page presentation.",
    impactBullets: [
      "Created a multi-page NGO website using HTML and CSS for organizational information and community user interaction.",
      "Integrated donation, membership, navigation, forms, image, and video sections across the platform.",
      "Organized website assets and applied custom CSS styling for consistent, accessible page presentation."
    ],
    techTakeaways: [
      "Multi-Page Architecture & Semantic Structure",
      "Custom CSS Design System & Form Styling",
      "Asset Organization & Media Presentation"
    ],
    tags: ["HTML5", "CSS3", "Web Development", "NGO Portal", "Responsive Design"],
    githubUrl: "https://github.com/Abhyudai-Sood/We-Help-The-Strays",
    category: "Web Applications",
    accentColor: "#f59e0b"
  }
];

// Renamed and enriched with soft skills in a strictly symmetric 4-category layout
export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Programming Languages",
    skills: [
      { name: "C++", brandColor: "#00599c", proof: "C++ STL, OOP, Algorithm Design", level: 90 },
      { name: "Java", brandColor: "#f89820", proof: "Collections, Swing, Smart Blood Matching", level: 92 },
      { name: "Python", brandColor: "#387eb8", proof: "Linear Regression, Genetic Algorithms", level: 86 },
      { name: "C", brandColor: "#659ad2", proof: "Low-level Memory & OS Foundations", level: 88 },
      { name: "JavaScript", brandColor: "#f7df1e", proof: "DOM, Chart.js, Leaflet.js, React", level: 85 },
      { name: "SQL", brandColor: "#e38c00", proof: "Relational Queries & Schema Design", level: 82 }
    ]
  },
  {
    title: "Libraries & Frameworks",
    skills: [
      { name: "Java Collections", brandColor: "#f89820", proof: "HashMap, PriorityQueue, LinkedList, Stack", level: 94 },
      { name: "C++ STL", brandColor: "#00599c", proof: "Vectors, Maps, Iterators, Sorting", level: 90 },
      { name: "NumPy & Pandas", brandColor: "#4dabcf", proof: "Data Analysis & Feature Preparation", level: 82 },
      { name: "Chart.js", brandColor: "#ff6384", proof: "TraceX OS & Opti-Reach Telemetry", level: 88 },
      { name: "Matplotlib", brandColor: "#38bdf8", proof: "Scientific Graphing & Data Plots", level: 80 },
      { name: "Java Swing", brandColor: "#ea580c", proof: "Desktop GUI for Blood Network", level: 85 }
    ]
  },
  {
    title: "Web Technologies & Tools",
    skills: [
      { name: "HTML5 & CSS3", brandColor: "#e34f26", proof: "Semantic Layouts, Responsive Grids", level: 95 },
      { name: "Leaflet.js", brandColor: "#199900", proof: "Geospatial Health-Camp Mapping", level: 82 },
      { name: "VS Code", brandColor: "#007acc", proof: "Primary IDE & Extensions Workflow", level: 95 },
      { name: "Git & GitHub", brandColor: "#f05032", proof: "Version Control & Branch Workflows", level: 90 },
      { name: "AutoCAD & Arduino", brandColor: "#00979d", proof: "Patent Prototyping & Sensor Control", level: 82 },
      { name: "Adobe Illustrator", brandColor: "#ff9a00", proof: "Visual Assets & UI Design", level: 80 }
    ]
  },
  {
    title: "Professional & Soft Skills",
    skills: [
      { name: "Problem Solving", brandColor: "#06b6d4", proof: "Asymptotic Analysis & Algorithmic Logic", level: 95 },
      { name: "Team Collaboration", brandColor: "#10b981", proof: "Cross-Functional Engineering Projects", level: 92 },
      { name: "Project Management", brandColor: "#8b5cf6", proof: "Milestone Tracking & Execution", level: 88 },
      { name: "Technical Communication", brandColor: "#f59e0b", proof: "Documentation, Patent Filing & Reporting", level: 90 },
      { name: "Adaptability", brandColor: "#ec4899", proof: "Rapid Mastery of New Tech Stacks", level: 92 },
      { name: "Engineering Leadership", brandColor: "#3b82f6", proof: "Mentorship & Community Welfare", level: 86 }
    ]
  }
];

// Dedicated Summer Trainings & Internships Section
export const TRAININGS: TrainingItem[] = [
  {
    id: "training-logic",
    title: "Logic Building, Programming & Data Structures",
    issuer: "Centre for Professional Enhancement, Lovely Professional University",
    duration: "13 June 2025 – 18 July 2025",
    grade: "Grade A",
    credentialId: "Certificate No. 407907",
    image: "/certificates/lpu_logic_building_cert.jpg",
    description: "Rigorous skill development course covering C++ fundamentals, algorithmic thinking, recursion, dynamic programming, arrays, and lists. Developed the ACADEX Student Performance Index as capstone project.",
    skills: ["C++", "STL", "Logic Building", "Recursion", "Dynamic Programming", "Algorithm Optimization"],
    capstone: "ACADEX – Student Performance Index Suite"
  },
  {
    id: "training-dsa",
    title: "Data Structures Fundamentals: Basics to Applications",
    issuer: "Centre for Professional Enhancement, Lovely Professional University",
    duration: "14 June 2026 – 27 July 2026",
    grade: "Grade A",
    credentialId: "Certificate No. 491955",
    image: "/certificates/lpu_dsa_fundamentals_cert.jpg",
    description: "In-depth skill development program in Java DSA covering Arrays, LinkedLists, Stacks, Queues, Trees, HashMaps, searching, and sorting. Engineered the Smart Blood Donation Network with Java Swing as capstone.",
    skills: ["Java", "HashMaps", "PriorityQueue", "LinkedList", "Stack", "Trees", "Searching & Sorting"],
    capstone: "Smart Blood Donation & Emergency Matching Network"
  }
];

export const CERTIFICATES: CertificateItem[] = [
  {
    id: "cpp-cert",
    title: "Programming Using C++",
    issuer: "Infosys Springboard / Wingspan",
    date: "Aug 2025",
    credentialId: "verify.onwingspan.com",
    image: "/certificates/cpp_certificate.png",
    description: "In-depth training in C++ object-oriented design, STL containers, iterators, and high-performance memory management.",
    skills: ["C++", "STL", "OOP", "Memory Management"]
  },
  {
    id: "dsa-cert",
    title: "Data Structures & Algorithms (CSE205)",
    issuer: "NeoColab & LPU",
    date: "Jul 2026",
    credentialId: "12400588@neocolab.ai",
    image: "/certificates/dsa_certificate.png",
    description: "Core algorithms and data structures: Arrays, LinkedLists, Trees, HashMaps, Heaps, and Dynamic Programming.",
    skills: ["Java", "HashMaps", "PriorityQueue", "Trees", "Searching & Sorting"]
  },
  {
    id: "java-cert",
    title: "Core Java Programming",
    issuer: "Lovely Professional University",
    date: "Jun 2026",
    credentialId: "LPU-JAVA-CAPSTONE",
    image: "/certificates/java_certificate.png",
    description: "Enterprise Java programming, multithreading, Collections framework, and Swing desktop UI implementation.",
    skills: ["Java", "Java Swing", "Collections", "OOP Design"]
  },
  {
    id: "aiml-cert",
    title: "AI & Machine Learning Foundations",
    issuer: "LPU MOOC Series",
    date: "Mar 2025",
    credentialId: "MOOC-AIML-VERIFIED",
    image: "/certificates/ai and ml mooc.png",
    description: "Foundations of applied Artificial Intelligence, Linear Regression, supervised learning, and optimization models.",
    skills: ["AI/ML", "Linear Regression", "Optimization", "Python"]
  },
  {
    id: "python-cert",
    title: "Advanced Python for Problem Solving",
    issuer: "Professional Learning Series",
    date: "Feb 2025",
    credentialId: "PY-ADV-9024",
    image: "/certificates/advanced python.png",
    description: "Advanced Python idioms, computational scripts, scientific data analysis with NumPy/Pandas, and algorithmic logic.",
    skills: ["Python", "NumPy", "Pandas", "Automation"]
  },
  {
    id: "illustrator-cert",
    title: "Adobe Illustrator UI/Visual Design",
    issuer: "Design & Media Academy",
    date: "Nov 2021",
    credentialId: "ADOBE-ILL-CERT",
    image: "/certificates/Adobe Illustrator Completion Certificate.jpg",
    description: "Vector graphics creation, typography hierarchy, UI asset generation, and digital schematic illustration.",
    skills: ["Adobe Illustrator", "UI Design", "Vector Graphics"]
  }
];

// Education Section: ONLY location where CGPA and Class XII & X marks are displayed
export const EDUCATION = [
  {
    institution: "Lovely Professional University",
    location: "Phagwara, Punjab, India",
    degree: "Bachelor of Technology - Computer Science and Engineering (CSE)",
    duration: "Aug 2024 - Jun 2028 (Pursuing)",
    score: "CGPA: 8.06 / 10.0",
    campusImage: "/education/lpu_campus.jpg",
    logoImage: "/education/lpu_official_header_logo.png",
    badge: "NAAC Grade A++ Accredited",
    tagline: "NIRF Top-Ranked University in Northern India • 600+ Acre Smart Tech Campus",
    highlights: [
      "Rigorous coursework in Data Structures & Algorithms, Object-Oriented Programming (Java & C++), Operating Systems, and DBMS.",
      "Co-Inventor of Indian Patent Application #202411039860 ('Automatic Window Track Cleaner') engineered in university innovation labs.",
      "Specializing in Artificial Intelligence & Machine Learning with practical applications in predictive modeling and route optimization.",
      "Active algorithmic problem-solver on LeetCode with strong focus on time & space complexity optimization."
    ]
  },
  {
    institution: "St. Edward's School",
    location: "Milsington, Shimla, Himachal Pradesh",
    degree: "Senior Secondary (Class XII CBSE) & Secondary (Class X ICSE)",
    duration: "Graduated 2024",
    score: "Class XII: 72.0% (PCM) | Class X: 85.6%",
    campusImage: "/education/st_edwards_school.jpg",
    logoImage: "/education/st_edwards_crest.png",
    badge: "Est. 1925 • Christian Brothers",
    tagline: "Historic Heritage Boys' Institution in Shimla • Motto: 'Lumen Sequere' (Follow the Light)",
    highlights: [
      "Established in 1925 by Irish Christian Brothers in Milsington, Shimla; one of the oldest premier heritage convent institutions in North India.",
      "Renowned for disciplined academic excellence, character development, and illustrious alumni including Former President of Afghanistan Hamid Karzai, India's First Chief of Defence Staff (CDS Gen. Bipin Rawat), Maha Vir Chakra war heroes, and Supreme Court judges.",
      "Built rigorous academic foundations in analytical mathematics, physics, chemistry, computer applications, and competitive debate.",
      "Actively represented school in co-curricular activities, leadership forums, and athletic events in Shimla."
    ]
  }
];
