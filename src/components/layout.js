/** @jsx jsx */
import { Link } from "gatsby";
import { jsx } from "theme-ui";
import { MDXProvider } from "@mdx-js/react";

import { Emoji } from "./emoji";
import { Footer } from "./footer";

const bodyStyles = {
  mx: "1rem",
  padding: "2rem",
};

const mainStyles = {
  maxWidth: "60rem",
};

export const Layout = ({ children, isHome }) => (
  <MDXProvider components={{ Emoji }}>
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
