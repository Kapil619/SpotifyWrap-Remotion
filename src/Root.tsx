import { Composition } from "remotion";
import { Gradient } from "./Gradient";
import { Scene3 } from "./Scene3";
import "./tailwind.css";

// Each <Composition> is an entry in the sidebar!

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        // You can take the "id" to render a video:
        // npx remotion render src/index.ts <id> out/video.mp4
        id="Gradient"
        component={Gradient}
        width={720}
        height={1280}
        durationInFrames={120}
        fps={30}
        // You can override these props for each render:
        // https://www.remotion.dev/docs/parametrized-rendering
      />
      <Composition
        id="Scene3"
        component={Scene3}
        width={720}
        height={1280}
        durationInFrames={120}
        fps={30}
      />
    </>
  );
};
