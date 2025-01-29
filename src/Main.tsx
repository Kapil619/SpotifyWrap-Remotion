import { Sequence } from "remotion";
import { Scene1 } from "./Scene1";
import Scene2 from "./Scene2";
import { Scene3 } from "./Scene3";

export const Main = ({
  topSongName,
  topSongArtistName,
  topSongCover,
}: {
  readonly topSongName: string;
  readonly topSongArtistName: string;
  readonly topSongCover: string;
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
          topSongCover={topSongCover}
          topSongArtistName={topSongArtistName}
          topSongName={topSongName}
        />
      </Sequence>
    </>
  );
};
