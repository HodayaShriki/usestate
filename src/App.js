
import './App.css';
import Counter from './Counter';
import { useState} from 'react';

function App() {
  
  const [delta, setDelta] = useState(1)
  const [max, setMax] = useState(1)
  const [maxValue, setMaxValue] = useState (1)
  const [reset, setReset] = useState(false)

  function handleDelta(e){
    setDelta(Number(e.target.value))
  }

  function handleMax(e){
    setMax(Number(e.target.value))
    if ((Number(e.target.value)) > maxValue)
      setMaxValue(Number(e.target.value))
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
      <h5> Maximum value: {maxValue} </h5>
      <h3> Max: </h3>
      <h5> Set the maximum counter value:</h5>
      <input type = "number" value = {max} onChange ={handleMax} />
      <Counter delta = {delta} max = {max} getReset = {getReset} needToReset = {reset}/>
      <Counter delta = {delta} max = {max} getReset = {getReset} needToReset = {reset}/>
    </div>
  );
}

export default App;
