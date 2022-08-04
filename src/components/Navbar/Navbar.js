import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget';
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (

        <nav className="navbar sticky-top navbar-expand-lg navbar-dark background">
        <div className="container-fluid">
        <a href=" "><Link to='/'><img src='/img/logo.png' height="80px" alt="logo"/></Link></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav navbar-custom">
                <li className="nav-item"><a className="nav-link not_selected" href=" "><Link to='/category/Proteinas'>Proteinas</Link></a></li>
                <li className="nav-item"><a className="nav-link not_selected" href=" "><Link to='/category/Cereales'>Cereales</Link></a></li>
                <li className="nav-item"><a className="nav-link not_selected" href=" "><Link to='/category/Leches'>Leches</Link></a></li>
                <li className="nav-item"><a className="nav-link not_selected" href=" "><Link to='/category/Golosinas'>Golosinas</Link></a></li>
            </ul>
            <CartWidget/>
        </div>
        </div>

        </nav>
    )
}



export default Navbar