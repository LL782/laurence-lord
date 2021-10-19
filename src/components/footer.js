/** @jsx jsx */
import { jsx } from "theme-ui";

export const Footer = () => (
  <footer>
    <hr />
    <p>
      Unless otherwise stated I am the creator of all the text, images and code.
    </p>
    <p>
      Generally I'm happy to share but let's talk first if you want to license
      or commercialise any&nbsp;of&nbsp;it
    </p>
    <p>&copy; {new Date().getFullYear()} Laurence Lord</p>
  </footer>
);
