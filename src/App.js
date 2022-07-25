import './App.css';
import Navbar from './components/Navbar/Navbar';
import Counter from './components/ItemCount/ItemCount';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';



function App() {

  const handleOnAdd = (count) => {
    console.log(`${count} Items agregados satisfactoriamente`)
  }


  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        <Counter stock={20} initial={1} onAdd={handleOnAdd}/>
        <ItemListContainer greeting="¡Bienvenido a Vegin Market, el mejor mercado vegano!"/>

      </header>
    </div>
  );
}

export default App;
