import './App.css';
import Footer from './components/main/Footer/Footer'
import Home from './components/main/Home/Home'
import Introduction from './components/main/Categories/Introduction/Introduction'
import Objection from './components/main/Categories/Objection/Objection'
import Article from './components/main/Categories/Introduction/SubCategory/Article/Article'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'



function App() { 


  return (
    <div className="App">
      <header className="App-header">
      
      <BrowserRouter>
      <ScrollToTop/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/category/Introduccion' element={<Introduction/>}/>
        <Route path='/category/Objeciones' element={<Objection/>}/>
        <Route path='/articles/:id' element={<Article/>}/>
      </Routes>
        <Footer/>
      </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
              