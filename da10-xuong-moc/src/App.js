// import logo from './logo.svg';
import './App.css';
import Header from "./componnents/Header";
import Footer from "./componnents/Footer";

import Index from './componnents/Index';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Introduce from './componnents/Introduce';
import Contact from './componnents/Contact';
import Products from './componnents/Products';

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        
        <Routes>
          <Route path='/' element={<Index/>} />
          <Route path='/introduce' element={<Introduce/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/products' element={<Products/>} />
        </Routes>
      </BrowserRouter>
      <Footer />
      {/* Thư viện js  */}
    </>
  );
}

export default App;
