import logo from './logo.svg';
import './App.css';

import PersonList from "./components/PersonList.jsx"
import GrupoBotones from "./components/GrupoBotones.jsx"
import Acordeon from "./components/Acordeon.jsx"
import EjemploCards1 from "./components/EjemploCards1.jsx"
import EjemploCards2 from "./components/EjemploCards2.jsx"


function App() {
  return (
    <div className="App">    
      <PersonList />
      <div style={{ height: '90px' }}></div>  {/* Espacio vertical (no Reactstrap) */}
      <GrupoBotones />
      <div style={{ height: '90px' }}></div>  {/* Espacio vertical (no Reactstrap) */}      
      <Acordeon />
      <div style={{ height: '90px' }}></div>  {/* Espacio vertical (no Reactstrap) */}
      <EjemploCards1 />
      <div style={{ height: '90px' }}></div>  {/* Espacio vertical (no Reactstrap) */}
      <EjemploCards2 />
      <div style={{ height: '90px' }}></div>  {/* Espacio vertical (no Reactstrap) */}
    </div>
  );
}

export default App;
