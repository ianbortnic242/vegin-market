// import { useState } from "react";
import {useLocation} from "react-router-dom";
import ReactMarkdown from "react-markdown"
import './ObjectionArticle.css'

const ObjectionArticle = () => {
    // We can use the `useParams` hook here to access
    // the dynamic pieces of the URL.

    const location = useLocation()
    const {name, img, text} = location.state

    console.log(name)
  
    return (
      

      <div>
        <div><img alt='' className="box_2" src = {img}/></div>
        <div className='wow'>
          <h2 className="colorsin">{name}</h2> <br/>
          <div className="texto"><ReactMarkdown children={text}/></div>
          

        </div>
        
      </div>
    );
  }

export default ObjectionArticle;