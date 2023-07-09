import "./style.scss"
import HeroBanner from './heroBanner/HeroBanner'
import Trending from "./trending/Trending";
import "./style.scss"
import Popular from "./popular/Popular";
import TopRated from "./toprated/TopRated";
const Home = () => {
  return (
    <div className='homepage'>
        <HeroBanner/>
        <Trending/>
        <Popular/>
        <TopRated/>
    </div>
  )
}

export default Home;