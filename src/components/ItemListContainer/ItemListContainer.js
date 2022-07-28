import Counter from "../ItemCount/ItemCount";
import ItemList from "../ItemList/ItemList";
import { getProducts } from "../../asyncMock";
import { useState, useEffect } from "react";

const ItemListContainer = (props) => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    getProducts().then(resp =>{
      setProducts(resp)
    }).catch(err =>{
      console.log(err)
    }).finally(() =>{
      setLoading(false)
    })

  },[])

    if(loading){
      return <div>Cargando Productos...</div>
    }

const handleOnAdd = (count) => {
        console.log(`${count} Items agregados satisfactoriamente`)
      }
  return (
    <div>
      <h1>{props.greeting}</h1>
      <Counter stock={20} initial={1} onAdd={handleOnAdd}/>
      <ItemList products={products}/>
    </div>
  );
};

export default ItemListContainer;