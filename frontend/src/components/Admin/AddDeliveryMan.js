import React, {useEffect, useState} from 'react';
import { Link,useHistory } from 'react-router-dom';
import axios from 'axios';

const  AddDeliveryMan = () => {

    const history = useHistory();

    const [fullName, setFullName] = useState("");
    const [telephone, setTelephone] = useState("");



//---------add DeliveryMan------------- 

	const handleSubmit = (e) => {
		e.preventDefault();


  

    const DeliveryMan = {fullName,telephone};

	axios.post(`http://localhost:3030/Admin/addDelivery`,DeliveryMan)
          
		.then(res => {
		    if(res.error){
				return false
			}else{
        console.log(res.data);
         history.push('/deliveryMan')
			}
		 
		})
	}

return (
<div className="font-sans">
  <div className="relative min-h-screen flex flex-col sm:justify-center items-center bg-gradient-to-r from-green-400 to-blue-500 ">
    <div className="relative sm:max-w-sm w-full">
      <div className="card bg-blue-400 shadow-lg  w-full h-full rounded-3xl absolute  transform -rotate-6" />
      <div className="card bg-green-400 shadow-lg  w-full h-full rounded-3xl absolute  transform rotate-6" />
      <div className="relative w-full rounded-3xl  px-6 py-4 bg-gray-100 shadow-md">
        <label htmlFor className="block text-sm text-gray-700 text-center font-bold">
          Add DeliveryMan
        </label>
        <form method="#" action="#" className="mt-10" onSubmit={handleSubmit}>
          <div className="mt-7">
            <input type="text" placeholder="Full name" className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"  required 
            value={fullName}
            onChange={e => setFullName(e.target.value)}/>
          </div>
          <div className="mt-7">
            <input type="text" placeholder="Telephone" className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"  required 
            value={telephone}
            onChange={e => setTelephone(e.target.value)}/>
          </div>
         
          <div className="mt-7">
            <button type="submit" className="bg-blue-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
             Add DeliveryMan
            </button>
          </div>
       
        </form>
      </div>
    </div>
  </div>
</div>


    )
}
export default AddDeliveryMan;
