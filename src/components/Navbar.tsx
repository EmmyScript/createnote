import {FaUserGraduate} from "react-icons/fa"
import quote2 from "../images/quote2.jpg"
import b2 from "../images/b2.jpg"

//import { Carousel } from "react-responsive-carousel";
//import "react-responsive-carousel/lib/styles/carousel.min.css"

const Navbar = () => {
  return (

    <nav className="navbar sticky-top navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand  fs-20" href="#"><span> <FaUserGraduate/></span></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
     data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className=" title nav-link text-center rounded-top-circle p-3 m-3"> Modern Notes Taking App </a>
        </li>
       
        <li className=" dropd nav-item dropdown">
          <a className="  text-dark p-2 nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            About 
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#"></a></li>
            <li><a className="dropdown-item" href="#"></a></li>
            <li><a className="dropdown-divider"></a></li>
            <li><a className="dropdown-item" href="#"></a></li>

            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={b2} className="d-block w-20" alt={b2} width={100} />
      <h3>EmmyTech</h3>
    </div>
    <div className="carousel-item">
      <img src={quote2} className="d-block w-20" alt={quote2}  width={200}/>
    </div>
   
  </div>
</div>
          </ul>
        </li>
       
      </ul>
      
    </div>
  </div>
</nav>
  )
}

export default Navbar