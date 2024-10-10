import Cookie from 'js-cookie'
import Header from '../Header'
import Footer from '../Footer'
import { Redirect } from 'react-router-dom'
import './index.css'


const Account = (props) => {

    const doLogOut = () => {
        console.log(`aaaaaaaa`)
        Cookie.remove('jwt_token')
        props.history.replace('/')
    }
    

    return(
        <div className = 'Account-bg'>
                <Header/>
            <div className='account-section'>
                <h1 className='account-head'>Account</h1>
                <hr/>
                <div className="account-details">
                <div className='detailes-head'>
                    <p className='fade-text'>Member ship</p>
                    </div>
                    <div className='detailes-card'>
                        <p>rahul@gmail.com</p>
                        <p>Password: ************</p>
                    </div>
                </div>
                <hr/>
                <div className="account-details">
                    <div className='detailes-head'>
                    <p className='fade-text'>plan Details</p>
                    </div>
                    <div className='detailes-card'>
                        <p>Premium</p>    
                    </div>
                </div>
                <hr/>
                <div className='log-out-btn-bg'>
                    <button className='log-out-btn' onClick={doLogOut}>Log out</button>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Account