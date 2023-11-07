import {FaUserGraduate} from "react-icons/fa"

const Navbar = () => {
  return (

    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Ido's<span><FaUserGraduate/></span></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link text-center" aria-current="page" href="#">Notes Taking App</a>
        </li>
       
        <li className=" dropd nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            About 
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Title:according to the elements. you can also searched title and update new one</a></li>
            <li><a className="dropdown-item" href="#">Tag:for easy identification of elements. ability to creat new tags or search old tags.</a></li>
            <li><a className="dropdown-divider"></a></li>
            <li><a className="dropdown-item" href="#">Body:for write-up or for creating list of items</a></li>
          </ul>
        </li>
       
      </ul>
      
    </div>
  </div>
</nav>
  )
}

export default Navbar