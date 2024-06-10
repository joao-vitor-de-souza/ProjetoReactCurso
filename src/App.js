import './App.css';
import HelloWord from './componentes/HelloWord_01';
import SayMyName from './componentes/SayMyName';

const name = "Maria"

function App() {
  return (
    <div className="App">
      <HelloWord/>
      <SayMyName nome="Matheus" /> 
      <SayMyName nome={name} /> 

    </div>
  );
}

export default App;
