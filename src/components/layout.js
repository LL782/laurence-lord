/** @jsx jsx */
import { Link } from "gatsby";
import { jsx } from "theme-ui";
import { MDXProvider } from "@mdx-js/react";

import { Footer } from "./footer";
import { mdxShortcodes } from "./mdxShortcodes";

import "./layout-global.css";

const bodyStyles = {
  py: [3, 4, 5],
  px: [2, 4, 5],
};

const mainStyles = {
  maxWidth: "60rem",
};

export const Layout = ({ children, isHome, simpleFooter }) => (
  <MDXProvider components={mdxShortcodes}>
    <div sx={bodyStyles}>
      {!isHome && (
        <header>
          <nav>
            <Link to="/">Laurence "DC5B" Lord - Creative Developer</Link>
          </nav>
        </header>
      )}

      <main sx={mainStyles}>{children}</main>
      <Footer simple={simpleFooter} />
    </div>
  </MDXProvider>
);
