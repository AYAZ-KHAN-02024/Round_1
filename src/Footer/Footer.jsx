import './Footer.css'
import React from 'react'
function Footer() {
  return (
    <>
      <footer>
        <div className="foot_box">
          <h4 style={{color:'darkred',textDecoration:'underline'}}>Hobby</h4>
          <p>About us</p>
          <p>contact us</p>
          <p>Our Services</p>
          <p>FAQ</p>
          <p>Feedback</p>
        </div>
        <div className="foot_box">
          <h4 style={{color:'brown',textDecoration:'underline'}}>Links</h4>
          <p>Blog</p>
          <p>Youtube</p>
          <p>news</p>
          <p>lorem</p>
          <p>location</p>
        </div>
        <div className="foot_box">
         <h4 style={{color:'blue',textDecoration:'underline'}}> Social Media</h4>
          <div className="icon">
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-google"></i>
          <i className="fa-brands fa-youtube"></i>
          <i className="fa-solid fa-music"></i>
          <i className="fa-brands fa-facebook"></i>
          </div>
          <div className="search">
            <input type="text" className="srh" placeholder='email...' style={{width:'150px'}}/>
            <i className="srh">Invite</i>
          </div>

        </div>

      <div className="contact-details">
          <h5>&copy; copyright {new Date().getFullYear()}, Build by Ayaz khan, all rights reserved</h5>
        </div>
      </footer>
    </>
  )
}

export default Footer
