import React, {useEffect, useState} from 'react';
import { Link,useHistory } from 'react-router-dom';

const ChoiceLogin =()=> {
    return (

<div className="min-h-screen bg-gradient-to-r from-green-400 to-blue-500  flex flex-col justify-center sm:py-12">
          <h1 className="font-bold text-white text-center text-2xl mb-5">Log in as a </h1> 
    <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md bg-white shadow w-full rounded-lg divide-y divide-gray-200 justify-center">
 
        <Link to ='/loginSeller' className="rounded px-3 py-2 m-1 border-b-4 border-l-2 shadow-lg font-bold hover:text-white mt-4 hover:bg-green-700 lg:mt-0">
             Seller
        </Link>
        <Link to='/loginCustomer' className="rounded px-3 py-2 m-1 border-b-4 border-l-2 shadow-lg font-bold hover:text-white mt-4 hover:bg-green-700 lg:mt-0" style={{marginLeft:190}}>
             Customer
        </Link>
        </div>
        <Link to='/compte' className="rounded px-3 py-2 m-1 border-b-4 border-l-2 shadow-lg font-bold hover:text-white mt-4 hover:bg-green-700 lg:mt-0" style={{marginLeft:876,width:165}} >
        Create an account
        </Link>
  
    


</div>

  
    )
}
export default ChoiceLogin