import logo from './logo.svg';
import './App.css';

function App() {

  const nodoJs= (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Bienvenidos a la clase 1</h2>
        
      </header>
    </div>
  );
 
  console.log(nodoJs);
  
  return nodoJs;
}

export default App;

