import Counter from "../ItemCount/ItemCount";
import ItemList from "../ItemList/ItemList";
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";
import { getProducts, getProduct } from "../../asyncMock";
import { useState, useEffect } from "react";

const ItemListContainer = (props) => {
  const [products, setProducts] = useState([])
  const [product, setProduct] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    getProducts().then(resp =>{
      setProducts(resp)
    }).catch(err =>{
      console.log(err)
    }).finally(() =>{
      setLoading(false)
    })

    getProduct().then(resp => {
        setProduct(resp)
      }).catch(err =>{
        console.log(err)
      })

  },[])

    if(loading){
      return <div>Cargando Productos...</div>
    }

  return (
    <div>
      <h1>{props.greeting}</h1>
      <ItemList products={products}/>
      <ItemDetailContainer product={product}/>
    </div>
  );
};

export default ItemListContainer;