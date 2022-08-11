import { useState, useContext } from 'react'
import Counter from '../ItemCount/ItemCount'
import './ItemDetail.css'
import {Link} from 'react-router-dom'
import { CartContext } from '../../context/CartContext'


const ItemDetail = ({id, title, description, category, price, stock, img}) =>{

    const [quantity, setQuantity] = useState(0)
    const {cart, addItem} = useContext(CartContext)


    const handleOnAdd = (quantity) => {
        console.log(`${quantity} Items agregados satisfactoriamente`)
        setQuantity(quantity)
        addItem({id, title, price, quantity})
        console.log(cart)


      }
    return(

    <div className='DetailProduct'>
        <img alt="producto" className='DetailImg' src={img}/>
        <span className='DetailTitle'>{title}</span>
        <span className='DetailCategory'>Categoría: {category}</span>
        <span className='DetailPrice'>${price}</span>
        <span className='DetailDescription'>Descripción: {description}</span>
        <span className='DetailStock'>Stock Disponible: {stock}</span>
        {quantity > 0 ? <Link className='GoToCart' to='/cart'>Ir al carrito </Link>: <Counter stock={20} initial={1} onAdd={handleOnAdd}/>}
    </div>


    )
}

export default ItemDetail


