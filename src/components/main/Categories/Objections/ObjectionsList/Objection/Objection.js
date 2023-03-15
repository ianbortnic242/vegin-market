import './Objection.css'
import {Link} from 'react-router-dom'

const Objection = ({name, img, img_small, text}) =>{

    return(

        <Link to={{pathname: `/objeciones/${name}`}} state={{name: name, img: img, img_small: img_small, text: text}} style={{textDecoration:"none"}}>
            <div className="card card-block border border-0 index_topics_size topics no_padding">
                <div className='bck_color'><img alt='' className="fill_div2 transition" src={img_small}/></div>
            </div>
            <div><h1 className="centered_down category_title2 color_">{name}</h1></div>
        </Link>

    )
}

export default Objection


