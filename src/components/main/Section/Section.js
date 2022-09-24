import './Section.css'
import {Link} from 'react-router-dom'

const Section = ({color, name, categories}) =>{

    return(
        
            <section className="section">
                <h2 style={{'color': color}}>{name}</h2>
                <div>
                    <div className="container-fluid overflow-scroll">
                        <div className="row d-flex justify-content-around flex-nowrap">
                            {categories.map((category) => (
                                <div className="col-4 row d-flex justify-content-around">
                                    <Link to={`/category/${category.path_name}`} style={{textDecoration:"none"}}>
                                        <div className="card card-block index_topics_size topics no_padding">
                                            <div><img alt='' className="fill_div transition" src={category.img}/></div>
                                        </div>
                                        <div><h1 className="centered_down category_title">{category.name}</h1></div>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

    )
}

export default Section


