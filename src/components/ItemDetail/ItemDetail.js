import Counter from '../ItemCount/ItemCount'
import './ItemDetail.css'

const ItemDetail = ({product}) =>{
    const handleOnAdd = (count) => {
        console.log(`${count} Items agregados satisfactoriamente`)
      }
    return(

    <div className='DetailProduct'>
        <img alt="producto" className='Img' src={product.img}/>
        <span className='DetailTitle'>{product.title}</span>
        <span className='DetailCategory'>{product.category}</span>
        <span className='DetailPrice'>{product.price}</span>
        <span className='DetailDescription'>{product.description}</span>
        <Counter stock={20} initial={1} onAdd={handleOnAdd}/>
    </div>


    )
}

export default ItemDetail


