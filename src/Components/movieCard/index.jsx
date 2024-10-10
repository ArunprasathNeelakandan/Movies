import Header from '../Header'
import './index.css'

const MovieCard = (props) => {
    const {bgImage,movieData} = props
    console.log(movieData)
    return (
        <div className='Movie-card-bg' style={{backgroundImage:`url(${bgImage})`}}>
           <Header/>
           <div className="text-container">
            <h1>{movieData.title}</h1>
            <p>{movieData.overview}</p>
            <div>
            <button className='play-btn'>play</button>
            </div>
           </div>
        </div>
    )
}

export default MovieCard