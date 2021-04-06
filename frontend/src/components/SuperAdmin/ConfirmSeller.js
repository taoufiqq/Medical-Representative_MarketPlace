import React, {useEffect, useState} from 'react';
import { Link,useHistory } from 'react-router-dom';
import axios from 'axios';

const ConfirmSeller=()=> {


  const history = useHistory();

  const [type, setType] = useState("");
  const [status, setStatus] = useState("");

  const id_seller=localStorage.getItem('idSeller');
  let idSeller;
  let idSeller2;

// ---------------------get Admin to update-----------------------------
useEffect(()=>{

  axios.get(`http://localhost:3030/superAdmin/getSellerById/${id_seller}`)
  .then(function (response) {
   
    setType(response.data.type)
    setStatus(response.data.status)



  
  }).catch(function (err) {
    console.log(err);
});

},[])
// -----------------------update Seller---------------------------
const handleSubmit = (e) => {
  e.preventDefault();
var id = idSeller.value;
var id2 = idSeller2.value;
const data = {type:id,status:id2};

axios.put(`http://localhost:3030/superAdmin/updateSeller/${id_seller}`,data)
.then(res => {
  if(res.error){
    return false
  }else{
    console.log(res.data);
    history.push('/seller')
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
                Confirm Compte
              </label>
        <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded"  onSubmit={handleSubmit}>

        <div className="mb-4">
            <label className="block mb-2 text-sm font-bold text-gray-700">Type</label>
            <select className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            ref={(e) => idSeller = e} >
              <option value="Starter" key="Starter">Starter</option>
              <option value="Pro"key="Pro">Pro</option>
              <option value="Expert"key="Expert">Expert</option>
            </select>
          
        </div>

        <div className="mb-4">
            <label className="block mb-2 text-sm font-bold text-gray-700"> Status </label>
            <select className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            ref={(e) => idSeller2 = e}>
              <option value="Inactive">Inactive</option>
              <option value="Active">Active</option>
              <option value="Block">Block</option>
            </select>
          
        </div>
        <div className="mb-6 text-center">
          <button className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline" type="submit">Confirm </button>
        </div>     
      </form>
      </div>
    </div>
  </div>
</div>
)
}
export default ConfirmSeller