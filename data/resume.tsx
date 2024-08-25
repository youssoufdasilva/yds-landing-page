import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
// import { HomeIcon } from "lucide-react";

export const DATA = {
  name: "Youssouf da Silva",
  initials: "YdS",
  url: "https://youssoufdasilva.com",
  location: "Bristol, UK",
  locationLink: "https://www.google.com/maps/place/Bristol",
  description:
    "Senior Full Stack Software Engineer | Project Management",
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
      location: "Remote",
      title: "Senior Full Stack Software Engineer",
      logoUrl: "/intellium.svg",
      start: "July 2023",
      end: "Present",
      description:
        "wip - Adipisicing sint laboris mollit aute pariatur fugiat excepteur do nulla. Commodo ea sit sunt exercitation quis consectetur deserunt fugiat. Amet sint aute qui ex ipsum incididunt dolore ullamco. Tempor ipsum adipisicing ullamco ullamco ipsum nisi magna officia duis deserunt ex. Officia aliquip amet pariatur aute aliqua deserunt aliquip magna irure.",
    },
  ],
  education: [
    {
      school: "Ashesi University",
      href: "https://ashesi.edu.gh",
      degree: "BSc Computer Science",
      logoUrl: "/Ashesi.webp",
      start: "2013",
      end: "2017",
      description:
        "wip - Adipisicing sint laboris mollit aute pariatur fugiat excepteur do nulla. Commodo ea sit sunt exercitation quis consectetur deserunt fugiat. Amet sint aute qui ex ipsum incididunt dolore ullamco. Tempor ipsum adipisicing ullamco ullamco ipsum nisi magna officia duis deserunt ex. Officia aliquip amet pariatur aute aliqua deserunt aliquip magna irure.",
    },
  ],
  projects: []
} as const;
