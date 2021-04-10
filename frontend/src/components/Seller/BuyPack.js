import React, {useEffect, useState} from 'react';
import { Link,useHistory } from 'react-router-dom';
import axios from 'axios';
import toastr from 'toastr';
import "toastr/build/toastr.css";
import StripeCheckout from "react-stripe-checkout";

export default function BuyPack() {

    const history = useHistory();
    const nameSeller=localStorage.getItem('IdSeller');




     async function handleTokenProAccount(token) {


      let product = {
          type : 'Pro',
          price : 3000
      }

       await axios.post(`http://localhost:3030/BuyAccount/buyAccount`,{token,product})
        .then(function (response) {
          const { status } = response.data;
          console.log("Response:", response.data);
  
          if (status === "success") {
            toastr.success('Success! Check email for details', {
              positionClass: "toast-top-left",
          })
          } else {   
            toastr.warning('Something went wrong', {
              positionClass: "toast-top-left",
          })
          }
        }).catch(function (err) {
          console.log(err);
      });
   


    }
     
    async function handleTokenExpertAccount(token) {

      let product = {
          type : 'Expert',
          price : 5000
      }
     

      await axios.post(`http://localhost:3030/BuyAccount/buyAccount`,{token,product})
        .then(function (response) {
          const { status } = response.data;
          console.log("Response:", response.data);
  
          if (status === "success") {
            toastr.success('Success! Check email for details', {
              positionClass: "toast-top-left",
          })
          } else {   
            toastr.warning('Something went wrong', {
              positionClass: "toast-top-left",
          })
          }
        }).catch(function (err) {
          console.log(err);
      });
  

    }


    const logOut =()=>{

        localStorage.removeItem('token')
           history.push('/loginSeller');
        }


    return (
        <div>
        <style dangerouslySetInnerHTML={{__html: "\n      /* Add this shadow in tailwind.config.js */\n      .neumorphism-shadow {\n        box-shadow: -4px -4px 10px rgb(255, 255, 255), 4px 4px 10px rgba(0, 0, 0, 0.219);\n      }\n      /* Rotate chevron in collapsing */\n      [data-bs-toggle='collapse'][aria-expanded='true'] span:nth-child(3) svg {\n        transform: rotate(-90deg);\n      }\n\n      /* For bootstrap collapse plugin */\n      .fade {\n        transition: opacity 0.15s linear;\n      }\n      .fade:not(.show) {\n        opacity: 0;\n      }\n      .collapse:not(.show) {\n        display: none;\n      }\n      .collapsing {\n        height: 0;\n        overflow: hidden;\n        transition: height 0.35s ease;\n      }\n      @media (prefers-reduced-motion: reduce) {\n        .collapsing {\n          transition: none;\n        }\n        .fade {\n          transition: none;\n        }\n      }\n      /* fixed github link. this stuff also should be applied throw config file  */\n      .github-link:hover {\n        box-shadow: inset -4px -4px 10px rgb(255, 255, 255), inset 4px 4px 10px rgba(0, 0, 0, 0.219);\n      }\n      .github-link:hover > svg,\n      .github-link:focus > svg {\n        transform: scale(.95)\n      }\n\n/* TODO: CHANGE SCROLLBAR STYLE */\n    " }} />
        <div className="flex h-screen antialiased text-black bg-gray-400 ">
                {/* <img className="w-12 h-12 p-px -mt-8 rounded-full neumorphism-shadow" src=""/> */}
        <aside className="flex-shrink-0 p-4 w-72 h-full ">
            <div className="flex flex-col h-full pt-12 pb-4 rounded-lg neumorphism-shadow bg-white">
              {/* Sidebar header */}
  
              <div className="flex flex-col items-center justify-center flex-shrink-0 px-4 py-2 mx-4 rounded-lg neumorphism-shadow bg-blue-300">
              
                <span href="" target="_blank" className="mt-3 px-4 py-1 rounded-md text-xl font-semibold tracking-wider text-gray-600  focus:outline-none">{nameSeller}</span>
              </div>
       
              {/* Sidebar links */}
              <nav className="flex-1 max-h-full p-4 mt-6 overflow-y-hidden">
                <ul className="max-h-full p-2 space-y-1 overflow-y-auto divide-y divide-blue-300 neumorphism-shadow">
                  {/* Dashboard link */}

                   <li>
                    <Link to='/sellerDashboard' className="flex items-center w-full px-4 py-2 text-gray-600 transition-transform transform rounded-md hover:translate-x-1 focus:outline-none focus:ring" data-bs-target="#dashboardCollapse" data-bs-toggle="collapse" aria-expanded="false" aria-controls="dashboardCollapse">
                      <span>
                        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                      </span>
                      <span className="ml-2 font-medium">Dashboard</span>
                      <span className="ml-auto">
                      </span>
                    </Link>
             
                  </li>
                  <li>
                    <Link to='buyPack' className="flex items-center px-4 py-2 text-gray-600 transition-transform transform rounded-md hover:translate-x-1 focus:ring focus:outline-none">
                      <span>
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                      </svg>
                      
                      </span>
                      <span className="ml-2 font-medium">Buy a Pack</span>
                    </Link>
                  </li>
                  {/* Profile link */}
                  <li>
                    <Link to='listProduct' className="flex items-center px-4 py-2 text-gray-600 transition-transform transform rounded-md hover:translate-x-1 focus:ring focus:outline-none">
                      <span>
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                           <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                           <path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd" />
                       </svg>
                      </span>
                      <span className="ml-2 font-medium">List Products</span>
                    </Link>
                  </li>
                </ul>
              </nav>
              <div className="flex-shrink-0 px-4 py-2">
                <button   onClick={logOut} className="w-full px-4 py-2 text-lg font-medium text-center text-gray-600 transition-transform transform rounded-md hover:scale-105 neumorphism-shadow focus:outline-none focus:ring">
                  Logout
                </button>
              </div>
            </div>
          </aside>
<section className="text-gray-600 body-font overflow-hidden ml-60">
  <div className="container  py-24  ">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-white">Pricing</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-white">Buy a pack now .</p>

    </div>
    <div className="flex flex-wrap -m-4">
      
      <div className="p-4 xl:w-1/2 md:w-1/2 w-full">
        <div className="h-full p-6 rounded-lg border-2 border-indigo-500 flex flex-col relative overflow-hidden">
          <span className="bg-indigo-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">POPULAR</span>
          <h2 className="text-sm tracking-widest title-font mb-1 font-medium">PRO</h2>
          <h1 className="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
            <span>3000 DH</span>
     
          </h1>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-80 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2 " d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
         </svg>
          {/* <button className="flex items-center mt-auto text-white bg-indigo-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-indigo-600 rounded">Buy now
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
          */}
          
          <StripeCheckout className="flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded"
                                        stripeKey="pk_test_51IcsGEHRH7LB9NYW6q5Xed7pHznPT7shwEfb0NhkWdVIHB489oWS4E2iypkwCEeO8KOYLG5FEAro7SQToOlrCOga00Q09necQB"
                                        name={'Pro Account'}
                                        token={handleTokenProAccount}
                                        amount={30 * 100}
                                    />  

        </div>
      </div>
      <div className="p-4 xl:w-1/2 md:w-1/2 w-full">
        <div className="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
          <h2 className="text-sm tracking-widest title-font mb-1 font-medium">Expert </h2>
          <h1 className="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
            <span>5000 DH</span>

          </h1>
        

        <svg xmlns="http://www.w3.org/2000/svg" class="h-80 " viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z" clip-rule="evenodd" />
            <path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z" />
        </svg>
        
        <StripeCheckout className="flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded"
                                        stripeKey="pk_test_51IcsGEHRH7LB9NYW6q5Xed7pHznPT7shwEfb0NhkWdVIHB489oWS4E2iypkwCEeO8KOYLG5FEAro7SQToOlrCOga00Q09necQB"
                                        name={'Expert Account'}
                                        token={handleTokenExpertAccount}
                                        amount={50 * 100}
                                    /> 
     
        </div>
      </div>
      </div> 
  </div>
</section>
</div>
</div>
    )
}
