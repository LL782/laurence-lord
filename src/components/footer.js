/** @jsx jsx */
import { jsx } from "theme-ui";

export const Footer = () => (
  <footer>
    <hr />
    <p>
      &copy; {new Date().getFullYear()} All contents are belong to us unless
      otherwise stated
    </p>
    <p>
      Generally I'm happy to share but let's talk first if you want to license
      or commercialise anything you find here
    </p>
  </footer>
);
