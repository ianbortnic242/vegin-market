import './CartItem.css'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'


const CartItem = ({ id, title, quantity, price }) => {
    const { removeItem } = useContext(CartContext)

    const handleRemove = (id) => {
        removeItem(id)
    }

    return (
        <div>        
            <div className='Details'>
                <div>{title}</div>
                <div>Cantidad: {quantity} </div>
                <div >Precio x Unidad: ${price}</div>
                <div> Subtotal: ${price * quantity}</div>
                <button className='ButtonEliminar' onClick={() => handleRemove(id)}>Eliminar</button>
            </div>
        </div>
    )
}

export default CartItem 