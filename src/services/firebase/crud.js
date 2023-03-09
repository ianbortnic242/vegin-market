import {getDocs, collection, query, where } from "firebase/firestore";
import {db} from './index'


const getImage = async (img_name) =>{
    const home_doc = query(collection(db, 'images'), where('name', '==', img_name))
    const imgDoc = await getDocs(home_doc)
    const image = imgDoc.docs.map(doc => {
        return {id: doc.id, ...doc.data()}
    })
    return image[0].img
}

const getSections = async () => {
    const sectionsCollection = collection(db, "sections")
    const sections = await getDocs(sectionsCollection)
    return sections
}

const getCategories = async () => {
    const sections = await getSections()

    const collectionRef = collection(db, "categories_vegin");
    const categories = await getDocs(collectionRef)

    const sections_with_categories = []

    sections.forEach((section)=>{
        const section_data = section.data()
        const related_categories = []
        categories.forEach((cat)=>{
            const cat_data = cat.data()
            if(cat_data.section_id===section_data.id){
                related_categories.push(cat_data)  
            }
        })
        sections_with_categories.push(
            {
                'name': section_data.name,
                'categories': related_categories,
                'color': section_data.color
            }
        )
    })
    console.log(sections_with_categories)

    return sections_with_categories
}

export {getImage, getCategories}