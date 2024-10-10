import './index.css'

const FailureView = () => {
    return(
        <div className="failure-container">
            <img src='icon.svg'/>
            <p>Something went Wrong.Please Try again later</p>
            <div>
                <button>Try Again</button>
            </div>
            
        </div>
    )
}

export default FailureView