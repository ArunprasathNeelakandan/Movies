import { useEffect, useState } from 'react'
import MovieCard from '../movieCard'
import FailureView from '../FailureView'
import Loader from '../Loader'
import Cookie from 'js-cookie'
import {Link} from 'react-router-dom'
import './index.css'

const DetaileMovieItem = (props) => {
    const [apiStatus,setApiStatus] = useState('')
    const [movieData,setMovieData] = useState([])
    const [bgImage,setBgImage] = useState('')
    const id = props.match.params.id 

    const getData = async() => {
        setApiStatus('loading')

        const token = Cookie.get('jwt_token')
        const url = `https://apis.ccbp.in/movies-app/movies/${id}`
        const options = {
            method: 'GET',
            headers : {
                Authorization : `Bearer ${token}`
            }
        }

        const response = await fetch(url,options)
        if (response.ok === true) {
            const data = await response.json()
            
            setApiStatus('success')
            setBgImage(data.movie_details.backdrop_path)
            setMovieData(data.movie_details)
        } else {
            setApiStatus('failure')
        }
    }
    
    useEffect(()=>{
        getData()
    },[id])

    const renderFailureView = () => {
        return (
            <FailureView/>
        )
    }

    const renderLoadingView = () => (
        <div className='top-movie-loader-container'>
            <Loader />
        </div>
    )

    const renderSimilarVideos = () => {
        return(
            <div className="similar-videos-bg">
                {movieData.similar_movies.map((each)=>{

                    return(
                        <Link to={`/movies/${each.id}`} key={each.id}>
                        <img src={each.poster_path} className="similar-image"/>
                    </Link>
                    )
                })}
            </div>
        )
    }
    const renderDetailes = () => {
        switch (apiStatus) {
            case 'loading' : return renderLoadingView()
            case 'success' : return renderSuccessView()
            case 'failure' : return renderFailureView()
            default: return null
        }
    }

    const renderSuccessView = () => {
        return(
            <div>
                <MovieCard bgImage = {bgImage} movieData={movieData}/>
                {renderSimilarVideos()}
            </div>
        )
    }
    return (
        <div className='detail-bg'>
            {renderDetailes()}
        </div>
    )
}

export default DetaileMovieItem