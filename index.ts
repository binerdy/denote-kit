import { compile } from "./compiler/compiler.ts";
import FallbackLitheConfig, { ILitheConfig } from "./config.ts";
import { write } from "./io/write.ts";
import { getTemplate, loadSourceFileContents } from "./io/read.ts";

lithe();

export function lithe(sourceConfig?: ILitheConfig): void {
  console.time("compiling finished");
  if (!sourceConfig) {
    sourceConfig = new FallbackLitheConfig();
  }
  const sourceFileContents = loadSourceFileContents(sourceConfig);
  const template = getTemplate(sourceConfig);

  const output = compile(sourceFileContents, template);
  write(output, sourceConfig);
  console.timeEnd("compiling finished");
}
