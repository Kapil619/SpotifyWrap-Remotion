import { AbsoluteFill, useCurrentFrame } from "remotion";

export const Gradient = ({ height }: { readonly height: number }) => {
  const frame = useCurrentFrame();
  const duration = 4 * 30;
  const offset = height * 2.5 * ((frame % duration) / duration);
  return (
    <AbsoluteFill>
      <AbsoluteFill
        style={{
          transform: `translateY(-${offset}px)`,
          height: height * 1.5,
          background:
            "linear-gradient(to bottom, #92a77d, #ccd56a, #e6b417, #e37e10, #dc2407, #470905, #090415, #2f0199, #736bdb, #adc1d3, #aecdbf, #92a77d)",
        }}
      />
      <AbsoluteFill
        style={{
          transform: `translateY(-${offset}px)`,
          top: height * 1.5 - 1,
          height: height * 1.5,
          background:
            "linear-gradient(to bottom, #92a77d, #ccd56a, #e6b417, #e37e10, #dc2407, #470905, #090415, #2f0199, #736bdb, #adc1d3, #aecdbf, #92a77d)",
        }}
      />
    </AbsoluteFill>
  );
};
