

import {useState} from "react";


function App() {
  
  let cl1 =() => {

    console.log("hello");
  };
  let cl2 =(e) => {
    console.log(e);
  };

  //custom parameter
  let cl3 =(p1) => {
    console.log(p1);
  };

  return (

  
    <div>
      <h1>btn styling </h1>
      <h1>
        <input
        className="btn btn-primary ms-1" type="button" value="cl 1" onClick={cl1}/>
        <input  className="btn btn-success ms-1 " type="button" value="cl 2r" onClick={cl2}/>
        <input   className="btn btn-danger ms-1"type="button" value="danger cl 3"  onClick={() => cl3("danger")}/>
      </h1>
      </div>
      
  );
}

export default App;
