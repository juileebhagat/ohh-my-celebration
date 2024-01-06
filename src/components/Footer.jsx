import React from 'react'
import logo from '../assets/logo.avif'
import '../styles/Footer.css'

const Footer = () => {
  return (
    <footer className='container-fluid min-vh-75 border border-dark d-flex flex-wrap justify-content-center'>
        <div className='w-25  ms-2 py-4 me-5'>
        <div id="logo" className='d-flex'>
                <img src={logo} alt="" />
                <p className='my-4 fs-4'>Ohh!! My <span className='text-danger fs-2 font-weight-bold '>Celebration</span></p>
            </div>
            <p className='ms-5'>Registered Address</p>
            <ul>
               
                <li><i className="fa-solid fa-location-dot me-2"></i>D-201, Senapati Bapat Road, High Street Complex,Near BVB  Pune-411005</li>
                <li><i class="fa-solid fa-envelope me-2"></i>order@mycelebration.com</li>
                <li><i class="fa-solid fa-phone-volume me-2"></i>+91 202544444</li>
            </ul>
        </div>

        <div className='w-25  ms-5 py-4'>
        <h4 className='ms-4' ><u>CelebrationCakes</u></h4>
        <ul className='foot py-5'>
            <li>ABOUT US</li>
            <li>CONTACT US</li>
            <li>DELIVERY POLICY</li>
            <li>TERMS AND CONDITIONS</li>
            <li>FAQ</li>
        </ul>
        </div>

        <div className='w-25 ms-5 py-4'>
        <h4 className='ms-4' ><u>Stay Updated</u></h4>
        <ul className='foott py-5'>
            <li><i className="fa-brands fa-facebook me-2"></i>Facebook</li>
            <li><i className="fa-brands fa-twitter me-2"></i>Twitter</li>
            <li><i className="fa-brands fa-instagram me-2"></i>Instagram</li>
        </ul>
        </div>
        <div></div>
    </footer>
  )
}

export default Footer
