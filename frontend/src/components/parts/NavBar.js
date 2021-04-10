import React,{useEffect,useState} from 'react'
import { Link,useHistory } from 'react-router-dom';
import axios from 'axios';
import logo from '../images/logo.png'

export default function NavBar() {

  const token=localStorage.getItem('token');
  const history = useHistory();
  const nameCustomer=localStorage.getItem('IdCustomer');

  const logOut =()=>{

      localStorage.removeItem('token')
         history.push('/loginCustomer');
      }
  

    return (
        <nav className="flex items-center justify-between flex-wrap bg-white py-4 lg:px-12 shadow border-blue-700">
  <div className="flex justify-between lg:w-auto w-full lg:border-b-0 pl-6 pr-2 border-solid border-b-2 border-gray-300 pb-5 lg:pb-0">
    <div className="flex items-center flex-shrink-0 text-gray-800 mr-16">
      <span className="font-semibold text-xl tracking-tight"> <img src={logo} style={{width: 200}} /></span>
    </div>
    <div className="block lg:hidden ">
      <button id="nav" className="flex items-center px-3 py-2 border-2 rounded text-blue-700 border-blue-700 hover:text-blue-700 hover:border-blue-700">
        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>
    </div>
  </div>
  <div className="menu w-full lg:block flex-grow lg:flex lg:items-center lg:w-auto lg:px-3 px-8">
    <div className="text-md font-bold text-blue-700 lg:flex-grow">
      <Link to='/' className="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-green-700 mr-2">
        Home
      </Link>
      <Link to='/productByCategory/Urgence' className=" block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-green-700 mr-2">
        Urgence
      </Link>
      <Link to='/productByCategory/Cardiologie' className="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-green-700 mr-2">
        Cardiologie 
      </Link>
      <Link to='/productByCategory/Diagnostique' className="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-green-700 mr-2">
        Diagnostique
      </Link>
      <Link to='/productByCategory/Kinésithérapie' className="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-green-700 mr-2">
        Kinésithérapie
      </Link>
    </div>

{/* Multi langue */}
    <div id="google_translate_element" className="border-2 border-gray-300 bg-white h-8 pl-2 pr-8 rounded-lg text-sm focus:outline-none mr-6"></div>


   <div className="relative mx-auto text-gray-600 lg:block hidden">
      <input className="border-2 border-gray-300 bg-white h-8 pl-2 pr-8 rounded-lg text-sm focus:outline-none" type="search" name="search" placeholder="Search" />
      <button type="submit" className="absolute right-0 top-0 mt-3 mr-2">
        <svg className="text-gray-600 h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 56.966 56.966" style={{enableBackground: 'new 0 0 56.966 56.966'}} xmlSpace="preserve" width="512px" height="512px">
          <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
        </svg>
      </button>
    </div>


     {
      token  && <>

    <div className="flex ">
      <Link onClick={logOut} className="block text-md px-4 py-2 rounded text-blue-700 ml-2 font-bold hover:text-white mt-4 hover:bg-green-700 lg:mt-0">
      <svg xmlns="http://www.w3.org/2000/svg" class="h- w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
       <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
      </svg>
        Log out</Link>
        
      <span className=" block text-md px-4  ml-2 py-2 rounded text-blue-700 font-bold  mt-4 lg:mt-0">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd" />
</svg>
        {nameCustomer}</span>

      </div>
      </>
  
   }
   { !token  && <>    

       <div className="flex ">
      <Link to='/compte' className="block text-md px-4 py-2 rounded text-blue-700 ml-2 font-bold hover:text-white mt-4 hover:bg-green-700 lg:mt-0">Sign in</Link>
      <Link to='/choiceLogin' className=" block text-md px-4  ml-2 py-2 rounded text-blue-700 font-bold hover:text-white mt-4 hover:bg-green-700 lg:mt-0">login</Link>
      </div>
    </>
}

    
    </div>


</nav>

    )
}

