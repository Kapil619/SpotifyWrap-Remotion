import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import styled from "styled-components";
import { Gradient } from "./Gradient";

const CIRCLE_SIZE = 500;
const Circle = styled.div`
  width: ${CIRCLE_SIZE}px;
  height: ${CIRCLE_SIZE}px;
  border-radius: ${CIRCLE_SIZE / 2}px;
  position: absolute;
  overflow: hidden;
`;

export const Scene3 = () => {
  const frame = useCurrentFrame();
  const { width, height, fps } = useVideoConfig();
  const progress = spring({
    frame,
    fps,
    config: {
      damping: 200,
    },
  });

  const scale = interpolate(progress, [0, 1], [4, 1]);
  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#4e00f9",
      }}
    >
      <Circle
        style={{
          opacity: progress,
          left: width / 2 - CIRCLE_SIZE / 2,
          top: height / 2 - CIRCLE_SIZE / 2 + 100,
          transform: `scale(${scale})`,
        }}
      >
        <Gradient height={CIRCLE_SIZE} />
      </Circle>
    </AbsoluteFill>
  );
};
