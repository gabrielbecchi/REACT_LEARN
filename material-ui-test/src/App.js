import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Header } from './components'
import { BuscarClientes } from './containers'

function App() {
  console.log("Rendering");
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/buscar-clientes" element={ <BuscarClientes/> }></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
