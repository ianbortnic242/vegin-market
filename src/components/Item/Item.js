import './Item.css'
import {Link} from 'react-router-dom'

const Item = ({id, title, description, category, price, stock, img}) =>{

    return(
        <div className='Product'>
            <img alt="producto" className='Img' src={img}/>
            <span className='Title'>{title}</span>
            <span className='Price'>${price}</span>
            <Link to={`/detail/${id}`}><button className='DescriptionButton'>Detalles</button></Link>
        </div>
    )
}

export default Item