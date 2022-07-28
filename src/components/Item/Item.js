import './Item.css'

const Item = ({product}) =>{

    return(
        <div className='Product'>
            <img alt="producto" className='Img' src={product.img}/>
            <span className='Title' key={product.id} >{product.title}</span>
            <span className='Price' key={product.id} >{product.price}</span>
            <button className='DescriptionButton' key={product.id}>Detalles</button>
        </div>
    )
}

export default Item