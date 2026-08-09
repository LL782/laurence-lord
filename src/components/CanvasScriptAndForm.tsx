import type { ReactNode } from "react";

interface CanvasScriptAndFormProps {
  scriptSrc: string;
  children?: ReactNode;
  fullHeight?: boolean;
}

export function CanvasScriptAndForm({
  scriptSrc,
  children,
  fullHeight = false,
}: CanvasScriptAndFormProps) {
  const noForm = typeof children === "undefined";

  return (
    <div className="embed-canvas-wrap">
      <script
        src="https://cdnjs.cloudflare.com/ajax/libs/gl-matrix/2.8.1/gl-matrix-min.js"
        integrity="sha512-zhHQR0/H5SEBL3Wn6yYSaTTZej12z0hVZKOv3TwCUXT1z5qeqGcXJLLrbERYRScEDDpYIJhPC1fk31gqR783iQ=="
        crossOrigin="anonymous"
        defer
      />
      <script src={scriptSrc} defer />
      <canvas
        className={`embed-canvas${noForm || fullHeight ? " embed-canvas--full" : ""}`}
        id="glcanvas"
        width="640"
        height="480"
      />
      {children && <form className="embed-form">{children}</form>}
    </div>
  );
}
