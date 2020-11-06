import { existsSync } from "https://deno.land/std/fs/mod.ts";
import { ILitheConfig } from "../config.ts";

export function write(output: string, sourceConfig: ILitheConfig): void {
  const outputFolderPath = sourceConfig.getOutputFolderPath();
  console.log("outputFolderPath", outputFolderPath);
  createOutputFolderIfNotExists(outputFolderPath);
  const outputFilePath = sourceConfig.getOutputFilePath();
  console.log("targetOutputFile", outputFilePath);
  Deno.writeTextFileSync(outputFilePath, output);
}

function createOutputFolderIfNotExists(outputFolderPath: string): void {
  if (!existsSync(outputFolderPath)) {
    Deno.mkdirSync(outputFolderPath);
  }
}
