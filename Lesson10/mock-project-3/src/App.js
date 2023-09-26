import logo from './logo.svg';
import './App.css';
import Title from './components/Title';
import Control from './components/Control';
import Form from './components/Form';
import ListTask from './components/ListTask';

function App() {
  return (
    <div className="container">
      <Title/>
      <Control/>
      <Form/>
      <ListTask/>
    </div>
  );
}

export default App;
