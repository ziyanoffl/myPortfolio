/* All site content lives here. Edit this file to change what the portfolio shows. */

const greeting = {
  username: "Ziyan Rilwan",
  intro: "Hi, I'm",
  roles: [
    "Data Analyst",
    "BI Dashboard Builder",
    "SQL & Python Automator",
    "Software Engineer"
  ],
  subTitle:
    "I turn messy data into clear stories: interactive dashboards, automated pipelines and decisions teams can trust.",
  resumeLink: "./Ziyan-Rilwan.pdf", // Set to empty to hide the button
  isHireable: true // Shows the "Open to opportunities" badge
};

const socialMediaLinks = {
  github: "https://github.com/ziyanoffl",
  linkedin: "https://linkedin.com/in/ziyan-rilwan",
  gmail: "ziyanrilwan@gmail.com"
};

// Animated counters under "What I Do" and in the hero dashboard
const stats = [
  {value: 2, suffix: "+", label: "Years in data"},
  {value: 30, suffix: "%", label: "Manual work automated"},
  {value: 3, suffix: "", label: "Roles shipped"},
  {value: 1, suffix: "st", label: "Class Honours"}
];

const skillsSection = {
  title: "What I Do",
  subTitle: "Building data solutions that drive business decisions",
  skills: [
    {
      icon: "fas fa-chart-line",
      title: "Dashboards & BI",
      text: "Interactive Tableau and Power BI dashboards that turn operational KPIs into actionable insight."
    },
    {
      icon: "fas fa-gears",
      title: "Automation",
      text: "Workflows and data pipelines with Python, PowerApps and SharePoint that remove manual effort."
    },
    {
      icon: "fas fa-database",
      title: "SQL Analysis",
      text: "Complex queries with JOINs, CTEs and window functions for validation and reporting."
    },
    {
      icon: "fas fa-broom",
      title: "Data Wrangling",
      text: "Raw data cleaned and reshaped into structured formats ready for business intelligence."
    }
  ],
  tools: [
    {name: "HTML5", icon: "fab fa-html5"},
    {name: "CSS3", icon: "fab fa-css3-alt"},
    {name: "JavaScript", icon: "fab fa-js"},
    {name: "React", icon: "fab fa-react"},
    {name: "Node.js", icon: "fab fa-node-js"},
    {name: "SQL", icon: "fas fa-database"},
    {name: "AWS", icon: "fab fa-aws"},
    {name: "Python", icon: "fab fa-python"},
    {name: "Docker", icon: "fab fa-docker"},
    {name: "Tableau", icon: "fas fa-chart-bar"},
    {name: "Power BI", icon: "fas fa-chart-pie"}
  ]
};

const techStack = {
  title: "Proficiency",
  experience: [
    {Stack: "Business Intelligence", detail: "Tableau, Power BI", percent: 85},
    {Stack: "SQL & Data Analysis", detail: "Joins, CTEs, windows", percent: 90},
    {Stack: "Python & Statistics", detail: "Pandas, NumPy", percent: 75}
  ]
};

const educationInfo = {
  title: "Education",
  schools: [
    {
      schoolName: "Manipal Academy of Higher Education (MAHE)",
      logo: require("./assets/images/manipal.png"),
      subHeader: "Postgraduate Diploma in Data Science",
      duration: "Mar 2025 – Present",
      desc: "Modules: Advanced Machine Learning, NLP, Deep Learning, Data Science Projects."
    },
    {
      schoolName: "Solent University",
      logo: require("./assets/images/solent_uni.png"),
      subHeader: "BSc (Hons) Software Engineering",
      duration: "2024",
      desc: "First Class Honours (equivalent to 3.7 – 4.0 GPA). Modules: Machine Learning, Data Science, DevOps, Industrial Consulting Project, Dissertation Project."
    }
  ]
};

const workExperiences = {
  title: "Experience",
  experience: [
    {
      role: "IT Analyst",
      company: "Emerson",
      companylogo: require("./assets/images/Emerson.png"),
      date: "Mar 2026 – Present",
      desc: "Full-time IT Analyst at Emerson, continuing the BI dashboard and data automation work started during my internship.",
      descBullets: []
    },
    {
      role: "IT Analyst Intern",
      company: "Emerson",
      companylogo: require("./assets/images/Emerson.png"),
      date: "Jul 2025 – Mar 2026",
      desc: "Built and maintained interactive Tableau and Power BI dashboards for operational KPIs.",
      descBullets: [
        "Automated data ingestion and transformation pipelines using PowerApps, SharePoint, and Python scripts to reduce manual work by 30%.",
        "Partnered with Data Engineers to design secure and scalable data sources and optimize SQL queries for performance.",
        "Documented data flows and metrics definitions, ensuring consistent KPI tracking across departments."
      ]
    },
    {
      role: "Data Analyst",
      company: "TecHome Technologies Pvt Ltd. (CONTEXT)",
      companylogo: require("./assets/images/techome.png"),
      date: "Sep 2023 – Mar 2025",
      desc: "Designed and deployed BI dashboards in Power BI to track sales, marketing, and operational metrics.",
      descBullets: [
        "Developed and maintained complex SQL queries (joins, CTEs, window functions) for data validation and reporting.",
        "Conducted data quality checks and reconciliation to ensure accuracy in executive dashboards.",
        "Collaborated with leadership to define measurable business KPIs and automate recurring reporting workflows."
      ]
    }
  ]
};

// Add projects here and the Projects section appears automatically.
// { name, desc, tags: ["Power BI"], links: [{name: "GitHub", url: "..."}] }
const projects = {
  title: "Projects",
  subTitle: "Selected work",
  items: []
};

const contactInfo = {
  title: "Let's build something",
  subtitle:
    "Have a project in mind or want to talk data analytics? I'd love to hear from you.",
  number: "+971 50 648 0018",
  email_address: "ziyanrilwan@gmail.com"
};

export {
  greeting,
  socialMediaLinks,
  stats,
  skillsSection,
  techStack,
  educationInfo,
  workExperiences,
  projects,
  contactInfo
};
