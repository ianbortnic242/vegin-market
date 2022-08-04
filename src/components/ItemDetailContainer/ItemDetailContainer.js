import ItemDetail from '../ItemDetail/ItemDetail'
import {getProductById} from "../../asyncMock";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


const ItemDetailContainer = () =>{
    const [product, setProduct] = useState([])

    const {productId} = useParams()

    useEffect(()=>{
        getProductById(productId).then(resp => {
            setProduct(resp)
              })
      },[])

    return(
        <div>
            <ItemDetail {...product}/>
        </div>
    )
}

export default ItemDetailContainer