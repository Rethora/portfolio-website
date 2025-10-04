import { Logo } from "@once-ui-system/core";

const person = {
  firstName: "Dane",
  lastName: "Roelofs",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Software Engineer",
  avatar: "/images/avatar.jpg",
  email: "example@gmail.com",
  location: "America/Los_Angeles", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/rethora",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/dane-roelofs/",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const techStack = [
  {
    name: 'AWS',
    icon: 'aws',
  },
  {
    name: 'Azure',
    icon: 'azure',
  },
  {
    name: 'Bootstrap',
    icon: 'bootstrap',
  },
  {
    name: 'C#',
    icon: 'csharp',
  },
  {
    name: 'CSS',
    icon: 'css',
  },
  {
    name: 'D3',
    icon: 'd3',
  },
  {
    name: 'Django',
    icon: 'django',
  },
  {
    name: 'Docker',
    icon: 'docker',
  },
  {
    name: 'Eclipse',
    icon: 'eclipse',
  },
  {
    name: 'Electron',
    icon: 'electron',
  },
  {
    name: 'Express',
    icon: 'express'
  },
  {
    name: 'Golang',
    icon: 'golang',
  },
  {
    name: 'HTML',
    icon: 'html',
  },
  {
    name: 'I18n',
    icon: 'i18next',
  },
  {
    name: 'Java',
    icon: 'java',
  },
  {
    name: 'JavaScript',
    icon: 'javascript',
  },
  {
    name: 'Maven',
    icon: 'maven',
  },
  {
    name: 'MongoDB',
    icon: 'mongodb',
  },
  {
    name: 'Next.js',
    icon: 'next',
  },
  {
    name: 'Node.js',
    icon: 'node',
  },
  {
    name: 'NPM',
    icon: 'npm',
  },
  {
    name: 'PostgreSQL',
    icon: 'postgresql',
  },
  {
    name: 'Python',
    icon: 'python',
  },
  {
    name: 'Ruby on Rails',
    icon: 'rails',
  },
  {
    name: 'React',
    icon: 'react',
  },
  {
    name: 'Redux',
    icon: 'redux',
  },
  {
    name: 'Ruby',
    icon: 'ruby',
  },
  {
    name: 'Selenium',
    icon: 'selenium',
  },
  {
    name: 'Spigot',
    icon: 'spigot',
  },
  {
    name: 'TailwindCSS',
    icon: 'tailwind',
  },
  {
    name: 'Twitch4J',
    icon: 'twitch',
  },
  {
    name: 'TypeScript',
    icon: 'typescript',
  },
  {
    name: 'Unity',
    icon: 'unity',
  },
  {
    name: 'Visual Studio',
    icon: 'visualstudio',
  },
  {
    name: 'Vite',
    icon: 'vite',
  },
  {
    name: 'WebGL',
    icon: 'webgl',
  },
  {
    name: 'Webpack',
    icon: 'webpack',
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building bridges between design and code</>,
  featured: {
    display: true,
    title: <>Recent project: <strong className="ml-4">Once UI</strong></>,
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      I'm Selene, a design engineer at <Logo icon="/trademarks/wordmark-dark.svg" style={{ display: "inline-flex", top: "0.25em", marginLeft: "-0.25em" }}/>, where I craft intuitive
      <br /> user experiences. After hours, I build my own projects.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        TODO: Add introduction
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Educational Vision Technologies",
        timeframe: "2020 - Present",
        role: "Software Engineer",
        achievements: [
          <>
            TODO: Add achievements
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Creativ3",
        timeframe: "2018 - 2022",
        role: "Lead Designer",
        achievements: [
          <>
            Developed a design system that unified the brand across multiple platforms, improving
            design consistency by 40%.
          </>,
          <>
            Led a cross-functional team to launch a new product line, contributing to a 15% increase
            in overall company revenue.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "University of Jakarta",
        description: <>Studied software engineering.</>,
      },
      {
        name: "Build the Future",
        description: <>Studied online marketing and personal branding.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Figma",
        description: <>Able to prototype in Figma with Once UI with unnatural speed.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Next.js",
        description: <>Building next gen apps with Next.js + Once UI + Supabase.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const personal = {
  path: "/personal",
  label: "Personal",
  title: `Personal – ${person.name}`,
  description: `Personal projects by ${person.name}`,
};

const contributions = {
  path: "/contributions",
  label: "Contributions",
  title: `Contributions – ${person.name}`,
  description: `Open source contributions by ${person.name}`,
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export {
  person,
  social,
  techStack,
  newsletter,
  home,
  about,
  blog,
  work,
  personal,
  contributions,
  gallery,
};
