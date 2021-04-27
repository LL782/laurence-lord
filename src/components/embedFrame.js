/** @jsx jsx */
import { jsx } from "theme-ui";

const frameStyles = {
  borderWidth: 0,
  height: ["100vw", "calc(100vw - 84px)", "calc(100vw - 158px)"],
  maxHeight: "480px",
  maxWidth: "640px",
  mx: [-2, "0"],
  my: 1,
  width: ["100vw", "100%"],
};

export const EmbedFrame = ({ src }) => {
  return <iframe sx={frameStyles} width="1" height="1" src={src} />;
};
