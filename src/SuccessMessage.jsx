import React from 'react'
import successGif from './assets/success.svg'

function SuccessMessage() {
  return (
    <div className='flex flex-row justify-center items-center'>
        <div className='flex flex-col m-10 p-10 rounded-md'>
            
          <img src={successGif} alt="success image"/>
          <h1>Thanks for filling out our form!
            </h1>
        </div>
      </div>
  )
}

export default SuccessMessage