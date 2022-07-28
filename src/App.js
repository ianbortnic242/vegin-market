import './App.css';
import Navbar from './components/Navbar/Navbar';
import Counter from './components/ItemCount/ItemCount';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';



function App() {


  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        <ItemListContainer greeting="¡Bienvenido a Vegin Market, el mejor mercado vegano!"/>

      </header>
    </div>
  );
}

export default App;
