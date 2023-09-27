import './App.css';
import DemoUseState from './components/DemoUseState';
import DemoUseEffect from './components/DemoUseEffect';
import DemoContext from './components/DemoContext';
import DemoUseCallback from './components/DemoUseCallback';
import ListCategory from './components/ListCategory';
import DemoUseRef from './components/DemoUseRef';

function App() {
  return (
    <div className='container'>
      <img src='https://devmaster.edu.vn/images/logo.png' alt='devmaster academy' />
      <hr />
      <DemoUseState />
      <DemoUseEffect />
      <DemoContext />
      <DemoUseCallback />
      <DemoUseRef/>
      <ListCategory />

    </div>
  );
}

export default App;
