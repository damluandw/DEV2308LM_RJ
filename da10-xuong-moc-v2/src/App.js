import logo from './logo.svg';
import './App.css';
import { ReactNotifications } from 'react-notifications-component';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Header from './componnents/Header';
import Index from './componnents/Index';
import Footer from './componnents/Footer';
import PageListProduct from './componnents/PageListProduct';

function App() {
  return (
    <>
     <div className="app-container">
        <ReactNotifications />
      </div>

      <BrowserRouter>
        <Header/>
        <div className="fix-header"></div>
        <Routes>
        <Route path='/' element= {<Index/>}/>
          <Route path='/home' element= {<Index/>}/>
          <Route path='/products' element= {<PageListProduct/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
} 

export default App;
