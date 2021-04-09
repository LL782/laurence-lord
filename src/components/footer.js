/** @jsx jsx */
import { jsx } from "theme-ui";

import { Emoji } from "./emoji";

export const Footer = () => (
  <footer>
    <hr />
    <p>
      &copy; {new Date().getFullYear()} All your content are belong to us.
      Unless otherwise stated I am the author of all the text and code
    </p>
    <p>
      Generally I'm happy to share but let's talk first if you want to license
      or commercialise any of it <Emoji label="thumbs-up">👍</Emoji>
    </p>
    <p>Laurence Lord a.k.a. LL782</p>
  </footer>
);
