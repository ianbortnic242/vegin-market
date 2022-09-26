import './Introduction.css'
import SubCategoriesList from './SubCategoriesList/SubCategoriesList'
import {useState, useEffect} from "react"
import {getDocs, collection} from "firebase/firestore";
import {db} from '../../../../services/firebase/index'

const Introduction = () =>{

    const [subcategories, setSubCategories] = useState([])


    useEffect(() => {
        const collectionRef = collection(db, "articles");
        getDocs(collectionRef).then((response) => {
            const lo_basico = []
            const conceptos = []
            const autores = []
            response.docs.forEach((article) => {
                const data = article.data()
                if(data.subcategory==='Lo Básico'){
                    lo_basico.push(data);
                }
                if(data.subcategory==='Conceptos'){
                    conceptos.push(data);
                }
                if(data.subcategory==='Autores'){
                    autores.push(data);
                }
            })
            return [lo_basico, conceptos, autores];
        }).then((subcategories) =>{
            setSubCategories([{'name':"Lo Básico", 'subcategories': subcategories[0], 'color': '#72D3AD'},{'name':"Conceptos", 'subcategories': subcategories[1], 'color': '#2D9E8A'}, {'name':"Autores", 'subcategories': subcategories[2], 'color': '#A7C698'}])
        }).catch(err =>{
                console.log(err)
            })
    },[])



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