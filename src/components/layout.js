import React from "react";
import { Link } from "gatsby";

const Layout = ({ children }) => (
  <div>
    <header>
      <Link href="/">Home</Link>
    </header>
    <main>{children}</main>
    <footer>A fun footer</footer>
  </div>
);

export default Layout;
