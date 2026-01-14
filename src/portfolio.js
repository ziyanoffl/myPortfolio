/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Ziyan Rilwan",
  title: "Hi all, I'm Ziyan",
  subTitle: emoji(
    "Analytical and detail-oriented Data Analyst 📊 with 2+ years of turning messy data into beautiful insights ✨ Experienced in Tableau and Power BI dashboard development, data cleaning (yes, even the REALLY messy stuff 🧹), and KPI design to help businesses make data-driven decisions 🚀"
  ),
  resumeLink:
    "./Ziyan-Rilwan.pdf", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/ziyanoffl",
  linkedin: "https://linkedin.com/in/mohammed-ziyan",
  gmail: "ziyanrilwan@gmail.com",
  gitlab: "",
  facebook: "",
  medium: "",
  stackoverflow: "",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "DATA WIZARD 🧙‍♂️ WHO TRANSFORMS SPREADSHEETS INTO STORIES",
  skills: [
    emoji(
      "⚡ Build interactive Tableau and Power BI dashboards that make stakeholders go 'Wow!' 📈"
    ),
    emoji("⚡ Automate boring stuff with Python and PowerApps so I can focus on the fun problems 🤖"),
    emoji(
      "⚡ Write SQL queries that are almost as complex as my coffee order ☕ (JOINs, CTEs, Window Functions, you name it!)"
    ),
    emoji(
      "⚡ Turn messy Excel files into clean, actionable insights (yes, I've seen THAT spreadsheet 😅)"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Manipal Academy of Higher Education - MAHE",
      logo: require("./assets/images/manipal.png"),
      subHeader: "Postgraduate Diploma in Data Science",
      duration: "Mar 2025 – Present",
      desc: "Modules: Advanced Machine Learning, NLP, Deep Learning, Data Science Projects.",
      descBullets: []
    },
    {
      schoolName: "Solent University",
      logo: require("./assets/images/solent_uni.png"),
      subHeader: "BSc (Hons) Software Engineering",
      duration: "2024",
      desc: "Grade: First Class Honors. (Equivalent to 3.7 – 4.0 GPA)",
      descBullets: [
        "Modules: Machine Learning, Data Science, DevOps, Industrial Consulting Project, Dissertation Project."
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Business Intelligence (Tableau, Power BI)", //Insert stack or technology you have experience in
      progressPercentage: "85%" //Insert relative proficiency in percentage
    },
    {
      Stack: "SQL & Data Analysis",
      progressPercentage: "90%"
    },
    {
      Stack: "Python & Statistics",
      progressPercentage: "75%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "IT Analyst Intern",
      company: "Emerson",
      companylogo: require("./assets/images/Emerson.png"),
      date: "Jul 2025 – Present",
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
    },
    {
      role: "Web Developer Trainee",
      company: "Csquare Technologies",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Jan 2023 – Jun 2023",
      desc: "Contributed to the development of ERP system modules using PHP, MySQL, and jQuery to automate business operations.",
      descBullets: [
        "Assisted in optimizing backend queries and improving data performance for client-facing applications."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "SOME OF MY NOTABLE PROJECTS",
  projects: [
    // Template: Add your projects here
    // {
    //   image: require("./assets/images/projectLogo.webp"),
    //   projectName: "Project Name",
    //   projectDesc: "Description of your project",
    //   footerLink: [
    //     {
    //       name: "Visit Website",
    //       url: "https://example.com/"
    //     },
    //     {
    //       name: "GitHub",
    //       url: "https://github.com/username/repo"
    //     }
    //   ]
    // }
  ],
  display: false // Set true to show this section when you add projects
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    // Template: Add your achievements here
    // {
    //   title: "Achievement Title",
    //   subtitle: "Description of the achievement",
    //   image: require("./assets/images/certLogo.webp"),
    //   imageAlt: "Achievement Logo",
    //   footerLink: [
    //     {
    //       name: "Certification",
    //       url: "https://example.com/cert"
    //     }
    //   ]
    // }
  ],
  display: false // Set true to show this section when you add achievements
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "I write about data analytics, technology, and my learning journey.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    // Template: Add your blog posts here
    // {
    //   url: "https://yourblog.com/post",
    //   title: "Blog Post Title",
    //   description: "Brief description of the blog post"
    // }
  ],
  display: false // Set true to show this section when you add blogs
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    // Template: Add your talks here
    // {
    //   title: "Talk Title",
    //   subtitle: "Event Name",
    //   slides_url: "https://slides.com/yourslides",
    //   event_url: "https://event.com"
    // }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    // "https://anchor.fm/yourpodcast/embed/episodes/..."
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all. Let's turn data into decisions! 🚀",
  number: "+971 50 648 0018",
  email_address: "ziyanrilwan@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
