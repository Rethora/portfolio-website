import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { techStack } from "@/resources/content";

type Team = {
  name: string;
  role: string;
  avatar: string;
  linkedIn: string;
};

export type Metadata = {
  title: string;
  date: string;
  dateFrom?: string;
  dateTo?: string;
  description: string;
  image?: string;
  images: string[];
  tag?: string;
  team: Team[];
  url?: string;
  repository?: string;
  technologies?: string[];
};

import { notFound } from "next/navigation";

function getMDXFiles(dir: string) {
  if (!fs.existsSync(dir)) {
    notFound();
  }

  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

function readMDXFile(filePath: string) {
  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const rawContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(rawContent);

  const metadata: Metadata = {
    title: data.title || "",
    date: data.date,
    dateFrom: data.dateFrom || "",
    dateTo: data.dateTo || "",
    description: data.description || "",
    image: data.image || "",
    images: data.images || [],
    tag: data.tag || [],
    team: data.team || [],
    url: data.url || "",
    repository: data.repository || "",
    technologies: data.technologies || [],
  };

  return { metadata, content };
}

function getMDXData(dir: string) {
  const mdxFiles = getMDXFiles(dir);
  return mdxFiles.map((file) => {
    const { metadata, content } = readMDXFile(path.join(dir, file));
    const slug = path.basename(file, path.extname(file));

    return {
      metadata,
      slug,
      content,
    };
  });
}

export function getPosts(customPath = ["", "", "", ""]) {
  const postsDir = path.join(process.cwd(), ...customPath);
  return getMDXData(postsDir);
}

export function getTechStack(technologies: string[]) {
  return techStack.filter((tech) => technologies.includes(tech.icon));
}
