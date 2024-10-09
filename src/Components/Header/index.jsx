import { CiSearch } from "react-icons/ci";
import { LuMenu } from "react-icons/lu"
import { Link } from 'react-router-dom'
import { withRouter } from "react-router-dom";
import './index.css'
import { FaSearch } from 'react-icons/fa'
import { useState } from "react";

const Header = (props) => {
    const {getSearchText} = props
    const [searchText, setSearchText] = useState('')

    const changeText = (event) => {
        setSearchText(event.target.value)
    }

    const getSearchData = () => {
        getSearchText(searchText)
    }

    const isSearchcontainer = props.match.path === '/search'

    const renderSearchitem = () => {
        if (isSearchcontainer) {
            return (
                <div className="search-container">
                    <input type="search" className="search-input" placeholder="Search..." value={searchText} onChange={changeText} />
                    <button onClick={getSearchData} className="search-button">
                        <FaSearch className="search-icon" />
                    </button>
                </div>
            )
        } else {
            return (
                <Link to='/search'><CiSearch style={{ color: 'white', height: '40px', width: '40px' }} /></Link>
            )
        }
    }

    return (
        <>
            <div className='desktop-header-bg'>
                <div className="header-logo-section">
                    < img src='Group 7399.svg' className="movie-logo-img" alt='movie-logo' />
                    <p><Link to='/'><span className="home-text">Home</span></Link></p>
                    <p><Link to='/popular-movies'><span className="home-text">Popular</span></Link></p>
                </div>
                <div className="header-search-section">
                    {renderSearchitem()}
                    <img src='Avatar (1).svg' />
                </div>
            </div>
            <div className='mobile-header-bg'>
                <img src='Group 7399.svg' className="movie-logo-img" alt='movie-logo' />
                <LuMenu style={{ color: 'white', height: '40px', width: '40px' }} />
            </div>
        </>
    )
}

export default withRouter(Header)