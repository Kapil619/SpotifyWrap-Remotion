import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { ScalingFace } from "./ScalingFace";

export const FourFaces: React.FC = () => {
  const { width, height, fps } = useVideoConfig();
  const frame = useCurrentFrame();
  const progress = spring({
    frame,
    fps,
    config: {
      mass: 5,
      damping: 1000,
    },
  });
  const offsetX = interpolate(progress, [0, 1], [width / 4, 0]);
  const offsetY = interpolate(progress, [0, 1], [height / 4, 0]);
  const opacity = interpolate(progress, [0, 1], [0, 0.5]);
  const clipPath = `inset(${offsetY}px ${offsetX}px ${offsetY}px ${offsetX}px)`;
  return (
    <AbsoluteFill
      style={{
        clipPath,
        opacity,
      }}
    >
      <AbsoluteFill
        style={{
          width: width / 2,
          height: height / 2,
          transform: "scaleX(-1)",
        }}
      >
        <ScalingFace />
      </AbsoluteFill>
      <AbsoluteFill
        style={{
          width: width / 2,
          height: height / 2,
          left: width / 2,
        }}
      >
        <ScalingFace />
      </AbsoluteFill>
      <AbsoluteFill
        style={{
          width: width / 2,
          height: height / 2,
          top: height / 2,
          transform: "scale(-1)",
        }}
      >
        <ScalingFace />
      </AbsoluteFill>
      <AbsoluteFill
        style={{
          width: width / 2,
          height: height / 2,
          left: width / 2,
          top: height / 2,
          transform: "scaleY(-1)",
        }}
      >
        <ScalingFace />
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
