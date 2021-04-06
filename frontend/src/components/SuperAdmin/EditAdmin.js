import React, {useEffect, useState} from 'react';
import { Link,useHistory } from 'react-router-dom';
import axios from 'axios';

const  EditAdmin = () => {

    const history = useHistory();

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const id_admin=localStorage.getItem('idAdmin');

// ---------------------get Admin to update-----------------------------
useEffect(()=>{

    axios.get(`http://localhost:3030/superAdmin/getAdminById/${id_admin}`)
    .then(function (response) {
     
        setFirstName(response.data.firstName)
        setLastName(response.data.lastName)
        setEmail(response.data.email)
        setLogin(response.data.login)
        setPassword(response.data.password)


    
    }).catch(function (err) {
      console.log(err);
  });
  
  },[])
// -----------------------update question---------------------------
const handleSubmit = (e) => {
    e.preventDefault();

const data = {firstName,lastName,email,login,password};

axios.put(`http://localhost:3030/superAdmin/updateAdmin/${id_admin}`,data)
  .then(res => {
    if(res.error){
      return false
    }else{
      console.log(res.data);
      history.push('/superAdmin')
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
          Edit Admin
        </label>
        <form method="#" action="#" className="mt-10" onSubmit={handleSubmit}>
          <div className="mt-7">
            <input type="text" placeholder="First name" className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"  required 
            value={firstName}
            onChange={e => setFirstName(e.target.value)}/>
          </div>
          <div className="mt-7">
            <input type="text" placeholder="Last name" className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"  required 
            value={lastName}
            onChange={e => setLastName(e.target.value)}/>
          </div>
          <div className="mt-7">                
            <input type="email" placeholder="Email" className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"  required 
            value={email}
            onChange={e => setEmail(e.target.value)}/>                           
          </div>
          <div className="mt-7">                
            <input type="text" placeholder="Login" className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"  required 
            value={login}
            onChange={e => setLogin(e.target.value)}/>                           
          </div>
          <div className="mt-7">                
            <input type="password" placeholder="Password" className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"  required 
            value={password}
            onChange={e => setPassword(e.target.value)} />                           
          </div>

          <div className="mt-7">
            <button type="submit" className="bg-blue-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
              Register
            </button>
          </div>
       
        </form>
      </div>
    </div>
  </div>
</div>


    )
}
export default EditAdmin;
