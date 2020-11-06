import * as path from "https://deno.land/std@0.76.0/path/mod.ts";

export interface ILitheConfig {
  basePath: string;
  fileExtension: string;
  sourceFolderName: string;
  outputFolderName: string;
  outputFileName: string;
  templateFileName: string;
  getSourceFolderPath: () => string;
  getOutputFolderPath: () => string;
  getOutputFilePath: () => string;
  getTemplateFilePath: () => string;
}

export default class FallbackLitheConfig implements ILitheConfig {
  basePath = path.join(new URL(import.meta.url).pathname, "..");
  fileExtension = ".txt";
  sourceFolderName = "blog";
  outputFolderName = "build";
  outputFileName = "index.html";
  templateFileName = "template.html";
  getSourceFolderPath = () => path.join(this.basePath, this.sourceFolderName).slice(1).replaceAll("\\", "/");
  getOutputFolderPath = () => path.join(this.basePath, this.outputFolderName).slice(1).replaceAll("\\", "/");
  getOutputFilePath = () => path.join(this.basePath, this.outputFolderName, this.outputFileName).slice(1).replaceAll("\\", "/");
  getTemplateFilePath = () => path.join(this.basePath, this.templateFileName).slice(1).replaceAll("\\", "/");
}
