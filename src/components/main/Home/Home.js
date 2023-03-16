import './Home.css'
import SectionList from './SectionList/SectionList'
import {useState, useEffect} from "react"
import {getImage, getCategories} from '../../../services/firebase/crud'

const Home = () => {
    const [home_img, setHomeImg] = useState([])
    const [sections, setSections] = useState([])

    useEffect(()=>{
        const fetchData = async () => {
            const img = await getImage('home_background')
            setHomeImg(img)
            const categories = await getCategories()
            setSections(categories)
        }
        fetchData()
        }
    ,[])


    return (
        <div className='container_box'>
            <div><img alt='' className="box" src = {home_img}/></div>
            <div className='box stack-top main_div'>
                <p className='comenzar'>Escoge un tema para comenzar!</p>
                <SectionList sections={sections}/>
                <div className='spacing_footer'></div>
            </div>
        </div>
)}

export default Home

