class FileItem {
  constructor(name) {
    if (new.target === FileItem) {
      throw new TypeError("Cannot construct FileItem instances directly");
    }
    this.name = name;
  }

  getSize() {
    throw new Error("Method 'getSize()' must be implemented.");
  }

  display(indent = 0) {
    throw new Error("Method 'display()' must be implemented.");
  }
}

class File extends FileItem {
  constructor(name, content = "") {
    super(name);
    this.content = content;
  }

  getSize() {
    return this.content.length;
  }

  display(indent = 0) {
    console.log(" ".repeat(indent) + this.name);
  }
}

class Directory extends FileItem {
  constructor(name) {
    super(name);
    this.items = [];
  }

  addItem(item) {
    this.items.push(item);
  }

  getSize() {
    return this.items.reduce((total, item) => total + item.getSize(), 0);
  }

  display(indent = 0) {
    console.log(" ".repeat(indent) + this.name + "/");
    this.items.forEach((item) => item.display(indent + 4));
  }
}

class FileSystem {
  constructor() {
    this.root = new Directory("root");
  }

  getRoot() {
    return this.root;
  }

  display() {
    this.root.display();
  }

  addFile(path, file) {
    const directory = this._traverseToDirectory(path);
    if (directory) {
      directory.addItem(file);
    } else {
      console.log(`Directory at path '${path}' not found.`);
    }
  }

  addDirectory(path, directory) {
    const parentDirectory = this._traverseToDirectory(path);
    if (parentDirectory) {
      parentDirectory.addItem(directory);
    } else {
      console.log(`Directory at path '${path}' not found.`);
    }
  }

  _traverseToDirectory(path) {
    const components = path.split("/").filter(Boolean);
    let currentDirectory = this.root;

    for (const component of components) {
      const found = currentDirectory.items.find(
        (item) => item instanceof Directory && item.name === component
      );
      if (found) {
        currentDirectory = found;
      } else {
        return null;
      }
    }

    return currentDirectory;
  }
}

// Initialize the file system
const fs = new FileSystem();

// Create some files and directories
const file1 = new File("file1.txt", "Hello, World!");
const file2 = new File("file2.txt", "This is a test file.");
const subDir = new Directory("subdir");
const subFile = new File("subfile.txt", "Content in subfile.");

// Add items to the file system
fs.addFile("/", file1);
fs.addDirectory("/", subDir);
fs.addFile("/subdir", subFile);
fs.addFile("/", file2);

// Display the file system structure
fs.display();

// Output the size of the root directory
console.log("Total size:", fs.getRoot().getSize());
