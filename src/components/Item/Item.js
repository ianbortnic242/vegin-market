import './Item.css'

const Item = ({product}) =>{

    return(
        <div className='Product'>
            <img alt="producto" className='Img' src={product.img}/>
            <span className='Title'>{product.title}</span>
            <span className='Price'>{product.price}</span>
            <button className='DescriptionButton'>Detalles</button>
        </div>
    )
}

export default Item