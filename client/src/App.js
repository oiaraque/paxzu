import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Detalle from './components/Detalle';
import Planetas from './components/Planetas';
import Header from './components/Header';


function App() {
  return (
    <div>
      <Header />
      <div className="container mt-3">
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route path='/detalle' element={<Detalle/>} />
          <Route path='/planetas' element={<Planetas/>} />
        </Routes>
      </div>      
    </div>
  );
}

export default App;
