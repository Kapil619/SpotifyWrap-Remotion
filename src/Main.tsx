import { Sequence } from "remotion";
import Scene2 from "./Scene2";
import { Scene3 } from "./Scene3";
import { Scene1 } from "./Scene1";

export const Main = ({
  topSongName,
  topSongArtistName,
}: {
  readonly topSongName: string;
  readonly topSongArtistName: string;
}) => {
  return (
    <>
      <Sequence durationInFrames={210}>
        <Scene1 />
      </Sequence>
      <Sequence from={210} durationInFrames={210}>
        <Scene2 />
      </Sequence>
      <Sequence from={420} durationInFrames={150}>
        <Scene3
          topSongArtistName={topSongArtistName}
          topSongName={topSongName}
        />
      </Sequence>
    </>
  );
};
