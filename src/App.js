import logo from './logo.svg';
import './App.css';
import Saludar from './components/ComponentsPure/pure';
import TaskList from './components/ComponentsPure/container/tasklist';
import Ejemplo from './hooks/ejemplo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Saludar name="fede"></Saludar> */}
        {/* <TaskList></TaskList> */}
        <Ejemplo></Ejemplo>
      </header>
    </div>
  );
}

export default App;
