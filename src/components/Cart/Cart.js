import './Cart.css'
import { useContext, useState, useEffect} from "react"
import { CartContext } from '../../context/CartContext'
import CartItem from '../CartItem/CartItem'
import { Link } from 'react-router-dom'

const Cart= () => {
    const { cart, clearCart, getTotal} = useContext(CartContext) 
    const [disabled, setDisabled] = useState(false)
    

    const total = getTotal()

    useEffect(() => {
        if(total===0){
            setDisabled(true)
        }
      })

    
    // const fillProducts = () =>{
    //     getProducts().then(resp =>{
    //         setProducts(resp)
    //         console.log(products)
    //       })
    //     products.forEach(element => {
    //         addDoc(collection(db, 'products'), element).then(response => {
    //             console.log(response)
    //         })  
    //     })
    // }

    // updateDoc(doc(db, 'products',   'tjEhpE8gUUp5FW5BbYOe'), {'stock': 19}).then(response =>{
    //     console.log(response)
    // })


    return(
        <>
        <div>
            <h1>Productos Seleccionados</h1>
        </div>
            <div className='Item'>
            { cart.map(p => <CartItem key={p.id} {...p}/>) }
            <h3 className='Total'>Total: ${total}</h3>
            <button onClick={() => clearCart()} className="ButtonEliminar">Borrar todo</button>
            <Link to='/checkout'><button disabled = {disabled} className="ButtonEliminar">Ir al Checkout</button></Link>
            
            {/* <button onClick={() => fillProducts()} className="ButtonEliminar">Fill Products</button> */}
            </div>

        </>
    )
}

export default Cart