import './Header.css'
import {Link} from 'react-router-dom'

const Header = () => {

    
    return (
    <div className="header">
        <Link to={{pathname: '/'}}>
            <img src='./img/logo.png' alt='logo vegin'></img>
        </Link>
    </div>
    )
}

export default Header