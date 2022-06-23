import React, { useState } from "react"
import { Link } from "react-router-dom"
import Head from "./Head"
import "./header.css"

const Header = () => {
  const [click, setClick] = useState(false)

  return (
    <>
      <Head />
      <header>
        <nav className='flexSB'>
          <ul className={click ? "mobile-nav" : "flexSB "} onClick={() => setClick(false)}>
            <li>
              {/* <Link to='/'>Home</Link> */}
              <a href="/">Home</a>
            </li>
            <li>
              {/* <Link to='/courses'>All Courses</Link> */}
              <a href="/services">Services</a>
            </li>
            <li>
              {/* <Link to='/about'>About</Link> */}
              <a href="/about">About</a>
            </li>
            {/* <li>
              <Link to='/team'>Team</Link>
            </li>
            <li>
              <Link to='/pricing'>Pricing</Link>
            </li>
            <li>
              <Link to='/journal'>Journal</Link>
            </li> */}
            <li>
              {/* <Link to='/contact'>Contact</Link> */}
              <a href="/contact">Contact</a>
            </li>
          </ul>
          <div className='start'>
            <div className='button'>SEND DOCUMENT</div>
          </div>
          <button className='toggle' onClick={() => setClick(!click)}>
            {click ? <i className='fa fa-times'> </i> : <i className='fa fa-bars'></i>}
          </button>
        </nav>
      </header>
    </>
  )
}

export default Header
