import { withRouter } from 'react-router-dom'

import './index.css'
const NotFound = (props) => {
    const goHome = () => {
        props.history.replace('/')
    }
    return(
        <div className='not-found-bg'>
            
                <h1>Lost Your Way</h1>
                <p>We are soory the page you requested could not be Found.Please go back to the homepage.</p>
                <button onClick={goHome}>Go to Home</button>
        </div>
    )
}

export default withRouter(NotFound)