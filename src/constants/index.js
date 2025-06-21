import {
  c,
  python,
  java,
  cpp,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  edunet,
  weatherpedia,
  termpw,
  payloadmaster,
  threejs,
  mhft,
  sketcher,
  mathwork,
  CompileVortex,
  docker,
  download,
  eduskill,
  PrepWise,
  ClubsHub,
  CropCare,
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
  {
    id: "achievements",
    title: "Achievements"
  }
];

export const services = [
  { title: "C", icon: c },
  { title: "C++", icon: cpp },
  { title: "DevOps", icon: download },
  { title: "MERN", icon: docker },
];

export const technologies = [
  { name: "HTML 5", icon: html },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "JavaScript", icon: javascript },
  { name: "Rect JS", icon: reactjs },
  { name: "Node JS", icon: nodejs },
  { name: "Three JS", icon: threejs },
  { name: "git", icon: git },
];

export const experiences = [
  {
    title: "Software Developer Intern",
    company_name: "RK Innovate",
    icon: eduskill,
    iconBg: "#161329",
    date: "Oct 2024 - Jan 2025",
    points: [
      "Contributions: Worked with deployed and managing Cloud Run Functions on GCP of clients.",
      "Built highly scalable and responsive website for RK Innovate increasing efficiency by 15%"
    ],
  },
  {
    title: "Business Development Intern",
    company_name: "Mathwork | AICTE",
    icon: mathwork,
    iconBg: "#161329",
    date: "May 2024 - July 2024",
    points: [
      "Industry Experience approaching clients and handling SEOs for clients’ website",
    ],
  },
  {
    title: "VLabs Development by IIT Bombay",
    company_name: "IIT Bombay | AICTE",
    icon: edunet,
    iconBg: "#161329",
    date: "Jan 2023 - August 2023",
    points: [
      "Contributed in Virtual Labs Development for Data Structure and Algorithm simulations",
      "Hands on experience with core JavaScript Fundaments"
    ],
  },
];

export const projects = [
  {
    name: "PrepWise AI: Smarter Prep: Better Results",
    description:
      "PrepWise AI simplifies interview preparation with personalized, AI-driven mock interviews and  preparation strategies.",
    tags: [
      { name: "Next Js", color: "blue-text-gradient" },
      { name: "Vercel ", color: "green-text-gradient" },
      { name: "GCP CI/CD Deployement", color: "pink-text-gradient" },
      { name: "Gemini API", color: "yellow-text-gradient" },
    ],
    image: PrepWise,
    source_code_link: "https://prep-wise-ai-lac.vercel.app/",
  },
  {
    name: "ClubsHub: Onestop Event Management Platform",
    description:
      "Three-Level Approval System – Events pass through Club Admin → HOD → Dean for structured validation ensuring transparency, accountability, and streamlined event management.",
    tags: [
      { name: "MERN Stack", color: "blue-text-gradient" },
      { name: "Google Cloud", color: "green-text-gradient" },
      { name: "Javascript", color: "pink-text-gradient" },
      { name: "Docker", color: "pink-text-gradient" },
    ],
    image: ClubsHub,
    source_code_link: "https://github.com/Yashini13/ClubsHub/",
  },
  {
    name: "CROP CARE - Protecting Plants for Healthier Harvest",
    description:
      "An Android app for real-time crop and plant disease detection, offering instant mitigation strategies.",
    tags: [
      { name: "Machine Learning", color: "blue-text-gradient" },
      { name: "Jupyter Notebook", color: "green-text-gradient" },
      { name: "RESET", color: "pink-text-gradient" },
      { name: "React Native", color: "pink-text-gradient" },
    ],
    image: CropCare,
    source_code_link:
      "https://github.com/lohitkolluri/mental_health_fitness_tracker/",
  }
];
