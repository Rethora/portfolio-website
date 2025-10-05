import Link from "next/link";

const person = {
  firstName: "Dane",
  lastName: "Roelofs",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Full Stack Software Developer",
  avatar: "/images/avatar.jpeg",
  email: "roelofs.l.dane@gmail.com",
  location: "America/Los_Angeles", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English"], // optional: Leave the array empty if you don't want to display languages
  city: "San Diego",
  state: "California",
  country: "US",
};

const newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}&apos;s Newsletter</>,
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
  headline: <>Engineering Solutions Through Resilience and Code</>,
  featured: {
    display: false,
    title: <>Recent project: <strong className="ml-4">Educational Vision Technologies</strong></>,
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      I&apos;m Dane, a {person.role} at <Link href="https://evt.ai" target="_blank" rel="noopener noreferrer">Educational Vision Technologies</Link>, where I design and build educational software aimed at improving the clarity and retention of lecture content.
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
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Hi, I&apos;m Dane! I&apos;m a {person.role} with over {new Date().getFullYear() - 2020} years of experience, passionate about building efficient, reliable, and user-focused software from concept to deployment and beyond.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Educational Vision Technologies",
        timeframe: "2021 - Present",
        role: "Lead Full Stack Software Developer",
        achievements: [
          <>
            Design, document and develop secure, scalable APIs used by multiple services including cloud platforms and front end web apps, with complex user authentication and role-based access control.
          </>,
          <>
            Participate in daily team meetings to plan, implement, and maintain software features as well as tasks relating to DevOps and infrastructure updates.
          </>,
          <>
            Serve as the lead software developer, overseeing code quality, conducting code reviews, guiding architecture decisions, and mentoring junior developers and interns.
          </>,
          <>
            Responsible for ensuring all platform features comply with WCAG accessibility standards, including the implementation of custom solutions to support users with disabilities.
          </>,
          <>
            Implement integrations with third-party platforms, such as Canvas LMS, adhering to strict data handling, authentication, and technical standards.          
          </>
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "https://evt.ai/wp-content/uploads/2021/11/evt-bold-logo-white-228x122-1.png",
            alt: "EVT Logo",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "LEARN Academy",
        timeframe: "2021 - 2022",
        role: "Full Stack Software Teacher Assistant and Mentor",
        achievements: [
          <>
            Provided career mentorship, including portfolio reviews, mock technical interviews, and resume feedback.
          </>,
          <>
            Encouraged a collaborative and inclusive learning environment, fostering peer-to-peer learning and growth.
          </>,
          <>
            Supported students in building and deploying capstone projects, ensuring code quality and functionality.
          </>,
          <>
            Helped students adopt best practices in version control (Git/GitHub), clean coding, and debugging techniques.
          </>,
          <>
            Assisted lead instructors during live lectures by managing the chat, clarifying complex topics, and offering real-time troubleshooting.
          </>,
        ],
        images: [
          {
            src: "/images/projects/learn/learn-logo.jpeg",
            alt: "Learn Logo",
            width: 16,
            height: 9,
          }
        ],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "SDCCD",
        description: <>Studied computer science.</>,
      },
      {
        name: "Duke University",
        description: <>Multiple course certificates in Java software engineering and software principles.</>,
      },
      {
        name: "LEARN Academy",
        description: <>Completed 500+ hours of direct coding experience in an intensive development bootcamp.</>,
      },
    ],
  },
  technical: {
    display: false, // set to false to hide this section
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
