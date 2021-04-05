import React, { useState } from 'react';
import {useHistory } from "react-router-dom";
import axios from 'axios';
import toastr from 'toastr';
import "toastr/build/toastr.css";

const LoginSeller=()=> {

    const history = useHistory();

    const [login, setLogin] = useState();
    const [password, setPassword] = useState();



    const handleSubmit = (e) => {
		e.preventDefault();

	const Seller = {login,password};

	axios.post(`http://localhost:3030/Seller/login`,Seller)
		.then(res => {


            if(!res.data.message){ 
       let status= res.data.status;

       localStorage.setItem("status", status);
        if(status === "InActive"){
          toastr.error('This Account is not activated! Yet please contact us if you have any problem')
        }else if (status === "Block"){
        toastr.error('This Account is Blocked! please contact us if you have any problem')
      }else{
        let token= res.data.token;
        localStorage.setItem("token", token);
        history.push('/sellerDashboard');
        toastr.info('User is authenticated SuccessFully')
      }


    }
      else(

      // Calling toast method by passing string 
      toastr.warning(res.error, 'Username Or password invalid !!!! Please Check form !') 
      )

        })
    }



    return (
<div className="min-h-screen bg-gradient-to-r from-green-400 to-blue-500  flex flex-col justify-center sm:py-12">

  <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
      
    <h1 className="font-bold text-center text-2xl mb-5">Space Seller </h1> 

    <form className="form-horizontal w-3/4 mx-auto"  onSubmit={handleSubmit}>
    <div className="bg-white shadow w-full rounded-lg divide-y divide-gray-200">
      <div className="px-5 py-7">
        <label className="font-semibold text-sm text-gray-600 pb-1 block">Login</label>
        <input type="text" className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" 
          required 
          value={login} 
          onChange={e => setLogin(e.target.value)}/>
        <label className="font-semibold text-sm text-gray-600 pb-1 block">Password</label>
        <input type="text" className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
         value={password} 
         onChange={e => setPassword(e.target.value)} />
        <button type="submit" className="transition duration-200 bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block">
          <span className="inline-block mr-2">Login</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 inline-block">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </div>

    </div>
    </form>
  </div>
</div>

    )
}
export default  LoginSeller