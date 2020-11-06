# denote kit

## Basic usage
```ts
import { denote } from "https://raw.githubusercontent.com/binerdy/denote-kit/master/@0.1.2/denote_kit.ts";

denote({
  basePath: 'Your path here...',
  fileExtension: ".txt",
  sourceFolderName: "blog",
  outputFolderName: "build",
  outputFileName: "index.html",
  templateFileName: "template.html",
});
```

Run command
```pwsh
deno run --unstable --allow-read --allow-write .\your_file.ts
```
