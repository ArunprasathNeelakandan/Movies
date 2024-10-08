import './index.css'
import Header from '../Header'
import HomeVideosSlider from '../HomeVideosSlider';
import Footer from '../Footer'


const Home = () => {

    return (
        <div className='home-bg'>
            <div className="home-section-1">
                <div className="header-bg">
                    <Header />
                </div>
                <div className="home-text-container">
                    <h1>Super man</h1>
                    <p>Superman is a fictional superheho first
                        appeared in American comics published by
                        DC Comics,
                    </p>
                    <div>
                    <button type='button' className='play-btn'>play</button>
                    </div>
                </div>
            </div>
            <div className="home-section-2">
                <div className='slider-container-1'>
                    <h4>Trending Videos</h4>
                    <HomeVideosSlider url='https://apis.ccbp.in/movies-app/trending-movies'/>
                </div>
                <div className='slider-container-2'>
                    <h4>Trending Videos</h4>
                    <HomeVideosSlider url='https://apis.ccbp.in/movies-app/originals'/>
                </div>
                <div className="footer-container">
                    <Footer/>
                </div>
            </div>
        </div>
    )
}

export default Home