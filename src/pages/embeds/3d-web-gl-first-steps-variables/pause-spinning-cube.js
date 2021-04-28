/** @jsx jsx */
import { jsx } from "theme-ui";

import { EmbedLayout } from "../../../components/embedLayout";
import { CanvasScriptAndForm } from "../../../components/CanvasScriptAndForm";

const Page = () => (
  <EmbedLayout>
    <CanvasScriptAndForm scriptSrc="/embeds/3d-web-gl-first-steps-variables/pauseSpinningCube.js">
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
    </CanvasScriptAndForm>
  </EmbedLayout>
);

export default Page;
