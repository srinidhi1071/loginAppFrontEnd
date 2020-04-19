import Axios from "axios";




 export const addUser=(user)=>{
      return   Axios.post('http://localhost:8084/signup',user);
    }

 export const checkUserIsPresent=(username)=>{
   return Axios.get(`http://localhost:8084/signup/${username}`);
 }   