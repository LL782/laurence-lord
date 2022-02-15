/** @jsx jsx */
import React from "react";
import { jsx } from "theme-ui";

const FooterComplications = () => (
  <>
    <p>
      Unless otherwise stated I am the creator of all the text, images and code.
    </p>
    <p>
      Generally I'm happy to share but let's talk first if you want to license
      or commercialise any&nbsp;of&nbsp;it
    </p>
    <p>&copy; {new Date().getFullYear()} Laurence Lord</p>
  </>
);

const NoComplications = () => null;

export const Footer = ({ simple }) => {
  const Complications = simple ? NoComplications : FooterComplications;
  return (
    <footer>
      <hr />
      <Complications />
    </footer>
  );
};
