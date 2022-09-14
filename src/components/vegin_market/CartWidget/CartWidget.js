import {Link} from 'react-router-dom'
import {useContext } from 'react'
import { CartContext } from '../../context/CartContext'


const CartWidget = () => {
    const {cart, getQuantity} = useContext(CartContext)
    return (
        <div>
            <Link to='/cart'><img width = '25' src='/img/shopping-cart-outline.svg' alt='cart'/></Link>
            {getQuantity(cart)}
        </div>
    )
}

export default CartWidget