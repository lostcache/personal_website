import getReadingTime from "reading-time";
import { toString } from "mdast-util-to-string";

export function remarkReadingTime() {
  return function (tree, { data }) {
    const textOnPage = toString(tree);
    const readingTime = getReadingTime(textOnPage);
    // readingTime.text will give us something like "3 min read"
    // readingTime.minutes gives us the number
    data.astro.frontmatter.readingTime = readingTime.text;
  };
}
