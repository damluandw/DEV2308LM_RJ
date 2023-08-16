import logo from './logo.svg';
import './App.css';
import FunctionDemo from './components/FunctionDemo';
import ClassDemo from './components/ClassDemo';
import JSXEpresstion from './components/JSXEpresstion';
import Member from './components/Member';
import JSXElementObjectDemo from './components/JSXElementObjectDemo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <JSXEpresstion/>
        <FunctionDemo></FunctionDemo>
        <ClassDemo name ="Dam Luan" age ="27"></ClassDemo>
        <Member name ="Dam Luan" age ="27" company ="Devmaster"></Member>
        {/* <Member></Member> */}
        <JSXElementObjectDemo/>
        <div id="root"></div>
      </header>
    </div>
  );
}

export default App;
