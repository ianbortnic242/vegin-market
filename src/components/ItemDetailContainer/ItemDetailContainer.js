import ItemDetail from '../ItemDetail/ItemDetail'
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDoc, doc} from "firebase/firestore";
import {db} from '../../services/firebase/index'


const ItemDetailContainer = ({addItem}) =>{
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true)


    const {productId} = useParams()


    useEffect(()=>{ 

  
      getDoc(doc(db, 'products', productId)).then(response => {
        const product = {id: response.id, ...response.data()}
        setProduct(product)
      }).catch(err =>{
        console.log(err)
      }).finally(() =>{
        setLoading(false)
      })
    },[productId])

    
    if(loading){
        return <h1>Cargando...</h1>
    }

    return(
        <div>
            <ItemDetail {...product} addItem={addItem}/>
        </div>
    )
}

export default ItemDetailContainer