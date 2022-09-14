import ItemList from "../ItemList/ItemList"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import { getDocs, collection, query, where } from "firebase/firestore";
import {db} from '../../services/firebase/index'


const ItemListContainer = (props) => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)


  const {categoryId} = useParams()


  useEffect(()=>{

    setLoading(true)

    const collectionRef = ! categoryId
      ? collection(db, 'products')
      : query(collection(db, 'products'), where('category', '==', categoryId))

    getDocs(collectionRef).then(response => {
      const products = response.docs.map(doc => {
        return {id: doc.id, ...doc.data()}
      })
      setProducts(products)
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