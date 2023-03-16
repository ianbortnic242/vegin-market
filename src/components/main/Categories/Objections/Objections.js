import './Objections.css'
import ObjectionList from './ObjectionsList/ObjectionList'
import {useState, useEffect} from "react"
import {Link} from 'react-router-dom'
import {getObjections} from '../../../../services/firebase/crud'

const Objection = () => {


    const [isSuggestions, SetSuggestions] = useState(true)
    const [objections, setObjections] = useState([])
    const [recommendedObjections, setrecommendedObjections] = useState([])

    useEffect(() => {

        const fetchData = async () => {
            const objections = await getObjections()
            const recommendedObjections = await objections.filter(objection => objection.recommended === true)
            setObjections(objections)
            setrecommendedObjections(recommendedObjections)
        }
        fetchData()
        }
    ,[])
    

    const suggButton = () => {
        SetSuggestions(prevState => !prevState)
    }

    return(
        <div className='obj'>
            <div>
                <h1 className='font_1_'>Objeciones</h1>
                <p className='font_2_'>¿Te has preguntado si los veganos toman medicamentos probados en animales? ¿O si consumen aceite de palma? En esta sección encontrarás reflexiones sobre temas complejos dentro del veganismo.</p>
                <div className='inline'>
                    <button style={{fontWeight: isSuggestions ? "bold": "normal"}} className="button_1" onClick={suggButton}>Sugerencias</button>
                    <button className="button_2">&#124; </button>
                    <button style={{fontWeight: !isSuggestions ? "bold": "normal"}} className="button_3" onClick={suggButton}>Listado</button>
                </div>
                <div style={{display: isSuggestions ? "block": "none"}}>
                    <ObjectionList objections={recommendedObjections}/>
                </div>
                <div style={{display: !isSuggestions ? "block": "none"}}>
                    <div className='list_style'>
                        <ul>
                            {objections.map((objection) => (
                                <Link to={{pathname: `/objeciones/${objection.name}`}} state={{name: objection.name, img: objection.img, img_small: objection.img_small, text: objection.text}} style={{textDecoration:"none"}}>
                                    <li>{objection.name}</li>
                                </Link>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        <div className='spacing_footer'></div>
        </div>
    )
}

export default Objection