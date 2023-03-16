import './App.css';
import Header from './components/main/Header/Header'
import Home from './components/main/Home/Home'
import Introduction from './components/main/Categories/Introduction/Introduction'
import Objection from './components/main/Categories/Objections/Objections'
import ObjectionArticle from './components/main/Categories/Objections/ObjectionsList/Objection/ObjectionArticle/ObjectionArticle'
import Article from './components/main/Categories/Introduction/SubCategoriesList/SubCategory/Article/Article'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'



function App() { 


  return (
    <div className="App">
      <header className="App-header">
      
      <BrowserRouter>
      <ScrollToTop/>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/category/Introduccion' element={<Introduction/>}/>
        <Route path='/articles/:id' element={<Article/>}/>
        <Route path='/category/Objeciones' element={<Objection/>}/>
        <Route path='/objeciones/:id' element={<ObjectionArticle/>}/>
      </Routes>
      </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
              