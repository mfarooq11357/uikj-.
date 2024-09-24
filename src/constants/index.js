import {
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  java,
  git,
  nickelfox,
  skillrisers,
  proximus,
  aptihealthWeb,
  aptihealthApp,
  zealWeb,
  zealApp,
  rollWeb,
  rollApp,
  linkedIn,
  github,
} from "../assets";
import aptihealthWeb from '../assets/projects/aptihealthWeb.PNG';
import aptihealthApp from "../assets/projects/aptihealthApp.png";
import zealWeb from "../assets/projects/zealWeb.png";
import zealApp from "../assets/projects/zealApp.png";
import rollWeb from "../assets/projects/rollWeb.png";
// import rollApp from "../assets/projects/rollApp.png";
// const aptihealthWeb = "https://i.ibb.co/qdZMJZ6/aptihealth-Web.png";
// const aptihealthApp = "https://i.ibb.co/HpTgr5P/aptihealth-App.png";
// const zealWeb = "https://i.ibb.co/nCjtysq/zealWeb.png";
// const zealApp = "https://i.ibb.co/jMrDbD0/Capture.png";
// const rollWeb = "https://i.ibb.co/FH5m9Tv/rollWeb.png";
// const rollApp = "https://i.ibb.co/sjbzyFZ/rollApp.png";
const navigationPaths = {
  home: "/",
  about: "about",
  work: "work",
  contact: "contact",
};

export const navLinks = [
  {
    id: navigationPaths.about,
    title: "About",
  },
  {
    id: navigationPaths.work,
    title: "Work",
  },
  {
    id: navigationPaths.contact,
    title: "Contact",
  },
];

const services = [
  {
    title: "React Developer",
    icon: web,
  },
  {
    title: "NodeJs Developer",
    icon: backend,
  },
  {
    title: "Javascript Developer",
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
    name: "Java",
    icon: java,
  },
  {
    name: "Git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Frontend Developer",
    company_name: "Self-employed",
    company_website: "/",
    icon: proximus,
    iconBg: "#E6DEDD",
    date: "Jan 2022 - Present",
    points: [
      "Designed and developed responsive websites, ensuring seamless user experience across all devices using HTML, CSS, JavaScript, and React.",
      "Worked extensively with modern front-end libraries like React.js, enhancing the scalability and performance of applications.",
      "Implemented dynamic UIs and interactive features, focusing on usability and accessibility.",
      "Collaborated with clients to understand their vision and translate it into functional and visually appealing designs.",
      "Optimized web applications for maximum speed and scalability, utilizing modern techniques such as lazy loading and code splitting.",
    ],
  },
  {
    title: "Backend Developer",
    company_name: "Self-employed",
    company_website: "/",
    icon: nickelfox,
    iconBg: "#E6DEDD",
    date: "Jan 2022 - Present",
    points: [
      "Developed RESTful APIs and microservices using Node.js and Express, integrating seamlessly with frontend applications.",
      "Worked with MongoDB and databases, designing efficient data models and queries.",
      "Handled authentication and authorization mechanisms using JWT and OAuth, ensuring secure access to resources.",
      "Collaborated in building full-stack applications by integrating backend services with frontend interfaces, focusing on efficient data flow and user-friendly experiences.",
      "Troubleshooted and debugged issues, improving backend performance and reliability.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "Aethon",
    company_website: "/",
    icon: skillrisers,
    iconBg: "#E6DEDD",
    date: "Feb 2024 - Jul 2024",
    points: [
      "Built and maintained core modules, including Teacher, Student, and Admin functionalities, enhancing user interaction and system management.",
      "Participated in agile sprints, contributing to code reviews and improving development processes.",
      "Showcased strong problem-solving and analytical skills, consistently meeting project goals and deadlines while ensuring code quality.",
    ],
  }
];


const projects = [
  {
    name: "Vote Smart",
    description:
      "A dynamic voting app where users can vote for candidates, while admins manage candidate details in real time, ensuring an engaging experience",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "Mongodb",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
    ],
    image: aptihealthWeb,
    hosted_link: "https://votesmartonline.netlify.app/",
  },
  {
    name: "HealthCare Hub",
    description:
      "Your go-to healthcare hub providing essential information about hospital services, departments, doctors, and patient resources for comprehensive care and support.",
    tags: [
      {
        name: "react js",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "Js Libraries",
        color: "pink-text-gradient",
      },
    ],
    image: aptihealthApp,
    hosted_link: "https://hospital-website77.netlify.app/",
  },
  {
    name: "Enchanted Phoenix",
    description:
      "At Enchanted Phoenix, we fuel digital marketing innovation, elevating your brand through creativity and excellence in the ever-changing digital landscape",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "Javascript",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: zealWeb,
    hosted_link: "/",
  },
  {
    name: "ZCars Rental",
    description:
      "A modern, frontend-only web app built with React, featuring Home, Contact Us, FAQs, and Reviews pages, combining sleek design with user-friendly navigation.",
    tags: [
      {
        name: "react js",
        color: "blue-text-gradient",
      },
      {
        name: "Js Libraries",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: zealApp,
    hosted_link:
      "https://z-cars-rental-agency.vercel.app/",
  },
  {
    name: "Wash My Ride",
    description:
      "WashMyRide offers convenient, eco-friendly car wash services, ensuring your vehicle shines while you enjoy a hassle-free experience at your location.",
    tags: [
      {
        name: "Javascript",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "HTML",
        color: "pink-text-gradient",
      },
    ],
    image: rollWeb,
    hosted_link: "/",
  },
  {
    name: "Bubble Game",
    description:
      "An interactive CSS-based game featuring Play, Score, and How to Play options, with dynamic gameplay, real-time scoring, and clear instructions for users.",
    tags: [
      {
        name: "react js",
        color: "blue-text-gradient",
      },
      {
        name: "Javascript",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: rollApp,
    hosted_link:
      "https://mfarooq11357.github.io/mfarooq11357-Bubbles-Pop-Game-Project/",
  },
];

const personalInfo = {

  email: "mfarooq11357@gmail.com",
  role: "Software Developer",
  about: `I'm a skilled software developer with experience in JavaScript, and expertise in frameworks like React.Js, React-naitve,
  Node.js etc. I'm a quick learner and collaborate closely with clients to
  create efficient, scalable, and user-friendly solutions that solve
  real-world problems. Let's work together to bring your ideas to life!`,
  projectsIntro: `Following projects showcases my skills and experience through
  real-world examples of my work. Each project is briefly described with
  live demos. It reflects my ability to solve complex problems, work
  with different technologies, and manage projects effectively.`,
};

const publicUrls = {

  socialProfiles: {
    linkedin: {
      title: "linkedin",
      link: "#contact",
      icon: linkedIn,
    },
    github: {
      title: "github",
      link: "#contact",
      icon: github,
    },
  },
};

export {
  services,
  technologies,
  experiences,
  projects,
  navigationPaths,
  personalInfo,
  publicUrls,
};
