export default {
  // Navbar
  nav: {
    about: "About",
    skills: "Skills",
    experience: "Experience",
    projects: "Projects",
    contact: "Contact",
  },
  // Hero Section
  hero: {
    greeting: "Hi, I'm",
    name: "Rebecka Gamble",
    title: "A Junior Frontend Developer",
    description:
      "I create responsive and interactive web applications using modern technologies like React, TypeScript, and Tailwind CSS.",
    cta: "View Projects",
  },
  //About Section
  about: {
    title: "Introduction",
    subtitle: "Overview",
    p1: "During my studies, I have developed skills in both front-end and back-end web development. I have gained hands-on experience working with a variety of frameworks and technologies such as HTML, CSS, JavaScript, Tailwind, React, Redux (with Redux Toolkit), Next.js, Vue.js, Node.js, MySQL, and GitHub.",
    p2: "I have applied this knowledge in several projects, where I have worked both independently and as part of a team, following agile project methodologies using tools like Trello and Notion.",
    p3: "In one of these projects, I collaborated with UX students, which provided valuable insights into the design process and how to effectively implement user-centered solutions in frontend development.",
    p4: "I have also worked extensively on creating responsive websites, ensuring a seamless user experience across both mobile devices and desktop. These projects have not only strengthened my technical skills but also allowed me to tackle real-world challenges, work in dynamic team environments, and contribute to meaningful, user-focused development solutions.",
    "tech-title": "Technologies",
    checkProjects: "Check out some of my latest projects",
  },
  aboutCode: {
    line1: "Name: Rebecka Gamble",
    line2: "Title: Frontend Developer",
    line3: "Language:",
    line4: "  - Swedish",
    line5: "  - English",
    line6: "Location: Stockholm, Sweden",
    line7: "Skills: ",
    line8: "  Frontend: ",
    line9: "    React, TypeScript, Tailwind CSS",
    line10: "  Backend: ",
    line11: "    Node.js, Express ",
  },
  // Experience Section
  experience: {
    title: "From studies to real-world experience",
    subtitle: "Learning & Building",
    filters: {
      all: "All",
      work: "Work",
      education: "Education",
    },
    items: [
      {
        type: "education",
        title: "AI: Basic Practical Machine Learning",
        company: "Mölk Education",
        period: "Apr 2024 - Jun 2025",
        description: "coming..",
      },
      {
        type: "education",
        title: "Frontend Developer",
        company: "Chas Academy",
        period: "Aug 2023 - Jun 2025",
        description: "coming..",
      },
      {
        type: "work",
        title: "Frontend Developer Intern",
        company: "Indpro",
        period: "Nov 2024 - May 2025",
        description: "Wcoming..",
      },
      {
        type: "education",
        title: "Web Developer",
        company: "Medieinstitutet Stockholm",
        period: "Sep 2021 - May 2023",
        description: "coming..",
      },
      {
        type: "work",
        title: "Frontend Developer Intern",
        company: "Unatitech",
        period: "2023",
        description: "Acoming..",
      },
      {
        type: "education",
        title: "Accounting consultant",
        company: "Stockholm School of Business",
        period: "Aug 2019 - Jun 2021",
        description: "coming..",
      },
      {
        type: "work",
        title: "Internship",
        company: "MBL Redovisning & Konsulting",
        period: "2020",
        description: "coming..",
      },
      {
        type: "work",
        title: "Personal assistant",
        company: "Modern assistans",
        period: "2007 - 2018",
        description: "coming..",
      },
    ],
  },
  projects: {
    title: "Projects",
    subtitle: "My Work",
    text: "Throughout my learning journey, I have worked on various projects that have allowed me to apply and refine my skills in front-end and back-end development. These projects range from individual builds to collaborative team efforts, where I have tackled challenges such as responsive design, state management, API integration, and user experience optimization. Each project has given me the opportunity to work with modern technologies like React, Vue.js, Next.js, and Node.js, while also strengthening my ability to problem-solve, adapt to new frameworks, and write clean, maintainable code. Whether building from scratch or improving existing applications, I focus on delivering user-friendly, efficient, and accessible solutions.",
    filters: {
      all: "All",
      react: "React",
      next: "Next.js",
      javascript: "JavaScript",
      typescript: "TypeScript",
      vue: "Vue",
      python: "Python",
    },
    items: [
      {
        title: "MovieQuest",
        description:
          "MovieQuest is a single-page application that retrieves and displays movies from TheMovieDB API. Features include a carousel showcasing selected movies, search and sorting options, a detailed movie page with reviews, and a favorites list.",
        "fullDescription":
          "MovieQuest is a single-page application that retrieves and displays movies from TheMovieDB API. Features include a carousel showcasing selected movies, search and sorting options, a detailed movie page with reviews, and a favorites list.",
        technologies: [
          {
            name: " React",
            color: "blue-text-gradient",
          },
          {
            name: " Redux",
            color: "green-text-gradient",
          },
          {
            name: " Tailwind",
            color: "pink-text-gradient",
          },
          {
            name: " TheMovieDB API",
            color: "orange-text-gradient",
          },
        ],
        github: "https://github.com/RebeckaGamble/movieQuest",
        demo: "",
        image: "movieQuest.png",
        category: "react",
      },
      {
        title: "E-commerce",
        description:
          "E-commerce is an e-commerce platform developed collaboratively to enable product browsing and purchasing. Features include a product catalog, a dynamic shopping cart, a favorites page, and a responsive design.",
        "fullDescription":
          "E-commerce is an e-commerce platform developed collaboratively to enable product browsing and purchasing. Features include a product catalog, a dynamic shopping cart, a favorites page, and a responsive design.", 
        technologies: [
          {
            name: " React",
            color: "blue-text-gradient",
          },
          {
            name: " Next.js",
            color: "green-text-gradient",
          },
          {
            name: " Tailwind",
            color: "pink-text-gradient",
          },
        ],
        github: "https://github.com/RebeckaGamble/E-handel-1",
        demo: "",
        image: "e-com.png",
        category: "react",
      },
      {
        title: "Chas - Landing Page",
        description:
          "Develop an individual project to create a landing page for the school, showcasing programs, events, and contact information.",
        "fullDescription":
          "Develop an individual project to create a landing page for the school, showcasing programs, events, and contact information.", 
        technologies: [
          {
            name: " HTML",
            color: "blue-text-gradient",
          },
          {
            name: " CSS",
            color: "pink-text-gradient",
          },
          {
            name: " JavaScript",
            color: "green-text-gradient",
          },
          {
            name: " Tailwind",
            color: "pink-text-gradient",
          },
          {
            name: " Vite",
            color: "red-text-gradient",
          },
        ],
        github: "https://github.com/RebeckaGamble/chas_landing_page",
        demo: "https://chas-landing-page.vercel.app/",
        image: "chas.png",
        category: "javaScript",
      },
      {
        title: "ChefMate",
        description:
          "Develop ChefMate as a group project with UX students to provide personalized AI-generated recipes based on user preferences.",
        "fullDescription":
          "Develop ChefMate as a group project with UX students to provide personalized AI-generated recipes based on user preferences.", 
        technologies: [
          {
            name: " Next.js",
            color: "green-text-gradient",
          },
          {
            name: " Tailwind",
            color: "pink-text-gradient",
          },
          {
            name: " OpenAI API",
            color: "orange-text-gradient",
          },
          {
            name: " Express",
            color: "blue-text-gradient",
          },
          {
            name: " MySQL",
            color: "red-text-gradient",
          },
          {
            name: " Radix UI",
            color: "purple-text-gradient",
          },
        ],
        github: "https://github.com/RebeckaGamble/open_ai_13",
        demo: "",
        image: "chefMate.png",
        category: "next",
      },
      {
        title: "Portfolio",
        description:
          "Create a Portfolio using Next.js and Tailwind",
        "fullDescription":
          "Create a Portfolio using Next.js and Tailwind", 
        technologies: [
          {
            name: " Next.js",
            color: "green-text-gradient",
          },
          {
            name: " Tailwind",
            color: "pink-text-gradient",
          },
        ],
        github: "https://github.com/RebeckaGamble/portfolio_reb",
        demo: "https://portfolio-reb.vercel.app/",
        image: "portfolio.png",
        category: "next",
      },
    ],
  },
};
