import { AbsoluteFill, useVideoConfig } from "remotion";
import { FourFaces } from "./FourFaces";
import { Gradient } from "./Gradient";

export const Scene1 = () => {
  const { height } = useVideoConfig();
  return (
    <AbsoluteFill>
      <Gradient height={height} />
      <FourFaces />
    </AbsoluteFill>
  );
};
