import { Composition } from "remotion";
import { Gradient } from "./Gradient";
import { Main } from "./Main";
import { Scene1 } from "./Scene1";
import Scene2 from "./Scene2";
import { Scene3 } from "./Scene3";
import "./tailwind.css";
import { Wrapped } from "./Wrapped";

// Each <Composition> is an entry in the sidebar!

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="Gradient"
        component={Gradient}
        width={720}
        height={1280}
        durationInFrames={120}
        fps={30}
      />
      <Composition
        id="Scene1"
        component={Scene1}
        width={720}
        height={1280}
        durationInFrames={210}
        fps={30}
      />
      <Composition
        id="Wrapped"
        component={Wrapped}
        width={720}
        height={1280}
        durationInFrames={210}
        fps={30}
      />
      <Composition
        id="Scene2"
        component={Scene2}
        width={720}
        height={1280}
        durationInFrames={210}
        fps={30}
        defaultProps={{
          topSongName: "Crawling",
          topSongArtistName: "Linkin Park",
        }}
      />
      <Composition
        id="Scene3"
        component={Scene3}
        width={720}
        height={1280}
        durationInFrames={150}
        fps={30}
        defaultProps={{
          topSongName: "Crawling",
          topSongArtistName: "Linkin Park",
          topSongCover:
            "https://upload.wikimedia.org/wikipedia/en/2/2a/Linkin_Park_Hybrid_Theory_Album_Cover.jpg",
        }}
      />
      <Composition
        id="Main"
        component={Main}
        width={720}
        height={1280}
        durationInFrames={360 + 210}
        fps={30}
        defaultProps={{
          topSongName: "Crawling",
          topSongArtistName: "Linkin Park",
          topSongCover:
            "https://upload.wikimedia.org/wikipedia/en/2/2a/Linkin_Park_Hybrid_Theory_Album_Cover.jpg",
        }}
      />
    </>
  );
};
