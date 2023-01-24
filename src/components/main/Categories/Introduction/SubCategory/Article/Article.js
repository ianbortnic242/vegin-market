// import { useState } from "react";
import {useLocation} from "react-router-dom";
import './Article.css'

const Article = () => {
    // We can use the `useParams` hook here to access
    // the dynamic pieces of the URL.

    const location = useLocation()
    const {name, img, text, color} = location.state

    // const ReadMoreReadLess = (children) => {

    //   const [isReadMoreShown, SetReadMoreSHown] = useState(false)
      

    //   const toggleBtn = () => {
    //     SetReadMoreSHown(prevState => !prevState)

    //   }

    //   return (
    //     <p>
    //       {isReadMoreShown ? children : children.substring(0, 200)}<br/>
    //       {children.length>200 ? <button className="btn_read_more_read_less" onClick={toggleBtn}>{isReadMoreShown? 'Leer Menos': 'Leer Mas...'}</button> : null}
    //     </p>
    //   )
    // }
  
    return (
      

      <div>
        <div><img alt='' className="box_2" src = {img}/></div>
        <div style={{'background-color': color}} className='wow'>
          <h2 className="ianboo">{name}</h2> <br/>
          {/* <div>{ReadMoreReadLess(texto )}</div> */}
          <div className="texto" dangerouslySetInnerHTML={{ __html: text}}/>

        </div>
        
      </div>
    );
  }

export default Article;