import React from "react";
import { Link } from "gatsby";

export const Layout = ({ children }) => (
  <div>
    <header>
      <Link to="/">Home</Link>
    </header>
    <main>{children}</main>
    <footer>A fun footer</footer>
  </div>
);
