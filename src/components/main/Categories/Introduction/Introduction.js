import './Introduction.css'
import SubCategoriesList from './SubCategoriesList/SubCategoriesList'
import {useState, useEffect} from "react"
import {getArticles} from '../../../../services/firebase/crud'

const Introduction = () => {

    const [subcategories_with_articles, setSubCategoriesWithArticles] = useState([])

    useEffect(() => {

        const fetchData = async () => {
            const subcategories_with_articles = await getArticles()
            setSubCategoriesWithArticles(subcategories_with_articles)
        }
        fetchData()
        }
    ,[])


    return(
        <div>
            <div className='ianbo'>
                <p className='font_1'>Introducción</p>
                <p className='font_2'>Selecciona un contenido para más información</p>
            </div>
            <SubCategoriesList subcategories={subcategories_with_articles}/>
            <div className='spacing_footer'></div>
        </div>
    )
}

export default Introduction