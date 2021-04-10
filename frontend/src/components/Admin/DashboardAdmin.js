import React, {useEffect, useState} from 'react';
import { Link,useHistory } from 'react-router-dom';
import axios from 'axios';

const DashbordAdmin = () => {

    const history = useHistory();

    const nameAdmin=localStorage.getItem('IdAdmin');

    const [ordersLength, setOrdersLength] = useState();
    const [delivery, setDelivery] = useState();
   


// get all Delivery and show it in table


useEffect(()=>{

  axios.get(`http://localhost:3030/Admin/getAllDelivery`)
    .then(function (response) {
        
      setDelivery(response.data.length)
    }).catch(function (err) {
      console.log(err);
  });
  
  })
  // get all Orders Man and show it in table


useEffect(()=>{

  axios.get(`http://localhost:3030/Admin/getAllOrder`)
    .then(function (response) {
        
      setOrdersLength(response.data.length)
    }).catch(function (err) {
      console.log(err);
  });
  
  })

    const logOut =()=>{

        localStorage.removeItem('token')
           history.push('/loginAdmin');
        }
      
    return (
    
      <div>
      <style dangerouslySetInnerHTML={{__html: "\n      /* Add this shadow in tailwind.config.js */\n      .neumorphism-shadow {\n        box-shadow: -4px -4px 10px rgb(255, 255, 255), 4px 4px 10px rgba(0, 0, 0, 0.219);\n      }\n      /* Rotate chevron in collapsing */\n      [data-bs-toggle='collapse'][aria-expanded='true'] span:nth-child(3) svg {\n        transform: rotate(-90deg);\n      }\n\n      /* For bootstrap collapse plugin */\n      .fade {\n        transition: opacity 0.15s linear;\n      }\n      .fade:not(.show) {\n        opacity: 0;\n      }\n      .collapse:not(.show) {\n        display: none;\n      }\n      .collapsing {\n        height: 0;\n        overflow: hidden;\n        transition: height 0.35s ease;\n      }\n      @media (prefers-reduced-motion: reduce) {\n        .collapsing {\n          transition: none;\n        }\n        .fade {\n          transition: none;\n        }\n      }\n      /* fixed github link. this stuff also should be applied throw config file  */\n      .github-link:hover {\n        box-shadow: inset -4px -4px 10px rgb(255, 255, 255), inset 4px 4px 10px rgba(0, 0, 0, 0.219);\n      }\n      .github-link:hover > svg,\n      .github-link:focus > svg {\n        transform: scale(.95)\n      }\n\n/* TODO: CHANGE SCROLLBAR STYLE */\n    " }} />
      <div className="flex h-screen antialiased text-black bg-gray-300">
              {/* <img className="w-12 h-12 p-px -mt-8 rounded-full neumorphism-shadow" src=""/> */}
        <aside className="flex-shrink-0 p-4 w-72 h-full ">
          <div className="flex flex-col h-full pt-12 pb-4 rounded-lg neumorphism-shadow bg-white">
            {/* Sidebar header */}

            <div className="flex flex-col items-center justify-center flex-shrink-0 px-4 py-2 mx-4 rounded-lg neumorphism-shadow bg-blue-300">
            
              <span href="" target="_blank" className="mt-3 px-4 py-1 rounded-md text-xl font-semibold tracking-wider text-gray-600  focus:outline-none">{nameAdmin}</span>
            </div>
     
            {/* Sidebar links */}
            <nav className="flex-1 max-h-full p-4 mt-6 overflow-y-hidden">
              <ul className="max-h-full p-2 space-y-1 overflow-y-auto divide-y divide-blue-300 neumorphism-shadow">
                {/* Dashboard link */}

                 <li>
                  <Link className="flex items-center w-full px-4 py-2 text-gray-600 transition-transform transform rounded-md hover:translate-x-1 focus:outline-none focus:ring" data-bs-target="#dashboardCollapse" data-bs-toggle="collapse" aria-expanded="false" aria-controls="dashboardCollapse">
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
                  <Link to='/listOrder' className="flex items-center px-4 py-2 text-gray-600 transition-transform transform rounded-md hover:translate-x-1 focus:ring focus:outline-none">
                    <span>
                       <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                           <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                           <path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd" />
                       </svg>
                    
                    </span>
                    <span className="ml-2 font-medium">List Orders</span>
                  </Link>
                </li>
                {/* Profile link */}
                <li>
                <Link to='/deliveryMan'  className="flex items-center px-4 py-2 text-gray-600 transition-transform transform rounded-md hover:translate-x-1 focus:ring focus:outline-none">
                      <span>
                        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </span>
                      <span className="ml-2 font-medium">Space DeliveryMan</span>
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
        {/* Start section Statstique  */}
<section className="text-gray-600 body-font">
<div className="container px-5 py-24 mx-auto">
  <div className="flex flex-col text-center w-full mb-20">

    <p className="lg:w-2/3 mx-auto leading-relaxed text-gray-300">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
  </div>
  <div className="flex flex-wrap -m-4 text-center">
   
    <div className="p-4 md:w-2/4 sm:w-1/2 w-full">
      <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
          <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
          <circle cx={9} cy={7} r={4} />
          <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75" />
        </svg>
        <h2 className="title-font font-medium text-3xl text-black">{ordersLength}</h2>
        <p className="leading-relaxed">Orders</p>
      </div>
    </div>
    <div className="p-4 md:w-2/4 sm:w-1/2 w-full">
      <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
          <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
          <circle cx={9} cy={7} r={4} />
          <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75" />
        </svg>
        <h2 className="title-font font-medium text-3xl text-black">{delivery}</h2>
        <p className="leading-relaxed ">DeliveryMan</p>
      </div>
    </div>
  
  </div>
</div>
</section>


        
        </div>
      {/* Using bootstrap.js for its collapse plugin */}
</div>

    )
}
export default DashbordAdmin;