import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Menu from './components/Menu';
import Catalog from './components/Catalog';
import Kid from './components/Kid';
import Web from './components/Web';
import Mobile from './components/Mobile';

function App() {
  return (
    <div className="container border">
      <h1 className="text-algin-center"> Devmaster - Demo ReactJS Router</h1>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/catalog' element={<Catalog />}>
            {/* Nested Router*/}
            <Route path='kid' element={<Kid />} />
            <Route path='web' element={<Web />} />
            <Route path='mobile' element={<Mobile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
