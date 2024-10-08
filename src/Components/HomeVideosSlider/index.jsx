import React, { useEffect, useState } from 'react'
import MovieSliders from '../MovieSliders'
import Loader from '../Loader'
import Cookie from 'js-cookie'

function HomeVideosSlider(props) {
    const [apiStatus,setApiStatus] = useState('initual')
    const [videosData,setVideosData] = useState([])

    const getData = async() => {
        setApiStatus('loading')

        const jwt_token = Cookie.get('jwt_token')
        const url = props.url
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
            const formatData =  data.results.map((each) => ({
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
        return(
            <Loader/>
        )
    }


    const renderSuccessView = () => (
        <MovieSliders data={videosData}/>   
    )

    useEffect(()=>{
         getData()
    },[])


    const renderDetails = () => {
        switch(apiStatus){
            case 'loading': return renderLoadingView()
            case 'success': return renderSuccessView()
            default: null
        }
    }
    
  return (
    <>
        {renderDetails()}
    </>
  )
}

export default HomeVideosSlider
