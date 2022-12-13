import './SubCategory.css'
import {Link} from 'react-router-dom'

const SubCategory = ({color, name, subcategories}) =>{

    return(
        
            <section className="section2">
                <h2 style={{'color': color}}>{name}</h2>
                <div>
                    <div className="container-fluid overflow-scroll">
                        <div className="row d-flex justify-content-around flex-nowrap">
                            {subcategories.map((subcategory) => (
                                <div className="col-4 row d-flex justify-content-around justify-content-center">
                                    <Link to={`/subcategory/2`} style={{textDecoration:"none"}}>
                                        <div className="card card-block border border-0 index_topics_size topics no_padding">
                                            <div><img alt='' className="fill_div2 transition" src={subcategory.img}/></div>
                                        </div>
                                        <div><h1 className="centered_down category_title2">{subcategory.name}</h1></div>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

    )
}

export default SubCategory


