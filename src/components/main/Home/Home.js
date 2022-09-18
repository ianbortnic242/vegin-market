import './Home.css'
import {Link} from 'react-router-dom'
import {useState, useEffect} from "react"
import {getDocs, collection, query, where } from "firebase/firestore";
import {db} from '../../../services/firebase/index'


const Home = () => {


    const [home_img, setHomeImg] = useState([])
    const [sections, setSections] = useState([])


    useEffect(()=>{

        const home_doc = query(collection(db, 'images'), where('name', '==', 'home_background'))
        getDocs(home_doc).then(response => {
            const home_doc = response.docs.map(doc => {
                return {id: doc.id, ...doc.data()}
            })
            setHomeImg(home_doc[0].img)
        })}
    ,[])

    useEffect(() => {
        const collectionRef = collection(db, "categories_vegin");
        getDocs(collectionRef).then((response) => {
            const aprender_categories = []
            const actuar_categories = []
            response.docs.forEach((category) => {
                const data = category.data()
                if(data.section==='Aprender'){
                    aprender_categories.push(data);
                }
                if(data.section==='Actuar'){
                    actuar_categories.push(data);
                }
            })
            return [aprender_categories, actuar_categories];
        }).then((categories) =>{
            setSections([{'name':"Aprender", 'categories': categories[0], 'color': '#72D3AD'},{'name':"Actuar", 'categories': categories[1], 'color': '#2D9E8A'}])
        }).catch(err =>{
                console.log(err)
            })
    },[])



    return (
        <div className='container_box'>
            <div><img className="box" src = {home_img}/></div>
            <div className='box stack-top main_div'>
                <p>Escoge un tema para comenzar!</p>

                {sections.map((section) => (
                    <section className="section">
                        <h2 style={{'color': section['color']}}>{section['name']}</h2>
                        <div>
                            <div className="container-fluid overflow-scroll">
                                <div className="row d-flex justify-content-around flex-nowrap">
                                    {section['categories'].map((category) => (
                                        <div className="col-4 row d-flex justify-content-around">
                                            <div className="card card-block index_topics_size topics no_padding">
                                                <div><img className="fill_div transition" src={category.img}/></div>
                                            </div>
                                            <div><h1 className="centered_down category_title">{category.name}</h1></div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>
                ))}
            </div>
        </div>
)}

export default Home

