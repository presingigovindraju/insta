import React,{useState} from "react";
import axios from "axios";


const Signup = ({setToken})=>{
    // const [text,setText] = useState("");
    // const [email,setEmail] = useState("");
    // const [password,setPassword] = useState("");
    // const [confirmPassword,setConfirmPassword] = useState("");

    const [user,setUser] = useState({name:"",email:"",password:"",confirmPassword:""})
    const [message,setMessage] = useState("");
    
   function updateUser(event){
      console.log("key",event.target.name);
      console.log("value",event.target.value);
      let key = event.target.name;
      setUser({...user,[key]:event.target.value})
   }

   async function implementSignup(event){
       event.preventDefault();
       if(!user.name || !user.email || !user.password || !user.confirmPassword){
         setMessage("Please fill all the field");
         return;
       }
       if(user.password != user.confirmPassword){
        setMessage("password  and confirm Password do not match");
        return;
        }
       try{
       const response = await axios.post("https://instagram-express-app.vercel.app/api/auth/signup",{
        name:user.name,
        email:user.email,
        password:user.password
       })
       console.log("success",response.data.message);
       console.log("status",response.data.message);
       setMessage(response.data.message);
       console.log(response.data.data.token);
       setToken(response.data.data.token);
       setUser({name:"",email:"",password:"",confirmPassword:""})
    }
    catch(error){
        console.log("Error",error.response.data.message);
        setMessage(error.response.data.message);
    }
   }


    return (<div>
        <h1>Sign Up</h1>
        {
            message && <h1>{message}</h1>
        }
         <form onSubmit={implementSignup}>
            <input type="text" placeholder="Name" name="name" 
            onChange={updateUser} value={user.name}/>
            <br/>
            <input type="email" placeholder="Email" name="email"
            onChange={updateUser} value={user.email}/>
            <br/>
            <input type="password" placeholder="Password" name="password"
            onChange={updateUser} value={user.password}/>
            <br/>
            <input type="password" placeholder="Confirm Password" name="confirmPassword"
            onChange={updateUser} value={user.confirmPassword}/>
            <br/>
            <button type="submit">Submit</button>
         </form>
    </div>);
}

export default Signup;



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