import './Introduction.css'
import SubCategoriesList from './SubCategoriesList/SubCategoriesList'
import {useState, useEffect} from "react"
import {getDocs, collection} from "firebase/firestore";
import {db} from '../../../../services/firebase/index'

const Introduction = () => {

    const [subcategoriesdata, setSubCategoriesData] = useState([])
    const [articles, setArticles] = useState([])
    const [subcategories, setSubCategories] = useState([])

    useEffect(() => {
        const subcategoriesRef = collection(db, "subcategories");
        getDocs(subcategoriesRef).then((response) => {
            const data = []
            response.docs.forEach((subcategory) => {
                data.push(subcategory.data())
            })
            return data
        }).then((data)=> {
            setSubCategoriesData(data)
        }).then(()=>{

            const articlesRef = collection(db, "articles");
            getDocs(articlesRef).then((response) => {
                const articles = []
                response.docs.forEach((article) => {
                    articles.push(article.data())
                })
                return articles
            }).then((articles)=> {
                setArticles(articles)
            })
        }).then(()=>{
            const subcategories = []
            subcategoriesdata.forEach((data)=>{
                const related_articles = []
                articles.forEach((art)=>{
                    if(art.subcategory===data.name){
                        related_articles.push(art)  
                    }
                })
                subcategories.push({'name': data.name, 'subcategories': related_articles, 'color': data.color})
            })
            return subcategories
        }).then((subcategories)=>{
            setSubCategories(subcategories)
        }) 
    
    },[articles, subcategoriesdata])




    return(
        <div>
            <div className='ianbo'>
                <p className='font_1'>Introducción</p>
                <p className='font_2'>Selecciona un contenido para más información</p>
            </div>
            <SubCategoriesList subcategories={subcategories}/>
            <div className='spacing_footer'></div>
        </div>
    )
}

export default Introduction