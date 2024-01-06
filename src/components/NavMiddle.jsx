import React from 'react'
import '../styles/NavMiddle.css'
import logo from '../assets/logo.avif'


const NavMiddle = () => {
  return (
   
      <nav className='navbar navbar-expand-lg  d-flex justify-content-between '>
            <div id="logo" className='d-flex'>
                <img src={logo} alt="" />
                <p className='my-4 fs-4'>Ohh!! My <span className='text-danger fs-2 font-weight-bold '>Celebration</span></p>
            </div>

            <div className='me-5'>
                <ul className=''>
                    <li className='me-5'><i className="fa-solid fa-phone-volume fs-3 "></i> <span className=' ms-2 fs-3'>ORDER NOW</span> <span className='ms-2 order fs-5'>58865543</span></li>
                    <li className='me-5'><i className="fa-solid fa-map-location-dot fs-3"></i> <span className='order ms-2 fs-3'>ORDER STATUS</span> </li>
                </ul>
            </div>
       </nav>
    
  )
}

export default NavMiddle
