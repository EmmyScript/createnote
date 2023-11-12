import {FaUserGraduate} from "react-icons/fa"
import trouser2 from "../images/trouser2.jpg"
import quote2 from "../images/quote2.jpg"

const Navbar = () => {
  return (

    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Ido's<span><FaUserGraduate/></span></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
     data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link text-center" aria-current="page" href="#"> Modern Notes Taking App</a>
        </li>
       
        <li className=" dropd nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
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
      <img src={trouser2} className="d-block w-20" alt={trouser2} width={200} />
      <h3>sup</h3>
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