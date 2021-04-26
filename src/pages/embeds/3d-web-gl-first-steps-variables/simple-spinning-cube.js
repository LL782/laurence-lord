import * as React from "react";

import { EmbedLayout } from "../../../components/embedLayout";

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
        src="/embeds/3d-web-gl-first-steps-variables/simpleSpinningCube.js"
        defer
      ></script>
      <canvas
        style={{
          backgroundColor: "black",
        }}
        id="glcanvas"
        width="640"
        height="480"
      ></canvas>
    </EmbedLayout>
  );
};

export default Page;
