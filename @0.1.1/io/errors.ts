export class SourceFolderEmptyError extends Error {
  constructor(filePath: string, fileExtension: string) {
    super("Source folder is empty.");
    this.message =
      `${this.message}\nPath: ${filePath}\nExtension: ${fileExtension}\nStacktrace:`;
  }
}

export class SourceFolderMissingError extends Error {
  constructor(folderPath: string) {
    super("Source folder is missing.");
    this.message = `${this.message}\nMake sure ${folderPath} exists.`;
  }
}
