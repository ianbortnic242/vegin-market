import './App.css';
import Footer from './components/main/Footer/Footer'
import Home from './components/main/Home/Home'
import Introduction from './components/main/Categories/Introduction/Introduction'
import {BrowserRouter, Routes, Route} from 'react-router-dom'


function App() {


  return (
    <div className="App">
      <header className="App-header">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/category/Introduccion' element={<Introduction/>}/>
      </Routes>
        <Footer/>
      </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
              