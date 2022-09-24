import './App.css';
import Footer from './components/main/Footer/Footer'
import Home from './components/main/Home/Home'
import Introduction from './components/main/Categories/Introduction/Introduction'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { CartContextProvider } from './context/CartContext';


function App() {


  return (
    <div className="App">
      <CartContextProvider>
      <header className="App-header">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/category/Introduccion' element={<Introduction/>}/>
      </Routes>
        <Footer/>
      </BrowserRouter>
      </header>
      </CartContextProvider>

    </div>
  );
}

export default App;
              