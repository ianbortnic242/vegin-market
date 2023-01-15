import { useState } from "react";
import {useParams} from "react-router-dom";
import './Article.css'

const Article = () => {
    // We can use the `useParams` hook here to access
    // the dynamic pieces of the URL.
    let { id } = useParams();

    const home_img = "https://www.w3schools.com/images/picture.jpg"

    const texto = "woubcvwoeuvbwrouubcvwoeuvbwrouweofnweoucbwouvcbw /nwoubcvwoeuvbwrouweofnweoucbwouvcbw /nwoubcvwoeuvbwrouweofnweoucbwouvcbw /nbwoubcvwoeuvbwrouweofnweoucbwouvcbw /nwoubcvwoeuvbwrouweofnweoucbwouvcbw /nwoubcvwoeuvbwrouweofnweoucbwouvcbw /nwoubcvwoeuvbwrouweofnweoucbwouvcbw /nwoubcvwoeuvbwrouweofnweoucbwouvcbw /nwoubcvwoeuvbwrouweofnweoucbwouvcbw /nwoubcvwoeuvbwrouweofnweoucbwouvcbw /nwoubcvwoeuvbwrouweofnweoucbwouvcbw /nbwoubcvwoeuvbwrouweofnweoucbwouvcbw /nwoubcvwoeuvbwrouweofnweoucbwouvcbw /nwoubcvwoeuvbwrouweofnweoucbwouvcbw /nwoubcvwoeuvbwrouweofnweoucbwouvcbw /nwoubcvwoeuvbwrouweofnweoucbwouvcbw /nwoubcvwoeuvbwrouweofnweoucbwouvcbw /nwoubcvwoeuvbwrouweofnweoucbwouvcbw /nwoubcvwoeuvbwrouweofnweoucbwouvcbw /nbwoubcvwoeuvbwrouweofnweoucbwouvcbw /nwoubcvwoeuvbwrouweofnweoucbwouvcbw /nwoubcvwoeuvbwrouweofnweoucbwouvcbw /nwoubcvwoeuvbwrouweofnweoucbwouvcbw /nwoubcvwoeuvbwrouweofnweoucbwouvcbw /nwoubcvwoeuvbwrouweofnweoucbwouvcbw /nwoubcvwoeuvbwrouweofnweoucbwouvcbw /nwoubcvwoeuvbwrouweofnweoucbwouvcbw /nb"

    const ReadMoreReadLess = (children) => {

      const [isReadMoreShown, SetReadMoreSHown] = useState(false)

      const toggleBtn = () => {
        SetReadMoreSHown(prevState => !prevState)

      }

      return (
        <p>
          {isReadMoreShown ? children : children.substring(0, 200)}<br/>
          {children.length>200 ? <button className="btn_read_more_read_less" onClick={toggleBtn}>{isReadMoreShown? 'Leer Menos': 'Leer Mas...'}</button> : null}
        </p>
      )
    }

  
    return (
      

      <div className='container_box'>
        <div><img alt='' className="box" src = {home_img}/></div>
        <div className='box_2 stack-top main_div bk_color wow'>
          <h2>¿Por que veganismo?</h2> <br/>
          <p>{ReadMoreReadLess(texto)}</p>


        </div>
        
      </div>
    );
  }

export default Article;