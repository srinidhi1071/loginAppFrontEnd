import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {addUser,checkUserIsPresent} from '../Services/UserService.js'
import { useHistory } from 'react-router-dom';


const Signup = () =>{

    
   
    const history = useHistory();
    const {register,handleSubmit,errors,setError} = useForm();
    
    

    const {name,email,username,password,contact,address,role} = errors
    const onSubmit = data =>{
        addUser(data)
        .then((response)=>{
            window.alert(response.data.msg)
            history.push("/")
            })
        .catch((error)=>{
            window.alert("Something Failed")})
        // window.alert("OK OK ")
    }

    const checkUsername = async (username)=>{
        let response = await fetch(`http://localhost:8084/signup/${username}`);
        if(response.status === 200)
        {
            return true
        }
        else{
            return false
        }
       
    }
    return(
      
<div className="my-form">
    <div className="cotainer">
    <ToastContainer />
        <div className="row justify-content-center">
            
            <div className="col-md-8 mt-5">
                    <div className="card">
                        <div className="card-header">Register</div>
                        <div className="card-body">
                            <form name="my-form" onSubmit={handleSubmit(onSubmit)}  >
                                <div className="form-group row">
                                    <label htmlFor="full_name" className="col-md-4 col-form-label text-md-right">Full Name</label>
                                    <div className="col-md-6">
                                        <input type="text" id="full_name" className="form-control" name="name" 
                                        ref = {register({required:true,minLength:6})} />
                                        {name && name.type === "required" &&  (<p className="mt-3 text-danger">The field is required</p>)}
                                        {name && name.type === "minLength" && (<p className="mt-3 text-danger">The length should be min 6 chacracters</p>)}
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <label htmlFor="email_address" className="col-md-4 col-form-label text-md-right">E-Mail Address</label>
                                    <div className="col-md-6">
                                        <input type="text" id="email_address" className="form-control" name="email" 
                                        ref = {register({required:true,pattern:/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/})} />
                                         {email && email.type === "required" &&  (<p className="mt-3 text-danger">The field is required</p>)}
                                         {email && email.type === "pattern" && (<p className="mt-3 text-danger">Invalid Email ID</p>)  }
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <label htmlFor="username" className="col-md-4 col-form-label text-md-right">UserName</label>
                                    <div className="col-md-6">
                                        <input type="text" id="username" className="form-control" name="username" 
                                        ref = {register({required:true,validate:checkUsername})} />
                                         {username && username.type === "required" &&  (<p className="mt-3 text-danger">The field is required</p>)}
                                         {username && username.type === "validate" &&  (<p className="mt-3 text-danger">UserName Already Exists</p>)}

                                    </div>
                                </div>



                                <div className="form-group row">
                                    <label htmlFor="password" className="col-md-4 col-form-label text-md-right">Password</label>
                                    <div className="col-md-6">
                                        <input type="password" id="password" className="form-control" name="password" 
                                        ref = {register({required:true})} />
                                         {password && password.type === "required" &&  (<p className="mt-3 text-danger">The field is required</p>)}
                                         </div>
                                </div>

                                <div className="form-group row">
                                    <label htmlFor="phone_number" className="col-md-4 col-form-label text-md-right">Contact</label>
                                    <div className="col-md-6">
                                        <input type="text" id="phone_number" name="contact" className="form-control"  
                                        ref = {register({required:true,pattern:/^([0-9]{10})$/})}/>
                                         {contact && contact.type === "required" &&  (<p className="mt-3 text-danger">The field is required</p>)}
                                         {contact && contact.type === "pattern" &&  (<p className="mt-3 text-danger">Invalid Phone Number</p>)}
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <label htmlFor="present_address" className="col-md-4 col-form-label text-md-right">Present Address</label>
                                    <div className="col-md-6">
                                        <input type="text" id="present_address" name="address" className="form-control" 
                                        ref = {register({required:true})}/>
                                        {address && address.type === "required" &&  (<p className="mt-3 text-danger">The field is required</p>)}
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="present_address" className="col-md-4 col-form-label text-md-right">Role</label>
                                    <div className="col-md-3">
                                    <select className="custom-select" id="role" name="role"  ref = {register({required:true})}>
                                        
                                        <option value="ROLE_ADMIN">ADMIN</option>
                                        <option value="ROLE_USER">USER</option>
                                        </select> 

                                    </div>
                                </div>
                                <div>
                                    <div className="col-md-6 offset-md-4">
                                        <input type="submit" name="submit" className="btn btn-primary" / >
                                       
                                    </div>
                                </div>
                               
                            </form>
                        </div>
                    </div>
            </div>
        </div>
        </div>
    </div>
    )
}
export default Signup
