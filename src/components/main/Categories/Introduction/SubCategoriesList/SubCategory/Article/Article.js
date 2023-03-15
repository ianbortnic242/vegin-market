// import { useState } from "react";
import {useLocation} from "react-router-dom";
import ReactMarkdown from "react-markdown"
import {useState, useEffect} from "react"
import './Article.css'
import post from './texto.md'

const Article = () => { 

    const location = useLocation()
    const {name, img, text, color} = location.state
    console.log(text)

    const [readable, setreadable] = useState('')

    useEffect(() => {

        const fetchData = async () => {
          const hh = await fetch(post)
          const hhh = await hh.text()
          setreadable(hhh)
        }
        fetchData()
        }
    ,[])

  
    return (
      

      <div>
        <div><img alt='' className="box_2" src = {img}/></div>
        <div style={{'background-color': color}} className='wow'>
          <h2 className="ianboo">{name}</h2> <br/>
          <h2>hola chao</h2>
          <img alt='' src={text}/>
          <div className="texto"><ReactMarkdown children={readable}/></div>
          

        </div>
        
      </div>
    );
  }

export default Article;