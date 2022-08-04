import Counter from '../ItemCount/ItemCount'
import './ItemDetail.css'


const ItemDetail = ({id, title, description, category, price, stock, img}) =>{
    const handleOnAdd = (count) => {
        console.log(`${count} Items agregados satisfactoriamente`)
      }
    return(

    <div className='DetailProduct'>
        <img alt="producto" className='DetailImg' src={img}/>
        <span className='DetailTitle'>{title}</span>
        <span className='DetailCategory'>Categoría: {category}</span>
        <span className='DetailPrice'>${price}</span>
        <span className='DetailDescription'>Descripción: {description}</span>
        <span className='DetailStock'>Stock Disponible: {stock}</span>
        <Counter stock={20} initial={1} onAdd={handleOnAdd}/>
    </div>


    )
}

export default ItemDetail


