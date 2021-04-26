import React from "react";
import { Helmet } from "react-helmet";

import "./embed-layout.css";

export const EmbedLayout = ({ children }) => (
  <>
    <Helmet bodyAttributes={{ class: "embed" }} />
    <main>{children}</main>
  </>
);
