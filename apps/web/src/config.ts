export const metaData = {
  baseUrl: "http://localhost:3000/",
  title: "rodrigo.work",
  name: "",
  avatar: "https://avatars.githubusercontent.com/u/270885?v=4",
  ogImage: "/opengraph-image.png",
  description:
    "A clean, fast, and lightweight portfolio template built with Next.js, Vercel, and Tailwind CSS for optimal performance.",
};

export const socialLinks = {
  twitter: "https://x.com/1tssirius",
  github: "https://github.com/1msirius/Nextfolio",
  instagram: "https://www.instagram.com/",
  linkedin: "https://www.linkedin.com/",
  email: "mailto:example@gmail.com",
};
export interface Project {
  title: string;
  year: number;
  description: string;
  url: string;
}

export const navItems = {
  "/": { name: "Home" },
  // "/blog": { name: "Blog" },
  // "/projects": { name: "Projetos" },
  // "/photos": { name: "Photos" },
};

export const projects: Project[] = [
  {
    title: "Project One",
    year: 2024,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam veritatis dolorem rem praesentium dicta labore, at laudantium quisquam.",
    url: "https://example.com/",
  },
  {
    title: "Project Two",
    year: 2024,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam veritatis dolorem rem praesentium dicta labore, at laudantium quisquam.",
    url: "https://example.com/",
  },
  {
    title: "Project Three",
    year: 2024,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam veritatis dolorem rem praesentium dicta labore, at laudantium quisquam.",
    url: "https://example.com/",
  },
  {
    title: "Project Four",
    year: 2024,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam veritatis dolorem rem praesentium dicta labore, at laudantium quisquam.",
    url: "https://example.com/",
  },
  {
    title: "Project Five",
    year: 2024,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam veritatis dolorem rem praesentium dicta labore, at laudantium quisquam.",
    url: "https://example.com/",
  },
  {
    title: "Project Six",
    year: 2024,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam veritatis dolorem rem praesentium dicta labore, at laudantium quisquam.",
    url: "https://example.com/",
  },
];
