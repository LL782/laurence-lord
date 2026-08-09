import { visit } from "unist-util-visit";

export function rehypeHighlightLine() {
  return (tree) => {
    visit(tree, "element", (node) => {
      if (node.tagName !== "code") return;

      const lines = node.children.filter((child) => child.type === "text");
      if (lines.length === 0) return;

      const text = lines.map((child) => child.value).join("");
      if (!text.includes("// highlight-line")) return;

      const splitLines = text.split("\n");
      node.children = splitLines.map((line) => {
        const isHighlighted = line.includes("// highlight-line");
        const cleanedLine = line.replace(/\s*\/\/ highlight-line\s*$/, "");

        if (!isHighlighted) {
          return { type: "text", value: `${cleanedLine}\n` };
        }

        return {
          type: "element",
          tagName: "span",
          properties: { className: ["highlight-line"] },
          children: [{ type: "text", value: `${cleanedLine}\n` }],
        };
      });
    });
  };
}
