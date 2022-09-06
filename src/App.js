import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart'
import Checkout from './components/Checkout/Checkout'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { CartContextProvider } from './context/CartContext';


function App() {


  return (
    <div className="App">
      <CartContextProvider>
      <header className="App-header">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<ItemListContainer greeting="¡Bienvenido a Vegin Market, el mejor mercado vegano!"/>}/>
          <Route path='/category/:categoryId' element={<ItemListContainer greeting="Chequea nuestros productos!"/>}/>
          <Route path='/detail/:productId' element={<ItemDetailContainer/>}/>
          <Route path='/cart' element={<Cart/>} />
          <Route path='/checkout' element={<Checkout/>} />
        </Routes>
      </BrowserRouter>
      </header>
      </CartContextProvider>

    </div>
  );
}

export default App;
              