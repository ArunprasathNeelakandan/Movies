import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import { useEffect, useState } from 'react'
import Loader from '../Loader'
import Cookie from 'js-cookie'
import { Link } from 'react-router-dom'

import './index.css'


const PopularMovies = () => {

    const [apiStatus, setApiStatus] = useState('initual')
    const [videosData, setVideosData] = useState([])

    useEffect(() => {
        getData()
    }, [])



    const getData = async () => {
        setApiStatus('loading')

        const jwt_token = Cookie.get('jwt_token')
        const url = 'https://apis.ccbp.in/movies-app/popular-movies'
        const options = {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${jwt_token}`
            }
        }

        const response = await fetch(url, options)
        console.log(response)
        if (response.ok === true) {
            const data = await response.json()
            const formatData = data.results.map((each) => ({
                id: each.id,
                backdropPath: each.backdrop_path,
                overview: each.overview,
                posterPath: each.poster_path,
                title: each.title
            }))

            setVideosData(formatData)
            setApiStatus('success')
        } else {
            apiStatus('failure')
        }


    }

    const renderLoadingView = () => {
        return (
            <Loader />
        )
    }

    const renderSuccessView = () => {
        console.log(videosData)
        return(
            <>
                {videosData.map((each) => {
                    const { id, posterPath } = each;
                    return (
                            <Link to='/movie-detailes'><img src={posterPath} alt="popular video" className="popular-video-image" /></Link>
                    );
                })}
            </>
        )
    }

    const renderDetails = () => {
        switch (apiStatus) {
            case 'loading': return renderLoadingView()
            case 'success': return renderSuccessView()
            default: null
        }
    }

    return (
        <div className="popular-bg">
            <Header />
            <div className="popular-movie-container">
                {renderDetails()}
            </div>
            <Footer/>
        </div>
    )

}
export default PopularMovies
