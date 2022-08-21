import Discover from "../imports/Discover";
import Popular from "../imports/Popular";
import DiscoverTV from "../imports/DiscoverTV";
import NowPlaying from "../imports/NowPlaying";
import TopRated from "../imports/TopRated";
import UpcomingMovie from "../imports/UpcomingMovie";
function Home() {
  return (
    <div>
      <Discover />
      <Popular />
      <NowPlaying />
      <TopRated />
      <DiscoverTV />
      <UpcomingMovie />
    </div>
  );
}

export default Home;
