/** @jsx jsx */
import { Link } from "gatsby";
import { jsx } from "theme-ui";
import { MDXProvider } from "@mdx-js/react";

import { Footer } from "./footer";
import { mdxShortcodes } from "./mdxShortcodes";

const bodyStyles = {
  mx: "1rem",
  padding: "2rem",
};

const mainStyles = {
  maxWidth: "60rem",
};

export const Layout = ({ children, isHome }) => (
  <MDXProvider components={mdxShortcodes}>
    <div sx={bodyStyles}>
      {!isHome && (
        <header>
          <nav>
            <Link to="/">Laurence Lord - Creative Developer</Link>
          </nav>
        </header>
      )}

      <main sx={mainStyles}>{children}</main>
      <Footer />
    </div>
  </MDXProvider>
);
