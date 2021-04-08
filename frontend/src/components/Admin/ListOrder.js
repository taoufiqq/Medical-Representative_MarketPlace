import React, {useEffect, useState} from 'react';
import { Link,useHistory } from 'react-router-dom';
import axios from 'axios';

const ListOrder = () => {

    const history = useHistory();

    const nameAdmin=localStorage.getItem('IdAdmin');

    const logOut =()=>{

        localStorage.removeItem('token')
           history.push('/loginAdmin');
        }
      
    return (
    
      <div>
      <style dangerouslySetInnerHTML={{__html: "\n      /* Add this shadow in tailwind.config.js */\n      .neumorphism-shadow {\n        box-shadow: -4px -4px 10px rgb(255, 255, 255), 4px 4px 10px rgba(0, 0, 0, 0.219);\n      }\n      /* Rotate chevron in collapsing */\n      [data-bs-toggle='collapse'][aria-expanded='true'] span:nth-child(3) svg {\n        transform: rotate(-90deg);\n      }\n\n      /* For bootstrap collapse plugin */\n      .fade {\n        transition: opacity 0.15s linear;\n      }\n      .fade:not(.show) {\n        opacity: 0;\n      }\n      .collapse:not(.show) {\n        display: none;\n      }\n      .collapsing {\n        height: 0;\n        overflow: hidden;\n        transition: height 0.35s ease;\n      }\n      @media (prefers-reduced-motion: reduce) {\n        .collapsing {\n          transition: none;\n        }\n        .fade {\n          transition: none;\n        }\n      }\n      /* fixed github link. this stuff also should be applied throw config file  */\n      .github-link:hover {\n        box-shadow: inset -4px -4px 10px rgb(255, 255, 255), inset 4px 4px 10px rgba(0, 0, 0, 0.219);\n      }\n      .github-link:hover > svg,\n      .github-link:focus > svg {\n        transform: scale(.95)\n      }\n\n/* TODO: CHANGE SCROLLBAR STYLE */\n    " }} />
      <div className="flex h-screen antialiased text-black  bg-gray-300">
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
                  <Link to='/adminDashboard' className="flex items-center w-full px-4 py-2 text-gray-600 transition-transform transform rounded-md hover:translate-x-1 focus:outline-none focus:ring" data-bs-target="#dashboardCollapse" data-bs-toggle="collapse" aria-expanded="false" aria-controls="dashboardCollapse">
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
                  <Link className="flex items-center px-4 py-2 text-gray-600 transition-transform transform rounded-md hover:translate-x-1 focus:ring focus:outline-none">
                    <span>
                       <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                           <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                           <path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd" />
                       </svg>
                    
                    </span>
                    <span className="ml-2 font-medium">List Orders</span>
                  </Link>
                </li>
                {/* DeliveryMan link */}
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



        
        </div>
      {/* Using bootstrap.js for its collapse plugin */}
</div>

    )
}
export default ListOrder;