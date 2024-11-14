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
  const [colour, setcolour] = useState("olive");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: colour }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-centern gap-3  shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button onClick={()=>setcolour("red")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>

          <button onClick={()=>setcolour("green")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>
          <button onClick={()=>setcolour("blue")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "blue" }}
          >
            blue
          </button>
          <button onClick={()=>setcolour("violet")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "violet" }}
          >
            Red
          </button>
          <button onClick={()=>setcolour("orange")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "orange" }}
          >
            Red
          </button>
          <button onClick={()=>setcolour("black")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "black" }}
          >
            Red
          </button>
          <button onClick={()=>setcolour("darkgreen")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "darkgreen" }}
          >
            Red
          </button>
          <button onClick={()=>setcolour("purple")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "purple" }}
          >
            Red
          </button>
          <button onClick={()=>setcolour("brown")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "brown" }}
          >
            Red
          </button>
          <button onClick={()=>setcolour("white")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "white" }}
          >
            Red
          </button>
          <button onClick={()=>setcolour("olive")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "olive" }}
          >
            Red
          </button>
          <button onClick={()=>setcolour("pink")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "pink" }}
          >
            Red
          </button>
          <button onClick={()=>setcolour("yellow")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "yellow" }}
          >
            Red
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
