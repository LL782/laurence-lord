/** @jsx jsx */
import { jsx } from "theme-ui";

const formStyles = {
  backgroundColor: "white",
  bottom: 0,
  left: 0,
  padding: 2,
  position: "absolute",
  "@media screen and (min-width: 640px)": {
    bottom: "auto",
    left: 2,
    top: 2,
  },
};

const canvasStyles = {
  backgroundColor: "black",
  height: ["100vw", "calc(100vw - 84px)", "calc(100vw - 158px)"],
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
