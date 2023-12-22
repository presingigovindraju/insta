import React,{useState} from "react";
import axios from "axios";



const Dashboard = ({token})=>{
    const [joke,setJoke] = useState("");

   function getJoke(){
      axios.get("https://instagram-express-app.vercel.app/api/auth/zuku",{
            headers:{
                "authorization": `Bearer ${token}`
            }
      })
      .then(response=>{
        console.log("joke",response.data.data.message)
        setJoke(response.data.data.message)
    })
    .catch(error=>console.log("Error",error.response.data.message))
   }


    return (<div>
        <h1>Dashboard</h1>
        <button onClick={getJoke}>Get joke  </button>
        {
            joke && <h1>{joke}</h1>
        }
    </div>);
}

export default Dashboard;