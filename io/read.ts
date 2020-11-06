import * as path from "https://deno.land/std@0.76.0/path/mod.ts";
import { existsSync } from "https://deno.land/std/fs/mod.ts";
import { SourceFolderEmptyError, SourceFolderMissingError } from "./errors.ts";
import { ILitheConfig } from "../config.ts";

function loadSourceFilePaths(litheConfig: ILitheConfig): string[] {
  const sourceFolderPath = litheConfig.getSourceFolderPath();
  if (!existsSync(sourceFolderPath)) {
    throw new SourceFolderMissingError(sourceFolderPath);
  }
  const sourceFiles = [...Deno.readDirSync(sourceFolderPath)]
    .filter((entry: Deno.DirEntry) => entry.isFile)
    .filter((entry: Deno.DirEntry) =>
      entry.name.endsWith(litheConfig.fileExtension)
    )
    .map((entry: Deno.DirEntry) => `${sourceFolderPath}/${entry.name}`);
  if (!sourceFiles.length) {
    throw new SourceFolderEmptyError(
      sourceFolderPath,
      litheConfig.fileExtension,
    );
  }
  for (const sourceFile of sourceFiles) {
    console.log("sourceFile", sourceFile);
  }
  return sourceFiles;
}

function getFileContent(filePath: string): string {
  return Deno.readTextFileSync(filePath);
}

export function getTemplate(litheConfig: ILitheConfig): string {
  const templateUrl = litheConfig.getTemplateFilePath();
  console.log("templatePath", templateUrl);
  return Deno.readTextFileSync(templateUrl);
}

export function loadSourceFileContents(sourceConfig: ILitheConfig): string[] {
  return loadSourceFilePaths(sourceConfig)
    .map((filePath: string) => getFileContent(filePath));
}
