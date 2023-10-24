// import logo from './logo.svg';
import './App.css';
import Header from "./componnents/Header";
import Footer from "./componnents/Footer";

import Index from './componnents/Index';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <Index/>
      <BrowserRouter>
        
        <Routes>
          <Route path='/' element={<Index/>} />
          
        </Routes>
      </BrowserRouter>
      <Footer />
      {/* Thư viện js  */}
    </>
  );
}

export default App;
