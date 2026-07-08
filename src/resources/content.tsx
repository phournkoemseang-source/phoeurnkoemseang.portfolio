import { About, Blog, Home, Newsletter, Person, Projects, Social } from "@/types";
import { Line, Row, Text, Button } from "@once-ui-system/core";

const person: Person = {
  firstName: "Koemseang",
  lastName: "Pho eurn",
  name: "PHOEURN Koemseang",
  role: "Web Developer & IT Student",
  avatar: "/images/me.jpg",
  email: "phournkoemseang@gmail.com",
  phone: "+855 312 326 668",
  portfolio: "https://phournkoemseang-source.github.io/magic-portfolio",
  location: "Asia/Phnom_Penh",
  locationLabel: "Phnom Penh, Cambodia",
  languages: ["Khmer", "English"],
  locale: "en",
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My newsletter about web development and technology</>,
};

const social: Social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/phournkoemseang-source",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/phoeurn-koemseang",
    essential: true,
  },
  {
    name: "X",
    icon: "x",
    link: "https://x.com/phournkoemseang",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:phournkoemseang@gmail.com",
    essential: true,
  },
  {
    name: "Telegram",
    icon: "telegram",
    link: "https://t.me/Ph_koemseang",
    essential: false,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: "PHOEURN Koemseang - Web Developer Portfolio | PNC Cambodia",
  description: `Portfolio website of ${person.name}, ${person.role} at Passerelles Numeriques Cambodia`,
  headline: (
    <>
      Aspiring Full-Stack Web Developer
    </>
  ),
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <Text marginRight="4" onBackground="brand-medium">
          IT Student at Passerelles Numériques Cambodia
        </Text>
      </Row>
    ),
    href: "#about",
  },
  subline: (
    <>
      Building clean, responsive, and user-friendly web applications with modern technologies.<br />
      A passionate Web Developer & IT Student crafting modern, user-centric digital experiences from Cambodia.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from Cambodia`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "",
  },
  intro: {
    display: true,
    title: "About Me",
    description: (
      <>
        I am PHOEURN Koemseang, a passionate Web Developer and IT student at Passerelles Numériques Cambodia (PNC).
        I chose web development because it allows me to combine creativity with technical problem-solving,
        building applications that make a real impact. My training at PNC has equipped me with strong
        foundations in front-end and back-end technologies, and I am committed to becoming a skilled
        full-stack developer. I enjoy collaborating on team projects, learning new technologies, and
        continuously improving my craft.
      </>
    ),
  },
  work: {
    display: true,
    title: "Projects Experience",
    experiences: [
      {
        company: "LokPa Restaurant",
        timeframe: "May 01, 2026",
        role: "Full-stack Developer",
        achievements: [
          <>
            Developed a premium dining website with a dark aesthetic using Vue, JavaScript, and TypeScript, featuring an interactive food ordering system.
          </>,
          <>
            Integrated MySQL for database management and utilized Postman and Apidog for API endpoint testing; deployed on Vercel.
          </>,
        ],
        images: [],
      },
      {
        company: "HR-Payroll-System",
        timeframe: "May 18 - Jun 27, 2026",
        role: "Backend Developer",
        achievements: [
          <>
            Built an HR & Payroll Management System with strong OOP principles, handling employee data, salary calculations, attendance tracking, and payroll processing.
          </>,
          <>
            Used MySQL for database management and Postman for testing APIs and endpoints.
          </>,
          <>
            Collaborated using GitHub and AI tools; assisted in UX/UI design and deployed on Render.
          </>,
        ],
        images: [],
      },
      {
        company: "NekMak Restaurant",
        timeframe: "May 01, 2026",
        role: "Full-stack Developer",
        achievements: [
          <>
            Developed a premium dining website with a dark aesthetic, featuring an interactive food ordering system and table reservation module.
          </>,
          <>
            Integrated Firebase for real-time data management and built a fully responsive frontend using Vanilla JavaScript, HTML5, and Tailwind CSS.
          </>,
        ],
        images: [],
      },
      {
        company: "Service Rental Vehicles - VC1 Project",
        timeframe: "Feb 15 - Apr 02, 2026",
        role: "Developer",
        achievements: [
          <>
            Developed a web platform for vehicle rental (motorbikes, bicycles, cars) enabling users to search nearby shops and book instantly.
          </>,
          <>
            Used Postman for testing API endpoints during development.
          </>,
          <>
            Contributed to frontend (Vue.js), backend (Laravel), and MySQL database integration; deployed on AWS.
          </>,
        ],
        images: [],
      },
      {
        company: "Music Player",
        timeframe: "Dec 22, 2025 - Jan 04, 2026",
        role: "Front-End Developer",
        achievements: [
          <>
            Developed a responsive music web app with user authentication, role-based access, play/pause controls, song upload, and real-time search.
          </>,
          <>
            Built frontend using JavaScript integrated with Firebase and LocalStorage; deployed on Vercel.
          </>,
        ],
        images: [],
      },
      {
        company: "Online Shopping (E-commerce)",
        timeframe: "Sep 02 - Oct 09, 2025",
        role: "Frontend Developer",
        achievements: [
          <>
            Developed an e-commerce platform where users can browse categories and view products.
          </>,
          <>
            Contributed to frontend with HTML, CSS, and JavaScript; used GitHub, Figma, and Vercel for version control, design, and deployment.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Education",
    institutions: [
      {
        name: "Passerelles Numériques Cambodia (PNC)",
        description: (
          <>
            2025 - Present: Pursuing Associate Degree in Web Programming.<br />
            Relevant courses: HTML, CSS, JavaScript, Backend Development, Databases, UI/UX Design.
          </>
        ),
      },
      {
        name: "High School",
        description: (
          <>
            2021 - 2024: High School Graduate.
          </>
        ),
      },
    ],
  },
  technical: {
    display: true,
    title: "Skills & Tools",
    skills: [
      {
        title: "Programming Languages",
        description: (
          <>Languages I use for building software and web applications.</>
        ),
        tags: [
          { name: "JavaScript", icon: "javascript" },
          { name: "TypeScript", icon: "typescript" },
          { name: "PHP", icon: "php" },
          { name: "Python", icon: "python" },
        ],
        images: [],
      },
      {
        title: "Frontend Development",
        description: (
          <>Building responsive and interactive user interfaces.</>
        ),
        tags: [
          { name: "HTML", icon: "html" },
          { name: "CSS", icon: "css" },
        ],
        images: [],
      },
      {
        title: "Backend & Frameworks",
        description: (
          <>Server-side development and application frameworks.</>
        ),
        tags: [
          { name: "Node.js", icon: "nodejs" },
          { name: "Laravel", icon: "laravel" },
        ],
        images: [],
      },
      {
        title: "Database",
        description: (
          <>Database management and data storage solutions.</>
        ),
        tags: [
          { name: "MySQL", icon: "mysql" },
          { name: "MongoDB", icon: "mongodb" },
          { name: "RDBMS", icon: "database" },
        ],
        images: [],
      },
      {
        title: "Development, DevOps & CMS",
        description: (
          <>Tools for version control, deployment, and content management.</>
        ),
        tags: [
          { name: "GitHub", icon: "github" },
          { name: "Docker", icon: "docker" },
          { name: "Postman", icon: "postman" },
          { name: "WordPress", icon: "wordpress" },
        ],
        images: [],
      },
      {
        title: "Data Analysis",
        description: (
          <>Data visualization and business intelligence tools.</>
        ),
        tags: [
          { name: "Power BI", icon: "powerbi" },
        ],
        images: [],
      },
      {
        title: "Design & Collaboration",
        description: (
          <>Tools for design, project management, and collaboration.</>
        ),
        tags: [
          { name: "Jira", icon: "jira" },
          { name: "Figma", icon: "figma" },
          { name: "Canva", icon: "canva" },
          { name: "Draw.io", icon: "drawio" },
        ],
        images: [],
      },
      {
        title: "Soft Skills",
        description: (
          <>Personal attributes that enable effective collaboration and problem-solving.</>
        ),
        tags: [
          { name: "Leadership", icon: "leadership" },
          { name: "Teamwork", icon: "teamwork" },
          { name: "Critical Thinking", icon: "criticalThinking" },
          { name: "Time Management", icon: "timeManagement" },
          { name: "Project Management", icon: "projectManagement" },
          { name: "Effective Communication", icon: "communication" },
          { name: "Adaptability", icon: "adaptability" },
          { name: "Self Motivation", icon: "selfMotivation" },
          { name: "Responsibility", icon: "responsibility" },
          { name: "Respect", icon: "respect" },
        ],
        images: [],
      },
    ],
  },
};

const projects: Projects = {
  path: "/projects",
  label: "Projects",
  title: `Projects – ${person.name}`,
  description: `Project case studies and write-ups by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/projects/posts
  // All projects will be listed on the /projects route
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Blog – case studies & write-ups",
  description: `Blog posts and write-ups by ${person.name}`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};export { person, social, newsletter, home, about, projects, blog };
