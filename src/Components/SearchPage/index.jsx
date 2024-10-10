
import { useEffect, useState } from "react"
import Loader from '../Loader'
import Header from "../Header"
import Cookie from 'js-cookie'
import { Link } from "react-router-dom"
import './index.css'

const SearchPage = () => {

    const [searchText, setSearchText] = useState('')
    const [apiStatus, setApiStatus] = useState('')
    const [data, setData] = useState([])



    const getSearchText = (text) => {
        setSearchText(text)

    }

    const getSearchMovieList = async () => {
        if (searchText === '') {
            return null
        }


        setApiStatus('loading')
        const token = Cookie.get('jwt_token')
        const url = `https://apis.ccbp.in/movies-app/movies-search?search=${searchText}`
        const options = {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token}`
            }
        }

        const response = await fetch(url, options)
        console.log(response)

        if (response.ok === true) {
            const videosData = await response.json()
            const formatData = videosData.results.map((each) => {
                const { id, poster_path, title } = each
                return (
                    {
                        id: id,
                        posterPath: poster_path,
                        title: title
                    }
                )
            })
            setApiStatus('success')
            setData(formatData)

        }


    }

    useEffect(() => {
        getSearchMovieList()
    }, [searchText])


    const renderLoadingView = () => (
        <div className="search-loader-container">
            <Loader />
        </div>

    )

    const renderSuccessView = () => {
        if (data.length !== 0) {
            return (
                <div className="search-success-container">

                    {
                        data.map(each => (
                            <Link to={`/movies/${each.id}`} key={each.id}>
                                <img src={each.posterPath} className="search-image"/>
                            </Link>
                        ))
                    }
                </div>
            )
        }else {
            return(
                <div className="search-success-container no-moive">
                    <img src="Group.svg"className="no-movies-img"/>
                    <p>Your search for {searchText} didn't find match any matches.</p>
                </div>
            )
        }
    }

    const renderDeatails = () => {
        switch (apiStatus) {
            case 'loading': return renderLoadingView()
            case 'success': return renderSuccessView()
            default: return null
        }
    }

    return (
        <div className="search-bg">
            <Header getSearchText={getSearchText} />
            <div className="search-videos-cart">
                {renderDeatails()}
            </div>
        </div>
    )
}

export default SearchPage