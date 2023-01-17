import SubCategory from '../SubCategory/SubCategory'

const SubCategoriesList = ({subcategories}) =>{

    return(
        <div>
            {subcategories.map((subcategory) => (
                <SubCategory {...subcategory}/>
            ))}
        </div>
    )
}

export default SubCategoriesList