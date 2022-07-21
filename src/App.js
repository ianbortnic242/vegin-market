import './App.css';
import Navbar from './components/Navbar/Navbar';
// import Counter from './components/Counter/Counter';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        {/* <Counter/> */}
        <ItemListContainer greeting="¡Bienvenido a Vegin Market, el mejor mercado vegano!"/>

      </header>
    </div>
  );
}

export default App;
