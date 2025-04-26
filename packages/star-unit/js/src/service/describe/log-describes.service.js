const { DescribesStore } = require("./describes.store");

class LogDescribesService {
  log() {
    const roots = Object.values(DescribesStore.describes).filter(
      (item) => !item.parent,
    );
    const nodeMap = Object.values(DescribesStore.describes).reduce(
      (map, node) => {
        map[node.id] = node;
        return map;
      },
      {},
    );
    roots.forEach((root, index) => {
      const last = index === roots.length - 1;
      this.#printNode(root, nodeMap, "", last);
    });
  }

  #printNode(node, nodeMap, prefix = "", isLast = true) {
    const connector = isLast ? "└── " : "├── ";
    console.log(prefix + connector + node.description);
    this.#printTestResults(prefix + (isLast ? "    " : "│   "), node.tests);
    const children = Object.values(nodeMap).filter(
      (child) => child.parent === node.id,
    );
    const newPrefix = prefix + (isLast ? "    " : "│   ");
    children.forEach((child, index) => {
      const last = index === children.length - 1;
      this.#printNode(child, nodeMap, newPrefix, last);
    });
  }

  #printTestResults(prefix, testResults) {
    testResults.forEach((result) => {
      console.log(prefix + "✔ " + result);
    });
  }
}

module.exports = { LogDescribesService };
