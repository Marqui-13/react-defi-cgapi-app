import React from 'react'
import './Signup.css'
import Crypto from '../assets/trade.png'

const Signup = () => {
  return (
    <div id='earn' className='signup'>
      <div className='container'>

        <div className='left'>
          <img src={Crypto} alt=''/>
        </div>

        <div className='right'>
          <h2>Earn passive income with crypto.</h2>
          <p>Earn up to 13% annual rewards on 50+ digital assets. </p>
          <div className='input-container'>
            <input type='email' placeholder='Enter your email' />
            <button className='btn'>Learn More</button>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Signup
