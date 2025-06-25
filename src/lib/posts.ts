import fs from "fs/promises";
import matter from "gray-matter";
import path from "path";
import { remark } from "remark";
import html from "remark-html";

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  image: string;
}

export interface Post extends PostMeta {
  html: string;
}

const postsDir = path.join(process.cwd(), "content/blog");

async function getAllSlugs(): Promise<string[]> {
  const files = await fs.readdir(postsDir);
  // only .md files
  return files.filter((f) => f.endsWith(".md")).map((f) => f.replace(/\.md$/, ""));
}

async function getPostMeta(slug: string): Promise<PostMeta | null> {
  try {
    const raw = await fs.readFile(path.join(postsDir, `${slug}.md`), "utf8");
    const { data } = matter(raw);
    const { title, date: rawDate, image } = data as {
      title: string;
      date: string | Date;
      image: string;
    };
    const date = typeof rawDate === "string" ? rawDate : rawDate.toISOString().split("T")[0];
    return { slug, title, date, image };
  } catch {
    return null;
  }
}

export async function getAllPostsMeta(): Promise<PostMeta[]> {
  const slugs = await getAllSlugs();
  const metas: PostMeta[] = [];
  for (const slug of slugs) {
    const meta = await getPostMeta(slug);
    if (meta) metas.push(meta);
  }
  // sort newest first
  return metas.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPost(slug: string): Promise<Post | null> {
  try {
    const raw = await fs.readFile(path.join(postsDir, `${slug}.md`), "utf8");
    const { data, content } = matter(raw);
    console.log(data, content)
    const processed = await remark().use(html).process(content);
    console.log(processed)
    const htmlString = processed.toString();
    const { title, date: rawDate, image } = data as {
      title: string;
      date: string | Date;
      image: string;
    };
    const date = typeof rawDate === "string" ? rawDate : rawDate.toISOString().split("T")[0];
    return {
      slug,
      title,
      date,
      image,
      html: htmlString,
    };
  } catch {
    return null;
  }
}
