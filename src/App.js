
import {useState} from "react";

function App(){

  let [list, setlist] = useState([{city:"delhi" ,Messagetime: new Date()}, {city:"mumbai",Messagetime: new Date()}, {city:"pune",Messagetime: new Date()}]);

  return(
  <div>
     <h1 className="bg-danger text-white p-2 sticky-top">map demo</h1>

    { list.map((item , index ) => (
    
  <div key={index} className="d-flex my-1">

    <div className="badge text-bg-danger">{item.city}
    <span className="ms-5">{item.Messagetime.getHours()} : {item.Messagetime.getMinutes()}</span></div>
   </div>
     ))}  
</div>
  );
  
  
  
  
}

export default App;
