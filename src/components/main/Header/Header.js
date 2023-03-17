import './Header.css'
import {Link} from 'react-router-dom'
import {NavbarBasic} from './Navbar/Navbar'

const Header = () => {

    
    return (
    <div className='header'>
            <div className="barra">
        <Link to={{pathname: '/'}}>
            <img src='./img/logo.png' alt='logo vegin'></img>
        </Link>
    </div>
        <NavbarBasic/>
    </div>

    )
}

export default Header