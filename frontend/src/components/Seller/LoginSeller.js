import React, { useState } from 'react';
import {Link,useHistory } from "react-router-dom";
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
        localStorage.setItem("IdSeller", login);
        // console.log(res.data.id);
        localStorage.setItem("seller",res.data.id);
        history.push('/sellerDashboard');
        toastr.success('authenticated SuccessFully')
      }


    }
      else(

      // Calling toast method by passing string 
      toastr.warning(res.error, 'Username Or password invalid !!!! Please Check form !') 
      )

        })
    }



    return (
 <div>

  <div className="h-screen font-sans login bg-cover">
    <div className="container mx-auto h-full flex flex-1 justify-center items-center">
      <div className="w-full max-w-lg">
        <div className="leading-loose">
          <form className="max-w-sm m-4 p-10 bg-white bg-opacity-25 rounded shadow-xl"  onSubmit={handleSubmit}>
            <p className="text-black font-medium text-center text-lg font-bold">Seller Login</p>
            <div className="mt-10">
          
              <input className="w-full px-5 py-1 text-black bg-gray-300 rounded focus:outline-none focus:bg-white" type="text"  placeholder="enter login"
               required 
               value={login} 
               onChange={e => setLogin(e.target.value)}/>
            </div>
            <div className="mt-10">
           
              <input className="w-full px-5 py-1 text-black bg-gray-300 rounded focus:outline-none focus:bg-white" type="password" id="password" placeholder="enter password" arial-label="password"
               required 
               value={password} 
               onChange={e => setPassword(e.target.value)}/>
            </div>
            <div className="mt-7 items-center flex justify-between">
              <button className="px-8 py-1 text-white font-light tracking-wider bg-gray-900 hover:bg-gray-800 rounded" type="submit">login</button>
            </div>
            <div className="text-center">
              <Link to='/signIn' className="inline-block right-0 align-baseline font-light text-sm text-500 hover:text-red-400">
                don't have an account ?
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <style dangerouslySetInnerHTML={{__html: "\n  .login{\n  /*\n   */\n  background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/slider-2.jpg');\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n" }} />
</div>


    )
}
export default  LoginSeller