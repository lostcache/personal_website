import getReadingTime from "reading-time";
import { toString } from "mdast-util-to-string";
import { visit } from "unist-util-visit";

export function remarkReadingTime() {
  return function (tree, { data }) {
    // Clone the tree to avoid mutating the original
    const clonedTree = JSON.parse(JSON.stringify(tree));

    // Remove code blocks and inline code from the cloned tree
    visit(clonedTree, (node, index, parent) => {
      if (node.type === 'code' || node.type === 'inlineCode') {
        // Remove the node by replacing it with nothing
        if (parent && typeof index === 'number') {
          parent.children.splice(index, 1);
          return [visit.SKIP, index];
        }
      }
    });

    const textOnPage = toString(clonedTree);
    const readingTime = getReadingTime(textOnPage);
    // readingTime.text will give us something like "3 min read"
    // readingTime.minutes gives us the number
    data.astro.frontmatter.readingTime = readingTime.text;
  };
}
