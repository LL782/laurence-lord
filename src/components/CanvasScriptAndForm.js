/** @jsx jsx */
import { jsx } from "theme-ui";
import { mediaSmall, mediaMediumAndLarge } from "./screenSizes";

const formStyles = {
  padding: 2,
  backgroundColor: "#fff",
  overflow: "scroll",

  [mediaSmall]: {
    backgroundImage: "linear-gradient(#f5f2f0, #fff)",
    bottom: "0",
    display: "block",
    margin: "0",
    position: "absolute",
    top: "50vh",
    width: "100%",
  },
  [mediaMediumAndLarge]: {
    position: "absolute",
    left: 2,
    top: 2,
  },
};

const canvasStyles = {
  backgroundColor: "black",
  height: ['50vh', '100vh'],
  maxHeight: "480px",
  maxWidth: "640px",
  width: "100%",
};

export const CanvasScriptAndForm = ({ children, scriptSrc }) => (
  <div>
    <script
      src="https://cdnjs.cloudflare.com/ajax/libs/gl-matrix/2.8.1/gl-matrix-min.js"
      integrity="sha512-zhHQR0/H5SEBL3Wn6yYSaTTZej12z0hVZKOv3TwCUXT1z5qeqGcXJLLrbERYRScEDDpYIJhPC1fk31gqR783iQ=="
      crossOrigin="anonymous"
      defer
    ></script>
    <script src={scriptSrc} defer></script>
    <canvas sx={canvasStyles} id="glcanvas" width="640" height="480"></canvas>
    {children && <form sx={formStyles}>{children}</form>}
  </div>
);


