import logo from './logo.svg';
import './App.css';
import Saludar from './components/ComponentsPure/pure';
import TaskList from './components/ComponentsPure/container/tasklist';
import Ejemplo from './hooks/ejemplo';
import Ejemplo2 from './hooks/ejemplo2';
import MiComponenteConContexto from './hooks/ejemplo3';
import { Father } from './components/ComponentsPure/container/father';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <Saludar name="fede"></Saludar> */}
        {/* <TaskList></TaskList> */}
        {/* <Ejemplo></Ejemplo> */}
        {/* <Ejemplo2></Ejemplo2> */}
        {/* <MiComponenteConContexto></MiComponenteConContexto> */}
      {/* </header> */}
      <Father></Father>
    </div>
  );
}

export default App;
