import * as path from "https://deno.land/std@0.76.0/path/mod.ts";

export interface IDenoteConfig {
  basePath: string;
  fileExtension: string;
  sourceFolderName: string;
  outputFolderName: string;
  outputFileName: string;
  templateFileName: string;
}

export class DenoteConfig {
  constructor(public values: IDenoteConfig) {
  }

  getSourceFolderPath = () =>
    path.join(this.values.basePath, this.values.sourceFolderName).slice(1)
      .replaceAll("\\", "/");
  getOutputFolderPath = () =>
    path.join(this.values.basePath, this.values.outputFolderName).slice(1)
      .replaceAll("\\", "/");
  getOutputFilePath = () =>
    path.join(
      this.values.basePath,
      this.values.outputFolderName,
      this.values.outputFileName,
    ).slice(1).replaceAll("\\", "/");
  getTemplateFilePath = () =>
    path.join(this.values.basePath, this.values.templateFileName).slice(1)
      .replaceAll("\\", "/");
}
