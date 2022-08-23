import './Cart.css'
import { useContext, useState } from "react"
import { CartContext } from '../../context/CartContext'
import CartItem from '../CartItem/CartItem'
import { addDoc, collection, Timestamp, updateDoc, doc } from 'firebase/firestore'
import {db} from '../../services/firebase/index'
// import { getProducts} from "../../asyncMock"

const Cart= () => {
    const { cart, clearCart, getTotal} = useContext(CartContext) 
    // const [products, setProducts] = useState([]) 

    const total = getTotal()
    
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



    const createOrder = () => {
        const objOrder = {
            buyer: {
                name: 'Ian Bortnic',
                phone: '964',
                mail: 'ian@gmail.com'
            },
            items: cart,
            total,
            date: Timestamp.fromDate(new Date())
        }
        addDoc(collection(db, 'orders'), objOrder).then(response => {
            console.log(response)
        })
    }

    return(
        <>
        <div>
            <h1>Productos Seleccionados</h1>
        </div>
            <div className='Item'>
            { cart.map(p => <CartItem key={p.id} {...p}/>) }
            <h3 className='Total'>Total: ${total}</h3>
            <button onClick={() => clearCart()} className="ButtonEliminar">Borrar todo</button>
            <button onClick={() => createOrder()} className="ButtonEliminar">Crear Orden</button>
            {/* <button onClick={() => fillProducts()} className="ButtonEliminar">Fill Products</button> */}
            </div>

        </>
    )
}

export default Cart