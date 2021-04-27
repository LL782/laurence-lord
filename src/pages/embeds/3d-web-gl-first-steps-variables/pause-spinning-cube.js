/** @jsx jsx */
import { jsx } from "theme-ui";

import { EmbedLayout } from "../../../components/embedLayout";

const formStyles = {
  backgroundColor: "white",
  position: "absolute",
  top: 2,
  left: 2,
  padding: 2,
};

const canvasStyles = {
  backgroundColor: "black",
  height: ["100vw", "calc(100vw - 84px)", "calc(100vw - 158px)"],
  maxHeight: "480px",
  maxWidth: "640px",
  width: "100%",
};

const Page = () => {
  return (
    <EmbedLayout>
      <script
        src="https://cdnjs.cloudflare.com/ajax/libs/gl-matrix/2.8.1/gl-matrix-min.js"
        integrity="sha512-zhHQR0/H5SEBL3Wn6yYSaTTZej12z0hVZKOv3TwCUXT1z5qeqGcXJLLrbERYRScEDDpYIJhPC1fk31gqR783iQ=="
        crossOrigin="anonymous"
        defer
      ></script>
      <script
        src="/embeds/3d-web-gl-first-steps-variables/pauseSpinningCube.js"
        defer
      ></script>
      <canvas sx={canvasStyles} id="glcanvas" width="640" height="480"></canvas>
      <form sx={formStyles}>
        <fieldset>
          <legend>Rotation</legend>
          <div>
            <label htmlFor="autoRotation">Automatic</label>{" "}
            <input
              type="checkbox"
              id="autoRotation"
              name="autoRotation"
              defaultChecked
            />
          </div>
        </fieldset>
      </form>
    </EmbedLayout>
  );
};

export default Page;
