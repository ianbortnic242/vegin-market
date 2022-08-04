import Item from '../Item/Item'

const ItemList = ({products}) =>{
    return(
        <div>

            {products.map(product => (
                <Item {...product}/>
            ))}

        </div>
    )
}

export default ItemList