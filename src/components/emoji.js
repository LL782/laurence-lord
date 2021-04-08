/** @jsx jsx */
import { jsx } from "theme-ui";

export const Emoji = ({ children, label }) => (
  <span role="img" aria-label={label}>
    {children}
  </span>
);
