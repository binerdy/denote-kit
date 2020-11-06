export class ArticleParseError extends Error {
  constructor(variable: string) {
    super("Error while parsing article.");
    this.message =
      `${this.message}\n${variable} is undefined.\nFile format should be\ndate\ntitle\nauthor\nsummary\ncontent.`;
  }
}
