import { AbsoluteFill, Sequence, useVideoConfig } from "remotion";
import { FourFaces } from "./FourFaces";
import { Gradient } from "./Gradient";
import weeknd from "./weeknd.jpg";
import onedirection from "./onedirection.jpg";
import samsmith from "./samsmith.jpg";
import ed from "./ed.jpg";
import { GradientCircle } from "./GradientCircle";
import { Wrapped } from "./Wrapped";
export const Scene1 = () => {
  const { height } = useVideoConfig();
  return (
    <AbsoluteFill>
      <Gradient height={height} />
      <FourFaces image={weeknd} />
      <Sequence from={30}>
        <FourFaces image={onedirection} />
      </Sequence>
      <Sequence from={60}>
        <FourFaces image={samsmith} />
      </Sequence>
      <Sequence from={90}>
        <FourFaces image={ed} />
      </Sequence>
      <Sequence from={120}>
        <GradientCircle />
      </Sequence>
      <Sequence from={140}>
        <Wrapped />
      </Sequence>
    </AbsoluteFill>
  );
};
