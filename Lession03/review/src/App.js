import logo from './logo.svg';
import './App.css';
import FuncComp from './components/FuncComp';
import ClassComp from './components/ClassComp';

function App() {
  return (
    <div className ="container border my-5">
      <h1>Review </h1>
      <img src="https://devmaster.edu.vn/images/logo.png" alt ="devmaster"/>
      {/* function component */}
      <FuncComp name = "DamLuan" age ="27"/>
      {/* Class Component */}
      <ClassComp/>
      <ClassComp name = "DamLuan" age ="27"/>
    </div>
  );
}

export default App;
