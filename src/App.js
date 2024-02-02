import logo from './logo.svg';
import './App.css';
import Person from './Form.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Person  test="programmer" name age gender telephone type="sk8r boi"/>
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
      </header>
    </div>
  );
}

export default App;
