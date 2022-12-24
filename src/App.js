
import {useState} from "react";

function App(){

  let [list, setlist] = useState(["delhi", "mumbai", "pune"]);

  return(
  <div>
     <h1>map demo</h1>

    { list.map((item) => (<h1 className="alert alert-danger">{item}</h1>))}  
   
     
</div>
  );
  
  
  
  
}

export default App;
