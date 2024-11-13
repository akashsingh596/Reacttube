// import { useState } from "react";

// function App() {
  
// let [counter,setcounter] = useState(0)


// let removeCounter =()=>{
//   setcounter(counter-1)
// }

// let addCounter =()=>{
//   setcounter(counter+1)
// }
//   return (
//     <>
//       <h1>Hello I am AKASH SINGH</h1>
//       <h2>Counter</h2>
//       <h3>{counter}</h3>
//       <button onClick={addCounter}>add</button>
//       <button onClick={removeCounter}>remove</button>
     
//     </>
//   );
// }

// export default App;



import { useState } from "react";


function App() {
const [colour , setcolour] = useState("Olive")
  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ background: colour }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div ClassName="flex flex-wrap justify-center gap-3 shadow-lg bg-white">
            <button
              ClassName="outline-none px-4 rounded-full"
              style={{ background: "red" }}
            >
              Hello
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
