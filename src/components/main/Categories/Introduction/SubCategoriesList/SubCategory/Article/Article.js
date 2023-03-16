import {useLocation} from "react-router-dom";
import './Article.css'


const Article = () => { 

    const location = useLocation()
    const {name, img, text, color} = location.state
    const modified_text = text
  
    return (
      

      <div>
        <div><img alt='' className="box_2" src = {img}/></div>
        <div style={{'background-color': color}} className='wow'>
          <div className="hjo">
            <h2>{name}</h2><br/>
            <div className="texto" dangerouslySetInnerHTML={{__html: modified_text}}/>
          </div>
        </div>
      </div>
    );
  }

export default Article;