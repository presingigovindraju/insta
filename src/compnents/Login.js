import React,{useState} from "react";
import axios from "axios";


const Login = ({setToken})=>{
    // const [text,setText] = useState("");
    // const [email,setEmail] = useState("");
    // const [password,setPassword] = useState("");
    // const [confirmPassword,setConfirmPassword] = useState("");

    const [user,setUser] = useState({email:"",password:""})
    const [message,setMessage] = useState("");
    
   function updateUser(event){
      console.log("key",event.target.name);
      console.log("value",event.target.value);
      let key = event.target.name;
      setUser({...user,[key]:event.target.value})
   }

   async function implementLogin(event){
       event.preventDefault();
       if(!user.email || !user.password){
        setMessage("Please fill all the field");
        return;
      }
       try{
       const response = await axios.post("https://instagram-express-app.vercel.app/api/auth/login",{
        email:user.email,
        password:user.password
       })
       console.log("success",response.data.message);
       console.log("status",response.data.message);
       setMessage(response.data.message);
       setToken(response.data.data.token)
       setUser({email:"",password:""})
    }
    catch(error){
        console.log("Error",error.response.data.message);
        setMessage(error.response.data.message);
    }
   }


    return (<div>
        <h1>Log In</h1>
        {
            message && <h1>{message}</h1>
        }
         <form onSubmit={implementLogin}>
            <input type="email" placeholder="Email" name="email"
            onChange={updateUser} value={user.email}/>
            <br/>
            <input type="password" placeholder="Password" name="password"
            onChange={updateUser} value={user.password}/>
            <button type="submit">Submit</button>
         </form>
    </div>);
}

export default Login;



// function updateName(event){
//     setUser({...user,name:event.target.value});
// }
// function updateEmail(event){
//    setUser({...user,email:event.target.value});
// }
// function updatePassword(event){
//    setUser({...user,password:event.target.value});
// }
// function updateConfirmPassword(event){
//    setUser({...user,confirmPassword:event.target.value});
// }