

import {useState} from "react";


function App() {

  let [theme, setTheme] = useState("secondary");

  let primarytheme= () => {
    theme="primary";
    setTheme(theme);
  };
  
  let successtheme= () => {
    theme="success";
    setTheme(theme);
  };
  
  let dangertheme= () => {
    theme="danger";
    setTheme(theme);
  };

  return (
    <div>
      

      <h1 className ={`bg-${theme} text-white p-3`}>External styling {theme}</h1>
      <h1>
        <input
        className="btn btn-primary ms-1" type="button" value="primary color" onClick={primarytheme}/>
        <input  className="btn btn-success ms-1 " type="button" value="success color" onClick={successtheme}/>
        <input   className="btn btn-danger ms-1"type="button" value="danger color"  onClick={dangertheme}/>

      </h1>
      
      </div>
  );
}

export default App;
