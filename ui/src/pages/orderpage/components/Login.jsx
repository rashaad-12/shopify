import React from "react";

import logo from '../../productpage/assests/images/product-dummy-spcl.png';


 
export const Login = () => {
  
  return (
    <div className='background'>
        <div className="maincontainer">
           <div className="welcome">
               WELCOME
           </div>
           
           <div className = "inputContainer">
             <div className="input">
               <img src={logo} alt=""/>
               <input type='text' placeholder='Email'/>
             </div>
             <div className="input">
               <img src={logo} alt="" />
               <input type='password' placeholder='Password'/>
             </div>
           </div>
 
           <div className = "buttonContainer">
             <button className = "button">Sign Up</button>
           </div>
 
           <div className='loginWith'>
              Or Login With
           </div>
 
          <div className = 'horizontalRule'/>

          <div className = 'forgotPassword'>
            Forgot Password?
          </div>
         
        </div>
    </div>
 
  );
}
 