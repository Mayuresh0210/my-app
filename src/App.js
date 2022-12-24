

import {useState} from "react";

function App(){

  let [Message , setMessage] = useState("hello world");

  let updatemessage = (e)=>{

   Message = (e.target.value);
    
    setMessage(Message);
  };

return(

  <div>
    <h1>when to input </h1>

    <input type="text" placeholder="enter a message"  value={Message} onChange={updatemessage}/>
    <input type="button" value="click on"/>

    <h1>{Message}</h1>


  </div>

  

);

}

export default App;
