/** @jsx jsx */
import { jsx } from "theme-ui";

import { EmbedLayout } from "../../../components/embedLayout";
import { CanvasScriptAndForm } from "../../../components/CanvasScriptAndForm";

const Page = () => (
  <EmbedLayout>
    <CanvasScriptAndForm scriptSrc="/embeds/3d-web-gl-first-steps-variables/simpleSpinningCube.js" />
  </EmbedLayout>
);

export default Page;
