import {getDocs, collection, query, where } from "firebase/firestore";
import {db} from './index'


const getData = async (collection_name) => {
    const col = await collection(db, collection_name)
    const collectionData = await getDocs(col)
    return collectionData
}


const getImage = async (img_name) =>{
    const home_doc = query(collection(db, 'images'), where('name', '==', img_name))
    const imgDoc = await getDocs(home_doc)
    const image = imgDoc.docs.map(doc => {
        return {id: doc.id, ...doc.data()}
    })
    return image[0].img
}


const getCategories = async () => {
    const sections = await getData("sections")
    const categories = await getData("categories_vegin")

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

    return sections_with_categories
}



const getArticles = async () => {

    const subcategories = await getData("subcategories")
    const articles = await getData("articles")

    const subcategories_with_articles = []

    subcategories.forEach((subcategory)=>{
        const subcategory_data = subcategory.data()
        const related_articles = []
        articles.forEach((art)=>{
            const art_data = art.data()
            if(art_data.subcategory_id===subcategory_data.id){
                related_articles.push(art_data)  
            }
        })
        subcategories_with_articles.push({'id': subcategory_data.id, 'name': subcategory_data.name, 'related_articles': related_articles, 'color': subcategory_data.color})
    })
    const items = subcategories_with_articles.map(
        (element) => { return [element, element['id']] });
      
    items.sort(
    (first, second) => { return first[1] - second[1] }
    );
    
    const sorted_subcategories = items.map(
        (e) => { return e[0] });

    console.log(sorted_subcategories)
    return sorted_subcategories

}


const getObjections = async () => {
    const objectionsData = await getData("objeciones")
    const objections = objectionsData.docs.map(doc => {
        return doc.data()
    })
    return objections
}


export {getImage, getCategories, getArticles, getObjections}