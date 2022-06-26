import Discover from "../components/Discover";
import Popular from "../components/Popular";
import DiscoverTV from "../components/DiscoverTV";
import NowPlaying from "../components/NowPlaying";
import TopRated from "../components/TopRated";
import UpcomingMovie from "../components/UpcomingMovie";
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
