
import {useState} from "react";

function App(){
  let [Message, setMessage] = useState("hello");

  let [list, setlist] = useState([{Message:"delhi" ,Messagetime: new Date()}, {Message:"mumbai",Messagetime: new Date()}, {Message:"pune",Messagetime: new Date()}]);
  

let updateinputmsg=(e) =>{
  Message=e.target.value;
  setMessage(Message);
}

  let addmsg= () => {
    let Newmessage = {Message: Message, Messagetime: new Date()};
    list= [Newmessage, ...list];
    setlist(list);
  };
  return(
  <div>

     
     <h1 className="bg-danger text-white p-2 sticky-top">map demo</h1>
    

    <div className="d-flex">
     <input type="text" value={Message} onChange={updateinputmsg}
     placeholder="enter message" />
     <input className="btn btn-danger ms-3" type="button" value="add msg" onClick={addmsg} />
     </div> 
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
