import { existsSync } from "https://deno.land/std/fs/mod.ts";
import { SourceFolderEmptyError, SourceFolderMissingError } from "./errors.ts";
import { DenoteConfig } from "../config.ts";

function loadSourceFilePaths(litheConfig: DenoteConfig): string[] {
  const sourceFolderPath = litheConfig.getSourceFolderPath();
  if (!existsSync(sourceFolderPath)) {
    throw new SourceFolderMissingError(sourceFolderPath);
  }
  const sourceFiles = [...Deno.readDirSync(sourceFolderPath)]
    .filter((entry: Deno.DirEntry) => entry.isFile)
    .filter((entry: Deno.DirEntry) =>
      entry.name.endsWith(litheConfig.values.fileExtension)
    )
    .map((entry: Deno.DirEntry) => `${sourceFolderPath}/${entry.name}`);
  if (!sourceFiles.length) {
    throw new SourceFolderEmptyError(
      sourceFolderPath,
      litheConfig.values.fileExtension,
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

export function getTemplate(litheConfig: DenoteConfig): string {
  const templateUrl = litheConfig.getTemplateFilePath();
  console.log("templatePath", templateUrl);
  return Deno.readTextFileSync(templateUrl);
}

export function loadSourceFileContents(sourceConfig: DenoteConfig): string[] {
  return loadSourceFilePaths(sourceConfig)
    .map((filePath: string) => getFileContent(filePath));
}
