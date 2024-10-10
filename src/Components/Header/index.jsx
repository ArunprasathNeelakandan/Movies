import { CiSearch } from "react-icons/ci";
import { LuMenu } from "react-icons/lu"
import { Link } from 'react-router-dom'
import { withRouter } from "react-router-dom";
import './index.css'
import { FaSearch } from 'react-icons/fa'
import { useState } from "react";
import { MdCancel } from "react-icons/md";

const Header = (props) => {
    const {getSearchText} = props
    const [searchText, setSearchText] = useState('')
    const [isMenuVisble,setIsMenuVisible] = useState(false)

    const changeText = (event) => {
        setSearchText(event.target.value)
    }

    const getSearchData = () => {
        getSearchText(searchText)
    }

    const isSearchcontainer = props.match.path === '/search'
    const isVisibleMobileMenuContainer = false

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

    const changeMenuStatus = () => {
        setIsMenuVisible(ps => !ps)
        
    }

    const renderMobileMenu = () => {
        if (isMenuVisble) {
            return (
                <div className="mobile-menu">
            <Link to='/'><p className="menu-text">Home</p></Link>
            <Link to='/popular-movies'><p className="menu-text">Popular</p></Link>
            <Link to='/account'><p className="menu-text">Account</p></Link>
            <button onClick={changeMenuStatus}><MdCancel className="cancel-btn"/> </button>
        </div>
            )
        }
            
    }
    return (
        <>
            <div className='desktop-header-bg'>
                <div className="header-logo-section">
                    <Link to='/'>< img src='Group 7399.svg' className="movie-logo-img" alt='movie-logo' /></Link>
                    <Link to='/'> <p className="home-text">Home </p></Link>
                    <Link to='/popular-movies'><p className="home-text">Popular</p></Link>
                </div>
                <div className="header-search-section">
                    {renderSearchitem()}
                    <Link to='/account'> <img src='Avatar (1).svg' /> </Link>
                </div>
            </div>
            <div className='mobile-header-bg'>
                <Link to='/'><img src='Group 7399.svg' className="movie-logo-img" alt='movie-logo' /></Link>
                <LuMenu style={{ color: 'white', height: '40px', width: '40px' }} onClick={changeMenuStatus} />
            </div>
            {renderMobileMenu()}
        </>
    )
}

export default withRouter(Header)