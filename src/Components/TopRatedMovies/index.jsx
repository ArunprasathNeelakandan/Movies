import Loader from '../Loader'
import FailureView from '../FailureView';
import Cookie from 'js-cookie'
import MovieCard from "../movieCard";
import './index.css'
import { useEffect, useState } from "react";
const TopRatedMovies = () => {
    const [apiStatus,setApiStatus] = useState('')
    const [movieData,setMovieData] = useState([])
    const [bgImage,setBgImage] = useState('')

    
    const getData = async() => {

        setApiStatus('loading')
        const token = Cookie.get('jwt_token')
        const url = 'https://apis.ccbp.in/movies-app/top-rated-movies'
        const options = {
            method: 'Get',
            headers:{
                Authorization:`Bearer ${token}`
            } 
        }

        const response = await fetch(url,options)
         if (response.ok === true) {
            const data = await response.json()
            const moviesArray = data.results
            const randomIndex = Math.floor(Math.random() * moviesArray.length);
            setApiStatus('success')
            setMovieData(moviesArray[randomIndex])
            setBgImage(moviesArray[randomIndex].backdrop_path)
         }else{
            setApiStatus('failure')
         }

    }


    useEffect( ()=>{
        getData()
    },[])

    const renderLoadingView = () => (
        <div className='top-movie-loader-container'>
            <Loader />
        </div>
    )

    const renderSuccessView = () => {
        return (
            <div className="movie-card-bg">
                <MovieCard bgImage = {bgImage} movieData={movieData}/>
            </div>
        )
    }

    const renderFailureView = () => {
        return (
            <FailureView/>
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

    return(
        <>
            {renderDetailes()}
        </>
        
    )
    
}

export default TopRatedMovies