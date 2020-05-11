import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

const postDirectory = join(process.cwd(), "_posts");

export function getPostSlug() {
  return fs.readdirSync(postDirectory);
}

export function getPostBySlug(slug) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { data, content, slug: realSlug };
}

export function getPosts() {
  const slugs = getPostSlug();

  return slugs.map((slug) => getPostBySlug(slug));
}
