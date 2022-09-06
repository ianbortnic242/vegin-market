import { useState, useContext } from 'react'
import Counter from '../ItemCount/ItemCount'
import './ItemDetail.css'
import {Link} from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import swal from 'sweetalert';



const ItemDetail = ({id, title, description, category, price, stock, img}) =>{

    const [quantity, setQuantity] = useState(0)
    const {addItem, getInitialById} = useContext(CartContext)

    const quantityAdded = getInitialById(id)


    const handleOnAdd = (quantity) => {
        swal(`${quantity} Item(s) agregados satisfactoriamente`,'', "success")
        setQuantity(quantity)
        addItem({id, title, price, quantity})
      }
    return(

    <div className='DetailProduct'>
        <img alt="producto" className='DetailImg' src={img}/>
        <span className='DetailTitle'>{title}</span>
        <span className='DetailCategory'>Categoría: {category}</span>
        <span className='DetailPrice'>${price}</span>
        <span className='DetailDescription'>Descripción: {description}</span>
        <span className='DetailStock'>Stock Disponible: {stock}</span>
        {quantity > 0 ? <Link className='GoToCart' to='/cart'><button className='GoToCartButton'>Ir al Carrito</button></Link>: <Counter stock={stock} initial={quantityAdded} title ={title} onAdd={handleOnAdd}/>}
    </div>


    )
}

export default ItemDetail


