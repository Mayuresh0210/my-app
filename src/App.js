import axios from "axios";
import { useState } from "react";

function App(){

  let[title] = useState("api");
  let [messagelist, setMessagelist] = useState([]);
  

  let getallmsg= async() => {
   let  url=`http://localhost:3002/messages`;
   let response =  await  axios.get(url);
     console.log(response);
     messagelist=[...response.data];
     setMessagelist(messagelist);
   
  };

  let createnewmsg= async() => {
    let url =`http://localhost:3002/message`;

    let data ={id: "48", name: "mayuri" , date : new Date()}
    
    await axios.post(url , data); 

  };

 
  return(
<div>
  <h1>integration</h1>
  
  <input type="button" value="ajax get call" onClick={getallmsg}
   />

  {messagelist.map((item) => (

    <div>{item.mayur}</div>
    

  ))}
  
  <input type="button" value="ajax get call" onClick={createnewmsg}/>
  
  
  </div>

  );
}

export default App;