import { denote } from "https://raw.githubusercontent.com/binerdy/denote/master/@0.2.0/denote.ts";
import { IArticle } from "./article.ts";
import { ArticleParseError } from "./errors.ts";

function parseArticle(lines: string[]): IArticle {
  let date: string;
  let title: string;
  let author: string;
  let summary: string;
  let content: string;
  try {
    date = lines[0].trim();
  } catch {
    throw new ArticleParseError("date");
  }
  try {
    title = lines[1].trim();
  } catch {
    throw new ArticleParseError("title");
  }
  try {
    author = lines[2].trim();
  } catch {
    throw new ArticleParseError("author");
  }
  try {
    summary = lines[3].trim();
  } catch {
    throw new ArticleParseError("summary");
  }
  try {
    content = lines.slice(3).join("\n");
  } catch {
    throw new ArticleParseError("content");
  }
  return {
    date: date,
    title: title,
    author: author,
    summary: summary,
    content: content,
  };
}

function parseArticles(sourceFileContents: string[]): IArticle[] {
  return sourceFileContents
    .map((content: string) => content.split("\n"))
    .map(parseArticle);
}

export function compile(
  sourceFileContents: string[],
  template: string,
): string {
  const articles = parseArticles(sourceFileContents);
  return denote(template, { articles: articles });
}
