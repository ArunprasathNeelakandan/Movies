import './index.css'
import React from 'react'
import { TailSpin } from 'react-loader-spinner'

function Loader() {
    return (
        <div className='loader-container'>
            <div>
                <TailSpin
                    visible={true}
                    height="40"
                    width="40"
                    color="#D81F26"
                    ariaLabel="tail-spin-loading"
                    radius="1"
                    wrapperStyle={{}}
                    wrapperClass=""
                />
            </div>
        </div>
    )
}

export default Loader
