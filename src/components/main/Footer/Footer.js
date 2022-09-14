import './Footer.css'
import {Link} from 'react-router-dom'
import {useState, useEffect} from "react"
import {getDocs, collection, query, where } from "firebase/firestore";
import {db} from '../../../services/firebase/index'


const Footer = () => {

    const [menu_icon, setMenuIcon] = useState([])

    useEffect(()=>{

        const menu = query(collection(db, 'icons'), where('name', '==', 'menu'))
        getDocs(menu).then(response => {
            const menu_doc = response.docs.map(doc => {
                return {id: doc.id, ...doc.data()}
            })
            setMenuIcon(menu_doc[0].img)
        })}
    ,[])

    
    return (
    <footer className="resize_social_media">
        <div><Link to='/'><img src={menu_icon}/></Link></div>
    </footer>
    )
}

export default Footer