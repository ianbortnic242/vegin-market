import Section from './Section/Section'

const SectionList = ({sections}) =>{
    return(
        <div>
            {sections.map((section) => (
                <Section {...section}/>
            ))}
        </div>
    )
}

export default SectionList