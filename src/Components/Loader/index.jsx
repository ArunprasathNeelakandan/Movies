import './index.css'
import React from 'react'
import { TailSpin } from 'react-loader-spinner'

function Loader() {
    return (
        <div className='loader-container'>
                <TailSpin
                    visible={true}
                    height="100"
                    width="100"
                    color="#D81F26"
                    ariaLabel="tail-spin-loading"
                    radius="1"
                    wrapperStyle={{}}
                    wrapperClass=""
                />
        </div>
    )
}

export default Loader
