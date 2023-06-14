const fs = require("fs");
const path = require("path");

const repositoryPath = "src"; // Replace with the path to your repository
const indexPath = "./readme.md"; // Replace with the desired path for your index file

function getAllMarkdownFiles(directory, fileList = []) {
  const files = fs.readdirSync(directory);

  files.forEach(file => {
    const filePath = path.join(directory, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      fileList = getAllMarkdownFiles(filePath, fileList);
    } else if (path.extname(file) === ".md") {
      fileList.push(filePath);
    }
  });

  return fileList;
}

function createFileTree(fileList) {
  const fileTree = {};

  fileList.forEach(filePath => {
    const fileDirectories = path.dirname(filePath).split(path.sep);
    let currentDir = fileTree;

    fileDirectories.forEach(directory => {
      if (!currentDir[directory]) {
        currentDir[directory] = {};
      }
      currentDir = currentDir[directory];
    });

    const fileName = path.basename(filePath, ".md");
    currentDir[fileName] = filePath;
  });

  return fileTree;
}

function formatFileTree(fileTree, indent = 0) {
  let indexContent = "";

  Object.keys(fileTree).forEach(name => {
    if (name === "readme") return;
    const filePath = fileTree[name];

    if (typeof filePath === "string") {
      indexContent += `${"  ".repeat(indent)}- [${name}](${path.join(
        repositoryPath,
        filePath.replace(/^src\//, "./")
      )})\n`;
    } else {
      indexContent += `${"  ".repeat(indent)}- ${name}\n`;
      indexContent += formatFileTree(fileTree[name], indent + 1);
    }
  });

  return indexContent;
}

const markdownFiles = getAllMarkdownFiles(repositoryPath);
const fileTree = createFileTree(markdownFiles);
const indexContent = formatFileTree(fileTree);

fs.writeFileSync(indexPath, indexContent);
console.log("Index file created successfully.");
