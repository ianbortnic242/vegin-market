import ItemList from "../ItemList/ItemList"
import { getProducts, getProductsByCategory} from "../../asyncMock"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";


const ItemListContainer = (props) => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)


  const {categoryId} = useParams()


  useEffect(()=>{

    const asyncFunction =  categoryId ? getProductsByCategory : getProducts

    asyncFunction(categoryId).then(resp =>{
      setProducts(resp)
    }).catch(err =>{
      console.log(err)
    }).finally(() =>{
      setLoading(false)
    })

  },[categoryId])

    if(loading){
      return <div>Cargando Productos...</div>
    }

  return (
    <div>
      <h1>{props.greeting}</h1>
      <ItemList products={products}/>
    </div>
  );
};

export default ItemListContainer;