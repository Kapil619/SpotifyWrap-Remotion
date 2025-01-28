import { interpolate } from "remotion";
import {
  AbsoluteFill,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import styled from "styled-components";
import { Bar } from "./src/Bar";

const TOP_TITLE = 150;
const FONT_SIZE = 50;
const TITLE_OFFSET = 150;
const Title = styled.div`
  font-family:
    ---apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    Roboto,
    Oxygen,
    Ubuntu,
    Cantarell,
    "Open Sans",
    "Helvetica Neue",
    sans-serif;
  color: white;
  font-size: ${FONT_SIZE}px;
  font-weight: 600;
  text-align: center;
  position: absolute;
  top: ${TITLE_OFFSET}px;
  width: 100%;
  line-height: 1;
  text-shadow: 0 0 6px rgba(0, 0, 0, 0.4);
  padding-left: 50px;
  padding-right: 50px;
`;

const Scene2 = () => {
  const { width, height, fps } = useVideoConfig();
  const frame = useCurrentFrame();
  const moveUp = spring({
    frame,
    fps,
    config: {
      damping: 200,
    },
  });

  const translateY = interpolate(
    moveUp,
    [0, 1],
    [height / 2 - TITLE_OFFSET - FONT_SIZE, 0],
  );
  return (
    <AbsoluteFill style={{ backgroundColor: "#d4148e" }}>
      <AbsoluteFill
        style={{
          transform: `translateY(${translateY}px)`,
        }}
      >
        <Title>Your Top genres were</Title>
        <div style={{ height: 290 }} />
        <Bar color="#b2fef5" endWidth={width / 2} rank={1} genre="Rap" />
        <Bar color="#d5f772" endWidth={width / 2 - 60} rank={2} genre="Pop" />
        <Bar color="#4e00f9" endWidth={width / 2 - 120} rank={3} genre="DJ" />
        <Bar color="#1e1416" endWidth={width / 2 - 180} rank={4} genre="EDM" />
        <Bar
          color="#fefefe"
          endWidth={width / 2 - 240}
          rank={5}
          genre="Classic"
        />
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

export default Scene2;
