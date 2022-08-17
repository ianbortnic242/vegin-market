import './Cart.css'
import { useContext } from "react"
import { CartContext } from '../../context/CartContext'
import CartItem from '../CartItem/CartItem'

const Cart= () => {
    const { cart, clearCart, getTotal} = useContext(CartContext)  

    const total = getTotal()

    return(
        <>
        <div>
            <h1>Productos Seleccionados</h1>
        </div>
            <div className='Item'>
            { cart.map(p => <CartItem key={p.id} {...p}/>) }
            <h3 className='Total'>Total: ${total}</h3>
            <button onClick={() => clearCart()} className="ButtonEliminar">Borrar todo</button>
            </div>

        </>
    )
}

export default Cart