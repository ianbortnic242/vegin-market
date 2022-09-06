import { useContext, useState } from "react"
import { CartContext } from '../../context/CartContext'
import CartItem from '../CartItem/CartItem'
import { addDoc, collection, Timestamp, updateDoc, doc, query, where, getDocs, documentId, writeBatch} from 'firebase/firestore'
import {db} from '../../services/firebase/index'
import { clear } from '@testing-library/user-event/dist/clear'
import swal from 'sweetalert';
// import { getProducts} from "../../asyncMock"


const Checkout = () => {

    const { cart, clearCart, getTotal} = useContext(CartContext) 

    const total = getTotal()

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");


    const createOrder = async () => {
        try{
            const objOrder = {
                buyer: {
                    name: firstName,
                    lastName: lastName,
                    phone: phone,
                    mail: email
                },
                items: cart,
                total,
                date: Timestamp.fromDate(new Date())
            }
    
            const ids = cart.map(prod => prod.id)
    
            const productsAddedFromFireStore = await getDocs(query(collection(db, 'products'), where(documentId(), 'in', ids)))

    
            const {docs} = productsAddedFromFireStore
    
            const outOfStock = []
    
            const batch = writeBatch(db)
    
            docs.forEach(doc =>{
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock
                const productAdded = cart.find(prod=>prod.id===doc.id)
                const productQuantity = productAdded?.quantity
    
                if(stockDb >= productQuantity){
                    batch.update(doc.ref, {'stock': stockDb - productQuantity})
                }else{
                    outOfStock.push({id: doc.id, ...dataDoc})
                }
            })
    
            if(outOfStock.length===0){
                const  orderRef = collection(db, 'orders')
                const orderAdded = await addDoc(orderRef, objOrder)
                batch.commit()
                swal(`Felicitaciones ${firstName}, tu orden fue ingresada de manera correcta`, `Numero Orden: "${orderAdded.id}"`, "success")
                clearCart()
            }else{
                const missing_products = outOfStock.map(p => p.title)
                swal(`Lo lamentamos ${firstName}, tu orden no pudo ser ingresada`, `Productos con stock insuficiente: "${missing_products}"`, "error")
               
            }

        }catch(error){
            console.log(error)
        }
        

    }






    return (
        <div>
            <h1>
                Checkout
            </h1>
            <h2>
                Ingresa tus datos para poder ingresar la orden.
            </h2><br/>
            <form>
    <input
      value={firstName}
      onChange={e => setFirstName(e.target.value)}
      placeholder="Nombre"
      type="text"
      name="Nombre"
      required
    /><br/><br/>
    <input
      value={lastName}
      onChange={e => setLastName(e.target.value)}
      placeholder="Apellido"
      type="text"
      name="Apellido"
      required
    /><br/><br/>
    <input
      value={email}
      onChange={e => setEmail(e.target.value)}
      placeholder="Email"
      type="email"
      name="email"
      required
    /><br/><br/>
    <input
      value={phone}
      onChange={e => setPhone(e.target.value)}
      placeholder="Telefono"
      type="phone"
      name="phone"
      required
    /><br/><br/>
  </form>
        <button onClick={() => createOrder()}>Crear Orden</button>
        </div>
    )

}

export default Checkout;



