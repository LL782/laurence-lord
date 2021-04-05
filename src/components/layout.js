/** @jsx jsx */
import { Link } from "gatsby";
import { jsx } from "theme-ui";

const bodyStyles = {
  mx: "1rem",
  padding: "2rem",
};

export const Layout = ({ children }) => (
  <div sx={bodyStyles}>
    <header>
      <Link to="/">Home</Link>
    </header>
    <main>{children}</main>
    <footer>A fun footer</footer>
  </div>
);
