
//import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./components/layout/Main";
import Nosotros from "./components/layout/Nosotros";
import Servicio from "./components/layout/Servicio";
import Contacto from "./components/layout/Contacto";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/Nosotros" element={<Nosotros />} />
          <Route path="/Servicio" element={<Servicio />} />
          <Route path="/Contacto" element={<Contacto />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

