import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget';
import {Link} from 'react-router-dom'
import {useState, useEffect} from "react"
import {getDocs, collection} from "firebase/firestore";
import {db} from '../../services/firebase/index'


const Navbar = () => {


    const [categories, setCategories] = useState([]);


    useEffect(() => {
    const collectionRef = collection(db, "categories");
    getDocs(collectionRef).then((response) => {
        const categories = []
        response.docs.forEach((category) => {
        categories.push(category.data().description);
        })
        return categories;

    }).then((categories) =>{
        setCategories(categories)}).catch(err =>{
            console.log(err)
          })

    },[])




    return (

        <nav className="navbar sticky-top navbar-expand-lg navbar-dark background">
        <div className="container-fluid">
        <a href=" "><Link to='/'><img src='/img/logo.png' height="80px" alt="logo"/></Link></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">

            <ul className="navbar-nav navbar-custom">
                {categories.map((category) => (<li className="nav-item"><a className="nav-link not_selected" href=" "><Link to={`/category/${category}`}>{category}</Link></a></li>))}
            </ul>
            <CartWidget/>
        </div>
        </div>

        </nav>
    )
}



export default Navbar