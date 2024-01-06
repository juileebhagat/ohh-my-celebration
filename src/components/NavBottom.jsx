import React from 'react'
import '../styles/NavBottom.css'

const NavBottom = () => {
  return (
    <nav className=" bottom navbar navbar-expand-lg sticky-top">
    <div className="container-fluid ms-5">
   
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item ms-2">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>
         
          <li className="nav-item dropdown ">
            <a className="nav-link dropdown-toggle ms-2" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <b>Cakes By Flavour</b>
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Fresh Cream Cakes</a></li>
              <li><a className="dropdown-item" href="#">Chocolate Cakes</a></li>
              <li><a className="dropdown-item" href="#">Mango Cakes</a></li>
              <li><a className="dropdown-item" href="#">Strawberry Cakes</a></li>
            </ul>
          </li>

          <li className="nav-item dropdown ">
            <a className="nav-link dropdown-toggle ms-2" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <b>Cakes By Theme</b>
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">2-3 Tier Cakes</a></li>
              <li><a className="dropdown-item" href="#">Cartoon Cakes</a></li>
              <li><a className="dropdown-item" href="#">Wedding Cakes</a></li>
              <li><a className="dropdown-item" href="#">Heart Shaped Cakes</a></li>
            </ul>
          </li>

          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle ms-2" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <b>Combo Products</b>
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Cake and Flowers</a></li>
              <li><a className="dropdown-item" href="#">Flowers and Chocolates</a></li>
              <li><a className="dropdown-item" href="#">Eggless Cake-Flowers-Chocolates</a></li>
              <li><a className="dropdown-item" href="#">Eggless Cake-Flowers-Teddy</a></li>
          
            </ul>
          </li>

          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle ms-2" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <b>Flowers</b>
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Carnation</a></li>
              <li><a className="dropdown-item" href="#">Lily</a></li>
              <li><a className="dropdown-item" href="#">Orchids</a></li>
              <li><a className="dropdown-item" href="#">Roses</a></li>
          
            </ul>
          </li>

          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#"><b>Photo Cakes</b></a>
          </li>

          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle ms-2" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <b>Gifts</b>
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Greeting Cards</a></li>
              <li><a className="dropdown-item" href="#">Fruits</a></li>
              <li><a className="dropdown-item" href="#">Sweets</a></li>
              <li><a className="dropdown-item" href="#">Teddy</a></li>
          
            </ul>
          </li>

          <li className="nav-item dropdown ">
            <a className="nav-link dropdown-toggle ms-2" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <b>Occasion</b>
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">New Year Cake</a></li>
              <li><a className="dropdown-item" href="#">Friendship Day Cakes</a></li>
              <li><a className="dropdown-item" href="#">Christmas Cakes</a></li>
              <li><a className="dropdown-item" href="#">Farewell Cakes</a></li>
          
            </ul>
          </li>

          <li className="nav-item dropdown ">
            <a className="nav-link dropdown-toggle ms-2" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <b>Chocolates</b>
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Chocolate Combo</a></li>
              <li><a className="dropdown-item" href="#">Chocolate Bouquets</a></li>
              <li><a className="dropdown-item" href="#">Cadbury</a></li>
            </ul>
          </li>

          <li className="nav-item dropdown ">
            <a className="nav-link dropdown-toggle ms-2" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <b>Plants</b>
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Indoor</a></li>
              <li><a className="dropdown-item" href="#">Flowering</a></li>
              <li><a className="dropdown-item" href="#">Air purifying</a></li>
              <li><a className="dropdown-item" href="#">Money</a></li>
            </ul>
          </li>
         
         
          <li className="nav-item ">
            <a className="nav-link active ms-2" aria-current="page" href="#"><b>Birthday Cakes</b></a>
          </li>

        </ul>
        
      </div>
    </div>
  </nav>
  )
}

export default NavBottom
