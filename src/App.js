import axios from "axios";
import { useState } from "react";

function App(){

  let[title] = useState("api");
  let [messagelist, setMessagelist] = useState([]);

  let getallmsg= async() => {
   let  url=`http://localhost:3001//messages`;
   let response =  await  axios.get(url);
     console.log(response);
     messagelist=[...response.data];
     setMessagelist(messagelist);
  };
  return(
<div>
  <h1>integration</h1>
  
  <input type="button" value="ajax call" onClick={getallmsg} />
  
  
  </div>

  );
}

export default App;