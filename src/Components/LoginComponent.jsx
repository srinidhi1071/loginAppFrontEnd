import React from 'react';
import { useForm } from 'react-hook-form';
import '../CSS/LoginComponent.css'
import { useHistory } from 'react-router-dom';
import {login,registerSuccessfulLogin} from '../Services/AuthenticationService.js'  

var CryptoJS = require("crypto-js");
const LoginComponent = ()=>{

    const history = useHistory();
    const {register,handleSubmit,errors} = useForm();
    const {password,username} = errors
    const onSubmit =(data) =>{
        login(data)
        .then((response)=>{

         var r= response.data.role
         var un= response.data.username
         registerSuccessfulLogin(un,r)
         history.push("/dashboard")
        })
        .catch((error)=>{
          window.alert("Invalid Credentials")
          console.log(error)
        })
    }
    return(
        <div className="container">
    <div className="row">
      <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div className="card card-signin my-5">
          <div className="card-body">
            <h5 className="card-title text-center">Sign In</h5>
            <form className="form-signin" onSubmit={handleSubmit(onSubmit)} >
                <div className="form-label-group">
                    <input type="text" id="usernmae" name="username" className="form-control" placeholder="Username"
                     ref={register({required:true})} />
                    <label htmlFor="usernmae">Username</label>
                    {username && username.type === "required" &&  (<p className="mt-3 text-danger">The field is required</p>)}
                </div>

                <div className="form-label-group">
                    <input type="password" id="inputPassword" name="password" className="form-control" placeholder="Password" 
                    ref={register({required:true})} />
                    <label htmlFor="inputPassword">Password</label>
                    {password && password.type === "required" &&  (<p className="mt-3 text-danger">The field is required</p>)}
                </div>
              <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit" >Sign in</button>
              <hr className="my-4" ></hr>
              <button className="btn btn-lg btn-facebook btn-block text-uppercase"  onClick={()=> history.push('/signup')}>Create Account</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
    )
}

export default LoginComponent