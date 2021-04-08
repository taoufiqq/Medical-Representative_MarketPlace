import React, {useEffect, useState} from 'react';
import { Link,useHistory } from 'react-router-dom';
import axios from 'axios';


const ConfirmSeller = () => {
 
  const history = useHistory();
  const [sellers, setSellers] = useState();
  const SuperAdmin=localStorage.getItem('SuperAdmin');

// get all sellers 

  useEffect(()=>{

    axios.get(`http://localhost:3030/superAdmin/getAllSellers`)
      .then(function (response) {
          
        setSellers(response.data)
      
      }).catch(function (err) {
        console.log(err);
    });
    
    })


  // delete Admin 
  const deleteSeller = (id)=>{
    axios.delete(`http://localhost:3030/superAdmin/deleteSeller/${id}`)
    .then(function (response) {
      console.log('item was deleted Succesfully ... ');
    
    })
    
  
  }

    const getIdSeller = (id)=>{
      localStorage.setItem('idSeller',id);
      history.push('/confirmSeller');
    
    }
      

const logOut =()=>{

    localStorage.removeItem('token')
       history.push('/login');
    }



    return (
        <div>
        <style dangerouslySetInnerHTML={{__html: "\n      /* Add this shadow in tailwind.config.js */\n      .neumorphism-shadow {\n        box-shadow: -4px -4px 10px rgb(255, 255, 255), 4px 4px 10px rgba(0, 0, 0, 0.219);\n      }\n      /* Rotate chevron in collapsing */\n      [data-bs-toggle='collapse'][aria-expanded='true'] span:nth-child(3) svg {\n        transform: rotate(-90deg);\n      }\n\n      /* For bootstrap collapse plugin */\n      .fade {\n        transition: opacity 0.15s linear;\n      }\n      .fade:not(.show) {\n        opacity: 0;\n      }\n      .collapse:not(.show) {\n        display: none;\n      }\n      .collapsing {\n        height: 0;\n        overflow: hidden;\n        transition: height 0.35s ease;\n      }\n      @media (prefers-reduced-motion: reduce) {\n        .collapsing {\n          transition: none;\n        }\n        .fade {\n          transition: none;\n        }\n      }\n      /* fixed github link. this stuff also should be applied throw config file  */\n      .github-link:hover {\n        box-shadow: inset -4px -4px 10px rgb(255, 255, 255), inset 4px 4px 10px rgba(0, 0, 0, 0.219);\n      }\n      .github-link:hover > svg,\n      .github-link:focus > svg {\n        transform: scale(.95)\n      }\n\n/* TODO: CHANGE SCROLLBAR STYLE */\n    " }} />
        <div className="flex h-screen antialiased text-black bg-gradient-to-r from-purple-300 to-blue-500">
          <aside className="flex-shrink-0 p-4 w-72 h-full">
            <div className="flex flex-col h-full pt-12 pb-4 rounded-lg neumorphism-shadow bg-white">
              {/* Sidebar header */}
 
              <div className="flex flex-col items-center justify-center flex-shrink-0 px-4 py-2 mx-4 rounded-lg neumorphism-shadow bg-blue-300">
      
                {/* <img className="w-12 h-12 p-px -mt-8 rounded-full neumorphism-shadow" src=""/> */}
                <span href="" target="_blank" className="mt-3 px-4 py-1 rounded-md text-xl font-semibold tracking-wider text-gray-600  focus:outline-none">{SuperAdmin}</span>
                <span href="" target="_blank" className="mt-3 px-4 py-1 rounded-md text-xl font-semibold tracking-wider text-gray-600  focus:outline-none">Super Admin</span>

              </div>
       
              {/* Sidebar links */}
              <nav className="flex-1 max-h-full p-4 mt-6 overflow-y-hidden">
                <ul className="max-h-full p-2 space-y-1 overflow-y-auto divide-y divide-blue-300 neumorphism-shadow">
                  {/* Dashboard link */}
                  <li>
                    <Link to='/superAdmin' className="flex items-center w-full px-4 py-2 text-gray-600 transition-transform transform rounded-md hover:translate-x-1 focus:outline-none focus:ring" data-bs-target="#dashboardCollapse" data-bs-toggle="collapse" aria-expanded="false" aria-controls="dashboardCollapse">
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
                    <Link to='/admin' className="flex items-center px-4 py-2 text-gray-600 transition-transform transform rounded-md hover:translate-x-1 focus:ring focus:outline-none">
                      <span>
                        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </span>
                      <span className="ml-2 font-medium">Space Admins</span>
                    </Link>
                  </li>
                  {/* Profile link */}
                  <li>
                    <Link className="flex items-center px-4 py-2 text-gray-600 transition-transform transform rounded-md hover:translate-x-1 focus:ring focus:outline-none">
                      <span>
                        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </span>
                      <span className="ml-2 font-medium">Space Sellers</span>
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
          
          
<div className="overflow-x-auto" style={{width:1200}}>

  <div className=" flex items-center justify-center font-sans " style={{marginTop:150}}>

    <div className="w-full">
    {/* <Link to='/addAdmin' class="bg-blue-300 hover:bg-green-100 text-black font-bold py-2 px-4 rounded-100">Add Admin</Link> */}
      <div className="bg-white shadow-md rounded my-6">
        <table className="min-w-max w-full table-auto">
          <thead>
            <tr className="bg-gray-200 text-gray-600  text-sm leading-normal">
              <th className="py-3 px-6 text-left">First name</th>
              <th className="py-3 px-6 text-left">Last name</th>
              <th className="py-3 px-6 text-center">Email</th>
              <th className="py-3 px-6 text-center">Login</th>
              <th className="py-3 px-6 text-center">Type</th>
              <th className="py-3 px-6 text-center">Status</th>
              <th className="py-3 px-6 text-center">Actions</th>
            </tr>
          </thead>
   { sellers && sellers.map(item =>(
          <tbody className="text-gray-600 text-sm font-light">


            <tr className="border-b border-gray-200 hover:bg-gray-100">

              <td className="py-3 px-6 text-left whitespace-nowrap">
               {item.firstName}
              </td>
              <td className="py-3 px-6 text-left">
              {item.lastName}
              </td>
              <td className="py-3 px-6 text-left">
              {item.email}
              </td>
              <td className="py-3 px-6 text-center">
              {item.login}
              </td>
              <td className="py-3 px-6 text-center">
              {item.type}
              </td>
              <td className="py-3 px-6 text-center">
              {item.status}
              </td>
              <td className="py-3 px-6 text-center">

                <div className="flex item-center justify-center">               
                  <Link onClick={()=>getIdSeller(item._id)} className="w-4 mr-2 transform hover:text-yellow-500 hover:scale-110">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                    </svg>
                  </Link>
                  <Link onClick={()=>deleteSeller(item._id)}  className="w-4 mr-2 transform hover:text-red-500 hover:scale-110">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </Link>
                </div>

              </td>

            </tr>
          </tbody>
           ))}
        </table>
      </div>
    </div>
  </div>
</div>

</div>
        {/* Using bootstrap.js for its collapse plugin */}
</div>
      
    )
}
export default ConfirmSeller;