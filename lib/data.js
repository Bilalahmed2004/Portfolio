export const profile = {
  name: "Bilal Ahmed", role: "MERN Stack Developer", city: "Malir, Karachi",
  email: "ashirahmed975@gmail.com", phone: "+92 312 3910355",
  linkedin: "https://www.linkedin.com/in/bilal-ahmed-470273294",
  github: "https://github.com/Bilalahmed2004",
  upwork: "https://www.upwork.com/freelancers/~01de58e8511dc61916",
  resume: "/Bilal_Ahmed_Full_Stack_Developer.docx",
};
export const skills = {
  "Front-end": ["HTML", "CSS", "JavaScript", "React.js", "Tailwind CSS", "Bootstrap", "Material-UI"],
  "Back-end": ["Node.js", "Express", "ASP.NET", "Netlify Functions"],
  "Databases": ["MongoDB / Mongoose", "MySQL", "phpMyAdmin"],
  "Languages and tools": ["JavaScript", "C#", "Advanced Excel", "Microsoft Office"],
};
export const experience = [
  { when: "June 2026 to now", title: "Freelance Full Stack Developer", where: "Fiverr and Upwork",
    points: ["Build websites and web apps to client requirements, from requirements call to delivery.",
      "Create responsive interfaces and reusable React components.",
      "Develop Node.js and Express backends with MongoDB and Mongoose, REST APIs and JWT authentication."] },
  { when: "2023 to 2026", title: "Diploma in Software Engineering", where: "Aptech Learning Pakistan", points: [] },
  { when: "2021 to 2023", title: "Intermediate, Computer Science", where: "H.S.C, Karachi", points: [] },
];
// Add repo links in `repo` when ready. Empty strings are hidden.
// Edit the `tech` list of Word2PDF to match what you actually used.
export const projects = [
  { name: "Parees", status: "Live", tech: ["HTML", "CSS", "JavaScript", "Netlify"],
    text: "A responsive perfume store. Products are grouped into clear sections so visitors can browse on desktop, tablet or phone.",
    live: "https://fluffy-dasik-80495f.netlify.app/", repo: "" },
  { name: "Eventify", status: "Live", tech: ["React.js", "Tailwind CSS", "Netlify"],
    text: "An event browsing app built from reusable React components: event cards, navigation and page sections that adapt to any screen size.",
    live: "https://eventify0.netlify.app/", repo: "" },
  { name: "Word2PDF", status: "Live", tech: ["Web app", "Vercel"],
    text: "A web tool that converts Word documents into PDF files, so anyone can turn a .docx into a shareable PDF in a few clicks.",
    live: "https://word2-pdf-omega.vercel.app/", repo: "" },
  { name: "Kharido", status: "In progress", tech: ["MongoDB", "Express", "React", "Node.js", "Tailwind CSS"],
    text: "A full stack MERN store with a product catalogue, shopping cart, JWT login and REST APIs for products and orders. Checkout is being built now.",
    live: "", repo: "" },
];
export const services = [
  ["Websites and landing pages", "Fast, responsive sites that look right on every screen."],
  ["Full stack MERN apps", "React front end, Node and Express API, MongoDB database."],
  ["APIs and authentication", "REST endpoints, CRUD, and secure JWT login."],
  ["E-commerce builds", "Catalogue, cart and orders for small online stores."],
];
