import Counter from '../ItemCount/ItemCount'
import './ItemDetail.css'

const ItemDetail = ({product}) =>{
    const handleOnAdd = (count) => {
        console.log(`${count} Items agregados satisfactoriamente`)
      }
    return(

    <div className='DetailProduct'>
        <img alt="producto" className='DetailImg' src={product.img}/>
        <span className='DetailTitle'>{product.title}</span>
        <span className='DetailCategory'>Categoría: {product.category}</span>
        <span className='DetailPrice'>${product.price}</span>
        <span className='DetailDescription'>Descripción: {product.description}</span>
        <span className='DetailStock'>Stock Disponible: {product.stock}</span>
        <Counter stock={20} initial={1} onAdd={handleOnAdd}/>
    </div>


    )
}

export default ItemDetail


