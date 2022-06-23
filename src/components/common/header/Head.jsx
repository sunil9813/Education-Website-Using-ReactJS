import React from "react"
import Logo from "../../../img/Logo.jpg"


const Head = () => {
  return (
    <>
      <section className='head'>
        <div className='container flexSB'>
          <div className='logo'>
            <img src={Logo} alt="" style={{height: 70, width: 150}} />
            {/* <h1>ADWWINPA BUSINESS</h1>
            <span>WE GET YOU KNOWN</span> */}
          </div>

          <div className='social'>
            <i className='fab fa-facebook-f icon'></i>
            <i className='fab fa-instagram icon'></i>
            <i className='fab fa-twitter icon'></i>
            <i className='fab fa-youtube icon'></i>
          </div>
        </div>
      </section>
    </>
  )
}

export default Head
