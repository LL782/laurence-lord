/** @jsx jsx */
import { jsx } from "theme-ui";

import { Emoji } from "./emoji";

export const Footer = () => (
  <footer>
    <hr />
    <p>Unless otherwise stated I am the author of all the text and code.</p>
    <p>
      Generally I'm happy to share but let's talk first if you want to license
      or commercialise any of it <Emoji label="thumbs-up">👍</Emoji>
    </p>
    <p>&copy; {new Date().getFullYear()} Laurence Lord</p>
  </footer>
);
