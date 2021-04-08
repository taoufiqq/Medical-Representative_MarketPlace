import React, {useEffect, useState} from 'react';
import { Link,useHistory } from 'react-router-dom';

const Compte =()=> {
    return (
<div className="min-h-screen bg-gradient-to-r from-green-400 to-blue-500  flex flex-col justify-center sm:py-12">
          <h1 className="font-bold text-white text-center text-2xl mb-5">Sign in as a </h1> 
    <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md bg-white shadow w-full rounded-lg divide-y divide-gray-200 justify-center">
 
        <Link to ='/signIn' className="rounded px-3 py-2 m-1 border-b-4 border-l-2 shadow-lg font-bold hover:text-white mt-4 hover:bg-green-700 lg:mt-0">
             Seller
        </Link>
        <Link to='/signInCustomer' className="rounded px-3 py-2 m-1 border-b-4 border-l-2 shadow-lg font-bold hover:text-white mt-4 hover:bg-green-700 lg:mt-0" style={{marginLeft:190}}>
             Customer
        </Link>
        </div>
        <Link to='/choiceLogin' className="rounded px-3 py-2 m-1 border-b-4 border-l-2 shadow-lg font-bold hover:text-white mt-4 hover:bg-green-700 lg:mt-0" style={{marginLeft:850,width:220}} >
                  I already have an account
        </Link>
  
    


</div>
    //     <div className="bg-gradient-to-tl from-blue-800 to-blue-500 text-white font-mono flex flex-col min-h-screen">
    //           <h1 className=" p-10 font-bold text-center text-2xl">Log in as a</h1> 
    //     <div className="flex flex-row-reverse flex-wrap m-auto">
    //     <Link className="rounded px-3 py-2 m-1 border-b-4 border-l-2 shadow-lg bg-blue-800 border-blue-900 text-white">
    //         Seller
    //       </Link>
    //       <Link className="rounded px-3 py-2 m-1 border-b-4 border-l-2 shadow-lg bg-blue-800 border-blue-900 text-white">
    //         Client
    //       </Link>
    //     </div>
    //   </div>
      
    )
}
export default Compte