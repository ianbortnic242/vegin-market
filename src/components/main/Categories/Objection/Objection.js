import './Objection.css'
import {useState} from "react"
// import {getDocs, collection} from "firebase/firestore";
// import {db} from '../../../../services/firebase/index'

const Objection = () => {


    const [isSuggestions, SetSuggestions] = useState(true)
    

    const suggButton = () => {
    SetSuggestions(prevState => !prevState)

    }

    const ianbo = 1

    return(
        <div className='obj'>
            <div >
                <h1 className='font_1_'>Objeciones</h1>
                <p className='font_2_'>¿Te has preguntado si los veganos toman medicamentos probados en animales? ¿O si consumen aceite de palma? En esta sección encontrarás reflexiones sobre temas complejos dentro del veganismo.</p>
                <div className='inline'>
                    <button style={{fontWeight: isSuggestions ? "bold": "normal"}} className="button_1" onClick={suggButton}>Sugerencias</button>
                    <button className="button_2">&#124; </button>
                    <button style={{fontWeight: !isSuggestions ? "bold": "normal"}} className="button_3" onClick={suggButton}>Listado</button>
                </div>
                <div style={{display: isSuggestions ? "block": "none"}}>
                    <img className="x" src="https://i.guim.co.uk/img/media/693da12bc9c240bbea26f571c2a65700d177df83/0_153_3600_2160/master/3600.jpg?width=620&quality=45&dpr=2&s=none"></img>
                </div>
                <div style={{display: !isSuggestions ? "block": "none"}}>
                    <img className="x" src="https://cdn2.img.sputniknews.lat/img/106026/91/1060269145_0:0:2048:1364_1440x900_80_0_1_4d26ab5b9a36dcb1c9e203eb51e5fee1.png.webp?source-sid=cc_by_20"></img>
                </div>

            </div>

        </div>
    )
}

export default Objection