import logo from './logo.svg';
import './App.css';
import { ReactNotifications } from 'react-notifications-component';
import { BrowserRouter } from 'react-router-dom';
import Header from './componnents/Header';

function App() {
  return (
    <>
     <div className="app-container">
        <ReactNotifications />
      </div>

      <BrowserRouter>
        <Header/>
      </BrowserRouter>
    </>
  );
}

export default App;
