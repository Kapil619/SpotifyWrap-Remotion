import {
  AbsoluteFill,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { Gradient } from "./Gradient";
export const GradientCircle = () => {
  const { height, width, fps } = useVideoConfig();
  const frame = useCurrentFrame();
  const progress = spring({
    frame,
    fps,
    config: {
      damping: 200,
      mass: 4,
    },
  });
  const size = height * 1.5;
  return (
    <AbsoluteFill>
      <div
        style={{
          height: size,
          position: "absolute",
          width: size,
          borderRadius: size / 2,
          left: -(size - width) / 2,
          top: -(size - height) / 2,
          transform: `scale(${progress})`,
          overflow: "hidden",
          opacity: progress,
        }}
      >
        <Gradient />
      </div>
    </AbsoluteFill>
  );
};
