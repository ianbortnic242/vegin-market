import Item from '../Item/Item'
import './ItemList.css'

const ItemList = ({products}) =>{
    return(
        <div>

            {products.map(item => (
                <Item key={item.id} product={item}/>
            ))}

        </div>
    )
}

export default ItemList