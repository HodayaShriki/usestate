
import './App.css';
import Counter from './Counter';
import {useState} from 'react';

function App() {
  
  const [delta, setDelta] = useState(1)
  const [max, setMax] = useState(1)
  const [reset, setReset] = useState(false)
  const [maxValue, setMaxCount] = useState(1)
  

  function handleDelta(e){
    setDelta(Number(e.target.value))
  }

  function handleMax(e){
    setMax(Number(e.target.value))
  }

  function getMaxCount (data){
    console.log (data)
    setMaxCount(Number(data))

  }

  function getReset (data){
    console.log (data)
    setReset(data)
  }

  return (
    <div className="App">
      Usestate
      <h3> Delta: </h3>
      <input type = "number" value = {delta} onChange ={handleDelta}/>
      <h3> The max counter value - {maxValue}</h3>
      <h3> Max: </h3>
      <h5> Set the maximum counter value:</h5>
      <input type = "number" value = {max} onChange ={handleMax}/>
    
      <Counter delta = {delta}  getReset = {getReset} needToReset = {reset} max = {max} getMaxCount={getMaxCount} maxValue={maxValue}/>
      <Counter delta = {delta}  getReset = {getReset} needToReset = {reset} max = {max} getMaxCount={getMaxCount} maxValue={maxValue}/>
    </div>
  );
}

export default App;
