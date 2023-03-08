import './SubCategory.css'
import {Link} from 'react-router-dom'

const SubCategory = ({name, subcategories, color}) =>{

    return(
        
            <section className="section2">
                <h2 style={{'color': color}}>{name}</h2>
                <div>
                    <div className="container-fluid overflow-auto">
                        <div className="row d-flex justify-content-around flex-nowrap">
                            {subcategories.map((article) => (
                                <div className="col-4 row d-flex justify-content-around justify-content-center">
                                    <Link to={{pathname: `/articles/${article.name}`}} state={{name: article.name, img: article.img, color: article.color, text: article.text}} style={{textDecoration:"none"}}>
                                        <div className="card card-block border border-0 index_topics_size topics no_padding">
                                            <div><img alt='' className="fill_div2 transition" src={article.img_small}/></div>
                                        </div>
                                        <div><h1 className="centered_down category_title2">{article.name}</h1></div>
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


