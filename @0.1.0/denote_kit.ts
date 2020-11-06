import { compile } from "./compiler/compiler.ts";
import { write } from "./io/write.ts";
import { getTemplate, loadSourceFileContents } from "./io/read.ts";
import { DenoteConfig, IDenoteConfig } from "./config.ts";


export function lithe(config: IDenoteConfig): void {
  console.time("compiling finished");

  const sourceConfig = new DenoteConfig(config);
  const sourceFileContents = loadSourceFileContents(sourceConfig);
  const template = getTemplate(sourceConfig);

  const output = compile(sourceFileContents, template);
  write(output, sourceConfig);
  console.timeEnd("compiling finished");
}
