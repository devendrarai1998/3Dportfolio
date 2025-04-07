import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  UrbanVyapari,
  Infosys,
  netflixGpt,
  youtubeclone,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "UrbanVyapari",
    icon: UrbanVyapari,
    iconBg: "#383E56",
    date: "March 2023 - Present",
    points: [
      "Tested and optimized retail and restaurant application used by 10,000+ merchants, reducing transaction processing time by 50%, leading to server cost savings.",
      "Created, executed, and improved test cases, achieving 90%+ productivity.",
      "Performed sanity, integration, functional, regression, and user acceptance testing for mobile and web applications, ensuring bug identification and resolution.",
      "Collaborated in Sprint Reviews and Scrum meetings, updating test requirements and enhancing software quality.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Infosys",
    icon: Infosys,
    iconBg: "#E6DEDD",
    date: "Sep 2021 - Feb 2022",
    points: [
     "As a dynamic and results-driven System Engineer with comprehensive training I bring a robust skill set encompassing a wide spectrum of software development and engineering.",
      "Proficient in various technical aspects, I excel in programming languages and software methodologies.",
      "My holistic training approach extends beyond technical expertise emphasizing the cultivation of essential soft skills, including effective communication, teamwork, and problem - solving.",
      "Committed to continuous learning and professional development.I leverage my knowledge to contribute effectively to the success of my team.",
      "Known for adaptability and a collaborative mindset, I am poised to make meaningful contributions in a challenging and dynamic work environment.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Blue sounded too cold at the time and yet it seemed to work for gin.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "That was how he came to win $1 million.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Writing a list of random sentences is harder than I initially thought it would be.",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "netflixGpt",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Gemini-api",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: netflixGpt,
    source_code_link: "https://github.com/devendrarai1998/netflix-gpt",
  },
  {
    name: "youtubeclone",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "MaterialUI",
        color: "pink-text-gradient",
      },
    ],
    image: youtubeclone,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
