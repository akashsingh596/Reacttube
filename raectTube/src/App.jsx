import { useState } from "react";

function App() {
  
let [counter,setcounter] = useState(0)


let removeCounter =()=>{
  setcounter(counter-1)
}

let addCounter =()=>{
  setcounter(counter+1)
}
  return (
    <>
      <h1>Hello I am AKASH SINGH</h1>
      <h2>Counter</h2>
      <h3>{counter}</h3>
      <button onClick={addCounter}>add</button>
      <button onClick={removeCounter}>remove</button>
    </>
  );
}

export default App;
