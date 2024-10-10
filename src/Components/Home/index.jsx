import TopRatedMovies from "../TopRatedMovies"
import HomeVideosSlider from '../HomeVideosSlider'
import Footer from '../Footer'
import './index.css'
const Home = () => {

    return (
        <div className="home-bg">
            <TopRatedMovies />
            <div className="slider-section">
                <h4>Trending Videos</h4>
                <HomeVideosSlider url='https://apis.ccbp.in/movies-app/trending-movies'/>
            </div>
            <div className="slider-section">
                <h4>Popular Videos</h4>
                <HomeVideosSlider url='https://apis.ccbp.in/movies-app/originals'/>
            </div>
            <Footer />
        </div>
    )
}

export default Home
