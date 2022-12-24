
import {useState} from "react";

function App(){

  let [list, setlist] = useState([{Message:"delhi" ,Messagetime: new Date()}, {Message:"mumbai",Messagetime: new Date()}, {Message:"pune",Messagetime: new Date()}]);
  
  let addmsg= () => {
    let Newmessage = {Message: "chill", Messagetime: new Date()};
    list= [Newmessage, ...list];
    setlist(list);
  };
  return(
  <div>
     <h1 className="bg-danger text-white p-2 sticky-top">map demo</h1>

     <input type="button" value="addmsg" onClick={addmsg} />

    { list.map((item , index ) => (
    
  <div key={index} className="d-flex my-1">

   

    <div className="badge text-bg-danger">{item.Message}
    <span className="ms-5">{item.Messagetime.getHours()} : {item.Messagetime.getMinutes()}</span></div>
   </div>
     ))}  
</div>
  );
  
  
  
  
}

export default App;
