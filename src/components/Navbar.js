import React, {useState} from 'react'
import './Navbar.css'
import {FaBars, FaTimes} from 'react-icons/fa'

const Navbar = () => {
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)


  return (
    <div className='header'>
        <div className='container'>
            <h1>De<span className='primary'>Fi</span></h1>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li>
                    <a href='/'>Home</a>
                </li>
                <li>
                    <a href='/#features'>Features</a>
                </li>
                <li>
                    <a href='/#earn'>Earn</a>
                </li>
            </ul>
            <div className='btn-group'>
                {/* <button className='btn'>Connect Wallet</button> */}
                

                {/* <button className='btn' id="btn-login">Moralis Metamask Login</button>
                <button id="btn-logout">Logout</button> */}
            </div>

            <script type="text/javascript" src="./main.js"></script>
            <div className='hamburger' onClick={handleClick}>
                {click ? (<FaTimes size={20} style={{color: '333'}}/>) : (<FaBars size={20} style={{color: '333'}}/>)}
            </div>
        </div>
    </div>
  )
}

export default Navbar
  )
}

export default Navbar
