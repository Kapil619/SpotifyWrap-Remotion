import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import styled from "styled-components";

const Container = styled.div`
  padding: 80px 60px;
  display: flex;
  flex: 1;
`;

const Title = styled.div`
  color: #d21c8c;
  font-size: 80px;
  font-weight: bold;
  text-align: center;
  line-height: 1.2;
  font-family: --apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

export const Wrapped = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const progress = spring({
    frame,
    fps,
    config: {
      damping: 200,
    },
  });

  const titleProgress = spring({
    frame: frame - 15,
    fps,
    config: {
      damping: 200,
    },
  });

  const scale = interpolate(progress, [0, 1], [0.7, 1]);

  return (
    <Container>
      <div
        style={{
          position: "relative",
          flex: 1,
        }}
      >
        <AbsoluteFill
          style={{
            backgroundColor: "#b2fef5",
            boxShadow: "0 0 14px rgba(0, 0, 0, 0.3)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            transform: `scale(${scale})`,
            opacity: progress,
          }}
        >
          <Title
            style={{
              opacity: titleProgress,
            }}
          >
            2020 <br />
            Wrapped
          </Title>
        </AbsoluteFill>
      </div>
    </Container>
  );
};
