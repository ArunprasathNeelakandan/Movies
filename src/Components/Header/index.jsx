import { CiSearch } from "react-icons/ci";
import { LuMenu } from "react-icons/lu"
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
    <>
        <div className='desktop-header-bg'>
            <div className="header-logo-section">
                <img src='Group 7399.svg' className="movie-logo-img" alt='movie-logo'/>
                <Link to='/'><p className="para">Home</p>
                </Link>
                <Link to='/popular-movies'>
                <p className="para">Popular</p>
                </Link>
            </div>
            <div className="header-search-section">
                <CiSearch style={{color:'white',height:'40px',width:'40px'}}/>
                <img src='Avatar (1).svg'/>
            </div>
        </div>
        <div className='mobile-header-bg'>
            <img src='Group 7399.svg' className="movie-logo-img" alt='movie-logo'/>     
            <LuMenu />
        </div>
    </>
)

export default Header