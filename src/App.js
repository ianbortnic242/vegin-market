import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom'


function App() {


  return (
    <div className="App">
      <header className="App-header">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<ItemListContainer greeting="¡Bienvenido a Vegin Market, el mejor mercado vegano!"/>}/>
          <Route path='/category/:categoryId' element={<ItemListContainer greeting="Chequea nuestros productos!"/>}/>
          <Route path='/detail/:productId' element={<ItemDetailContainer/>}/>
        </Routes>
      </BrowserRouter>


      </header>
    </div>
  );
}

export default App;
