import React,{useState} from "react";
import Signup from "./compnents/Signup";
import Login from "./compnents/Login";
import Dashboard from "./Dashboard";

const App = ()=>{
    const [token,setToken] = useState("")

    return (<div>
      <Signup setToken={setToken} />
      <Login setToken={setToken}/>
      <Dashboard token={token} />
    </div>);
}


export default App;