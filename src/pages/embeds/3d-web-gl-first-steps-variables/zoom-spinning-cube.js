/** @jsx jsx */
import { jsx } from "theme-ui";

import { EmbedLayout } from "../../../components/embedLayout";
import { CanvasScriptAndForm } from "../../../components/CanvasScriptAndForm";

const Page = () => (
  <EmbedLayout>
    <CanvasScriptAndForm scriptSrc="/embeds/3d-web-gl-first-steps-variables/controlSpinningCube.js">
      <fieldset>
        <legend>Zoom (work in progress)</legend>
        <div>
          <label htmlFor="cameraPosition">Camera position</label>{" "}
          <input
            type="number"
            id="cameraPosition"
            name="cameraPosition"
            step={0.1}
            disabled
          />
        </div>
        <div>
          <label htmlFor="cubePosition">Cube position</label>{" "}
          <input
            type="number"
            id="cubePosition"
            name="cubePosition"
            step={0.1}
            disabled
          />
        </div>
        <div>
          <label htmlFor="cameraMagnification">Camera magnification</label>{" "}
          <input
            type="number"
            id="cameraMagnification"
            name="cameraMagnification"
            step={0.1}
            disabled
          />
        </div>
        <div>
          <label htmlFor="cubeSize">Cube size</label>{" "}
          <input
            type="number"
            id="cubeSize"
            name="cubeSize"
            step={0.1}
            disabled
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
            />
          </div>
          <div>
            <label htmlFor="cubeRotationX">Y</label>{" "}
            <input
              type="number"
              id="cubeRotationY"
              name="cubeRotationY"
              step={0.1}
            />
          </div>
        </div>
      </fieldset>
    </CanvasScriptAndForm>
  </EmbedLayout>
);

export default Page;
