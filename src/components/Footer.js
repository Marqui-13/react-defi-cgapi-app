import React from "react";
import { FaFacebook, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="col col-1">
            <h1>De<span className='primary'>Fi</span></h1>
        </div>
        <div className="col">
            <h5>Support</h5>
            <span className='bar'></span>
                <a href='/'>Contact us</a>
                <a href='/'>Chat</a>
                <a href='/'>Help Center</a>
                <a href='/'>FAQ</a>
        </div>
        <div className="col">
            <h5>Developer</h5>
            <span className='bar'></span>            
                <a href='/'>Cloud</a>
                <a href='/'>Commerce</a>
                <a href='/'>Pro</a>
                <a href='/'>API</a>
        </div>
        <div className="col">
            <h5>Company</h5>
            <span className='bar'></span>
                <a href='/'>About</a>
                <a href='/'>Information</a>
                <a href='/'>Legal</a>
                <a href='/'>Privacy</a>
        </div>
        <div className="col">
            <h5>Social</h5>
            <span className='bar'></span>
                <a href='/'><FaFacebook className='icon' /></a>
                <a href='/'><FaTwitter className='icon' /></a>
                <a href='/'><FaLinkedin className='icon' /></a>
                <a href='/'><FaGithub className='icon' /></a>
        </div>
      </div>
        <div class="madeby">
            Made by <a href="https://github.com/Marqui-13" target="_blank">&nbsp;Marqui&nbsp;</a> ⚬ Built with&nbsp;<a href="https://reactjs.org/" target="_blank">ReactJS&nbsp;</a> ⚬ <a href="https://ipfs.io/" target="_blank">&nbsp;IPFS&nbsp;</a> ⚬ <a href="https://fleek.co/" target="_blank">&nbsp;Fleek&nbsp;</a> ⚬ <a href="https://www.coingecko.com/en/api/documentation" target="_blank">&nbsp;CoinGecko API</a>
        </div>
    </div>
    
  );
};

export default Footer;
