import SocialLink from "./modules/ILink";
import { TbBrandSpotify, TbBookmark, TbCode, TbPhoto } from "react-icons/tb";

const Carat1 = new SocialLink({
  id: "C1",
  target:
    "https://open.spotify.com/playlist/05xpbucfiY9LcHfJnLznFJ?si=f56430c3ae0a43fc&pt=8717081e92f15f89a3be22438925b302",
  Icon: TbBrandSpotify,
  title: "Sunshine Playlist",
});

const Carat2 = new SocialLink({
  id: "C2",
  target:
    "https://open.spotify.com/playlist/0MvsFzX2PPzU7bwVNo6z2o?si=be43b9bc4dfd43ca&pt=23da122654866cbb90e201d92c386fa7",
  Icon: TbBrandSpotify,
  title: "Chill Playlist",
});

const Carat3 = new SocialLink({
  id: "C3",
  target: "/carat",
  Icon: TbBookmark,
  title: "Going Seventeen",
});

const Carat4 = new SocialLink({
  id: "C4",
  target: "/carat",
  Icon: TbPhoto,
  title: "WonKyeom Gallery",
});

const Carat5 = new SocialLink({
  id: "C5",
  target: "http://svt-quiz.vercel.app",
  Icon: TbCode,
  title: "SVT Quiz",
});
export const caratLink: SocialLink[] = [Carat1, Carat2, Carat3, Carat4, Carat5];
