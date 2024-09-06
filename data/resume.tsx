import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
// import { HomeIcon } from "lucide-react";

export const DATA = {
  name: "Youssouf da Silva",
  initials: "YdS",
  url: "https://youssoufdasilva.com",
  location: "Bristol, UK",
  locationLink: "https://www.google.com/maps/place/Bristol",
  description: "Senior Full Stack Software Engineer | Project Management",
  summary:
    "A dedicated FullStack Software Engineer with a keen eye for detail and a commitment to crafting efficient, user-centric web experiences. I thrive on tackling complex challenges, leveraging my expertise in front-end and back-end technologies to deliver robust, scalable solutions that exceed expectations and delight users.",
  avatarUrl: "/me.jpeg",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Bun",
    "Python",
    "Postgres",
    "Docker",
    "Django",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "youssoufdasilva+helloFromLandingPage@gmail.com",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/youssoufdasilva",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/youssoufdasilva/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "#",
        icon: Icons.x,

        navbar: false,
      },
      Youtube: {
        name: "Youtube",
        url: "#",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "mailto:youssoufdasilva+helloFromLandingPage@gmail.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Intellium AI",
      href: "https://intellium.ai",
      badges: [],
      location: "Bristol, England, United Kingdom · On-site",
      title: "Senior Full Stack Software Engineer",
      logoUrl: "/intellium.jpeg",
      start: "Jul 2023",
      end: "Present",
      description: `Key Job Responsibilities:
- Develop attractive and intuitive dashboards with React, NodeJs, JavaScript, HTML, CSS to build, deploy and scale Enterprise AI software
- Develop code in python and UNIX scripts to build, deploy and scale Enterprise AI software 
- Work in backend tech stack involving flask, NGINX, docker, node etc. 
- Develop AI code to add new features to the Enterprise AI platform
- Develop unit test, integration test for CI/CD 
- Write code documentation following software engineering best practices`,
    },
    {
      company: "Fox Robotics",
      href: "https://fox-robotics.com/",
      badges: [],
      location: "Surrey, England, United Kingdom · On-site",
      title: "Software Engineer",
      logoUrl: "/foxrobotics.jpeg",
      start: "Jul 2020",
      end: "Jun 2023",
      description: `I was responsible for developing the robotics-supporting web application's backend and frontend development and supported the desig  and development of other core components nodes for the robot.`,
    },
    {
      company: "Akatuapa Limited (PsypherTxt)",
      href: "https://fox-robotics.com/",
      badges: [],
      location: "Surrey, England, United Kingdom · On-site",
      title: "Web / Backend Software Developer",
      logoUrl: "/akatuapa.jpeg",
      start: "May 2017",
      end: "Aug 2019",
      description: `Worked in a small team of 10 people to create mobile apps and games. Crafted beautiful websites and supported interns within the team.

- Developed a web application (gstickerss.com) using React JS to showcase company products.
- Created a responsive email template using Foundation Emails for newsletters.
- Developed a mobile game (Goldbar) using Unity.
- Built two websites to promote Goldbar using React JS.
- Designed a web application using Adobe XD for a Beta Testing platform.
- Directed and edited short informational videos using iMovie to raise awareness for company products.
- Converted Bonanza, a hard copy card game into a web game.
- Mentored new starters and interns throughout their employment 
- Conducted interviews and created interview transcripts for the panel.`,
    },
    {
      company: "PsypherTxt",
      href: "",
      badges: [],
      location: "Greater Accra Region, Ghana · On-site",
      title: "Software Intern",
      logoUrl: "/psyphertxt.jpeg",
      start: "Jun 2016",
      end: "Aug 2016",
      description: `Psyphertxt is made up of a passionate team developing mobile apps and games committed to a mission of fostering innovation through our varied mobile app products.

- Designed and developed an android based mobile application for online auctions 
- Marketed a messaging application that the company was building at the 2016 Africa Mobile & ICT Expo`,
    },
  ],
  education: [
    {
      school: "Middlesex University",
      href: "https://ashesi.edu.gh",
      degree: "MSc BISM",
      logoUrl: "/middlesex.png",
      start: "2019",
      end: "2020",
      description: "Masters in Business Information Systems Management (BISM)",
    },
    {
      school: "Ashesi University",
      href: "https://ashesi.edu.gh",
      degree: "BSc Computer Science",
      logoUrl: "/ashesi.jpeg",
      start: "2013",
      end: "2017",
      description: "Bachelor in Computer Science",
    },
  ],
  projects: [],
} as const;
