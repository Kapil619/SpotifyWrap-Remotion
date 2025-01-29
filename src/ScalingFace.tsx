import { AbsoluteFill, Img, interpolate, useCurrentFrame } from "remotion";
export const ScalingFace = ({ image }: { readonly image: string }) => {
  const frame = useCurrentFrame();
  const progress = interpolate(frame, [0, 120], [0, 1], {
    extrapolateRight: "clamp",
  });
  const scale = interpolate(progress, [0, 1], [1.2, 1.3]);
  const translateX = interpolate(progress, [0, 1], [0, 30]);

  return (
    <AbsoluteFill
      style={{
        overflow: "hidden",
      }}
    >
      <Img
        src={image}
        style={{
          position: "absolute",
          height: "100%",
          transform: `scale(${scale}) translateX(${translateX}px)`,
        }}
      />
    </AbsoluteFill>
  );
};
