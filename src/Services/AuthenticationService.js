import Axios from "axios";



var CryptoJS = require("crypto-js");



 export const login=({username,password})=>{
     let basicAuthHeader = 'Basic ' + window.btoa(username+":"+password)
      return   Axios.get('http://localhost:8084/login',{headers: {Authorization:basicAuthHeader}});
    }

  export const registerSuccessfulLogin=(username,role)=>{
      var usernameCrypt = CryptoJS.AES.encrypt(JSON.stringify(username),'secret').toString();
      var roleCrypt = CryptoJS.AES.encrypt(JSON.stringify(role), 'secret').toString();

      localStorage.setItem("username",usernameCrypt)
      localStorage.setItem("role",roleCrypt)
  }

  export const isUserLoggedIn=()=>{
    let user=localStorage.getItem('username')
      if(user === null) return false
      return true
  }