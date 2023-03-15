import Objection from './Objection/Objection'
import './ObjectionList.css'

const ObjectionList = ({objections}) =>{
    return(
        <section>
            <div className="container-fluid overflow-auto">
                <div className='cochin'>
                    <div className="row d-flex">
                        {objections.map((objection) => (
                            <div className="col-6 samm">
                                    <Objection {...objection}/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ObjectionList