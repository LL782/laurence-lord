/** @jsx jsx */
import { jsx } from "theme-ui";

import { EmbedLayout } from "../../../components/embedLayout";
import { CanvasScriptAndForm } from "../../../components/CanvasScriptAndForm";

const Page = () => (
  <EmbedLayout>
    <CanvasScriptAndForm scriptSrc="/embeds/3d-web-gl-first-steps-variables/zoomSpinningCube.js">
      <fieldset>
        <legend>Zoom</legend>
        <div>
          <label htmlFor="cubePosition">Cube position (z-axis)</label>{" "}
          <input
            type="number"
            id="cubePosition"
            name="cubePosition"
            step={0.1}
            defaultValue={-6}
          />
        </div>
        <div>
          <label htmlFor="fieldOfView">Field o'view (degrees)</label>{" "}
          <input
            type="number"
            id="fieldOfView"
            name="fieldOfView"
            step={1}
            defaultValue={45}
          />
        </div>
      </fieldset>
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
          <hr />
          <div>
            <label htmlFor="cubeRotationX">X</label>{" "}
            <input
              type="number"
              id="cubeRotationX"
              name="cubeRotationX"
              step={0.1}
              defaultValue={0.0}
            />
          </div>
          <div>
            <label htmlFor="cubeRotationX">Y</label>{" "}
            <input
              type="number"
              id="cubeRotationY"
              name="cubeRotationY"
              step={0.1}
              defaultValue={0.0}
            />
          </div>
        </div>
      </fieldset>
    </CanvasScriptAndForm>
  </EmbedLayout>
);

export default Page;
