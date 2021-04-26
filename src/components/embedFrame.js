/** @jsx jsx */
import { jsx } from "theme-ui";

const frameStyles = {
  border: "1px solid black",
  my: 1,
};

export const EmbedFrame = ({ src }) => {
  return <iframe sx={frameStyles} width="640" height="480" src={src} />;
};
