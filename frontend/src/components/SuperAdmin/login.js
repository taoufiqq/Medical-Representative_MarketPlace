import React, { useState } from 'react';
import {useHistory } from "react-router-dom";
import axios from 'axios';
import toastr from 'toastr';
import "toastr/build/toastr.css";

const  Login = () => {

    const history = useHistory();

	const [login, setUserName] = useState();
    const [password, setPassword] = useState();

	const handleSubmit = (e) => {
		e.preventDefault();

	const superAdmin = {login,password};

	axios.post(`http://localhost:3030/superAdmin/login`, superAdmin)
		.then(res => {
			console.log(res)

			if(!res.data.message){

			 let token= res.data.token;

			 localStorage.setItem("token", token);
       localStorage.setItem('SuperAdmin',login);
			 history.push('/superAdmin');

			 toastr.success('authenticated SuccessFully', `Welcome ${superAdmin.login}`, {
				positionClass: "toast-top-left",
			})

			}else{
				toastr.warning(res.error, 'Username Or password invalid !!!! Please Check form !', {
                    positionClass: "toast-top-left",
                })
			}
		 
		})
	}








    return (
 

        <div className="bg-blue-400 h-screen w-screen">
    <div className="flex flex-col items-center flex-1 h-full justify-center px-4 sm:px-0">
      <div className="flex rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/2 bg-white sm:mx-0" style={{height: '500px'}}>
        <div className="flex flex-col w-full md:w-1/2 p-4">
          <div className="flex flex-col flex-1 justify-center mb-8">
            <h1 className="text-4xl text-center font-thin">Welcome Back</h1>
            <div className="w-full mt-4">

             {/*---------------------------- form login --------------------------*/}

              <form className="form-horizontal w-3/4 mx-auto"  onSubmit={handleSubmit}>
                <div className="flex flex-col mt-4">
                  <input id="UserName" type="text" className="flex-grow h-8 px-2 border rounded border-grey-400" name="username"  placeholder="Username" 
                  required 
                  onChange={e => setUserName(e.target.value)}/>
                </div>
                <div className="flex flex-col mt-4">
                  <input id="password" type="password" className="flex-grow h-8 px-2 rounded border border-grey-400" name="password" required placeholder="Password" 

                  value={password} 
                  onChange={e => setPassword(e.target.value)}/>
                </div>
                <div className="flex items-center mt-4">

                </div>
                <div className="flex flex-col mt-8">
                  <button type="submit" className=" transition duration-300 ease-in-out bg-blue-500 hover:bg-blue-700 text-white text-sm font-semibold py-2 px-4 rounded ">
                    Login
                  </button>
                </div>
              </form>



            </div>
          </div>
        </div>
        <div className="hidden md:block md:w-1/2 rounded-r-lg" style={{background: 'url("https://image.freepik.com/free-vector/online-marketplace-illustration-multichannel-e-commerce-site-drop-shipping-wide-product-selection-internet-shop-store-business-model-cartoon-character-white-background_151150-1251.jpg")', backgroundSize: 'cover', backgroundPosition: 'center center',height:400,width:530}} />
      </div>
    </div>
  </div>
    )
}
export default Login;