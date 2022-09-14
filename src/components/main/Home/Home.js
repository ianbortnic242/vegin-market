import './Home.css'
import {Link} from 'react-router-dom'
import {useState, useEffect} from "react"
import {getDocs, collection, query, where } from "firebase/firestore";
import {db} from '../../../services/firebase/index'


const Home = () => {


    const [home_img, setHomeImg] = useState([])

    useEffect(()=>{

        const home_doc = query(collection(db, 'images'), where('name', '==', 'home_background'))
        getDocs(home_doc).then(response => {
            const home_doc = response.docs.map(doc => {
                return {id: doc.id, ...doc.data()}
            })
            setHomeImg(home_doc[0].img)
        })}
    ,[])



    return (

        <div className='container_box'>
            <div><img className="box" src = {home_img}/></div>
            <div className='box stack-top main_div'></div>
        </div>

)}

export default Home

