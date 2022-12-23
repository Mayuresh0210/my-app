

import {useState} from "react";


function App() {

  let [theme, setTheme] = useState("secondary");
  

  let updatetheme= (p1="primary") => {
    theme=p1;
    setTheme(theme);
  };
   
  

  return (

    <div>
    <div>
      <h1 className ={`bg-${theme} text-white p-3`}>External styling {theme}</h1>
      <h1>
        <input
        className="btn btn-primary ms-1" type="button" value="primary color" onClick={() => updatetheme("primary")}/>
        <input  className="btn btn-success ms-1 " type="button" value="success color" onClick={() => updatetheme("success")}/>
        <input   className="btn btn-danger ms-1"type="button" value="danger color"  onClick={() => updatetheme("danger")}/>
      </h1>
      </div>
      </div>
  );
}

export default App;
