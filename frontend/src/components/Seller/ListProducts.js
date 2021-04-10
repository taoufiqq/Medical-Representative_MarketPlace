import React, {useEffect, useState} from 'react';
import { Link,useHistory } from 'react-router-dom';
import axios from 'axios';
import toastr from 'toastr';
import "toastr/build/toastr.css";

const  ListProducts=()=> {
    const history = useHistory();

    const nameSeller=localStorage.getItem('IdSeller');
    const [listProducts, setListProducts] = useState();
    const [listProductsLength, setlistProductsLength] = useState();

    // get all Product and show it in table
    
    const IdSeller=localStorage.getItem('IdSeller');

    
      useEffect(()=>{
    
        axios.get(`http://localhost:3030/Seller/getProductBySellername/${IdSeller}`)
          .then(function (response) {
              
            setListProducts(response.data)
            setlistProductsLength(response.data.length)
          }).catch(function (err) {
            console.log(err);
        });
        
        },[IdSeller])
        
  // delete Product 

  // delete Product 
  const deleteProduct = (id)=>{
    var msgConfirmation = window.confirm("Are You Sure Yo want to delete this Product ?");
    if (msgConfirmation) {   
    axios.delete(`http://localhost:3030/Seller/deleteProduct/${id}`)
    .then(function (response) {
        window.location.reload();
      console.log('item was deleted Succesfully ... ');
    
    })
    
  
  }
}
  const getIdProduct = (id)=>{
    localStorage.setItem('idProduct',id);
    history.push('/editProduct');
  
  }
    
    const logOut =()=>{

        localStorage.removeItem('token')
           history.push('/loginSeller');
        }

  const checklength = ()=>{
          if(listProductsLength > 9){
            toastr.error('You have increase Your Limets Buy a pack !! If you want to seller more ,pls upgrade your acoount')
            history.push('/buyPack');
  
          }
          else{
            history.push('/addProduct');
          }
        }
    

    return (
        <div>
        <style dangerouslySetInnerHTML={{__html: "\n      /* Add this shadow in tailwind.config.js */\n      .neumorphism-shadow {\n        box-shadow: -4px -4px 10px rgb(255, 255, 255), 4px 4px 10px rgba(0, 0, 0, 0.219);\n      }\n      /* Rotate chevron in collapsing */\n      [data-bs-toggle='collapse'][aria-expanded='true'] span:nth-child(3) svg {\n        transform: rotate(-90deg);\n      }\n\n      /* For bootstrap collapse plugin */\n      .fade {\n        transition: opacity 0.15s linear;\n      }\n      .fade:not(.show) {\n        opacity: 0;\n      }\n      .collapse:not(.show) {\n        display: none;\n      }\n      .collapsing {\n        height: 0;\n        overflow: hidden;\n        transition: height 0.35s ease;\n      }\n      @media (prefers-reduced-motion: reduce) {\n        .collapsing {\n          transition: none;\n        }\n        .fade {\n          transition: none;\n        }\n      }\n      /* fixed github link. this stuff also should be applied throw config file  */\n      .github-link:hover {\n        box-shadow: inset -4px -4px 10px rgb(255, 255, 255), inset 4px 4px 10px rgba(0, 0, 0, 0.219);\n      }\n      .github-link:hover > svg,\n      .github-link:focus > svg {\n        transform: scale(.95)\n      }\n\n/* TODO: CHANGE SCROLLBAR STYLE */\n    " }} />
        <div className="flex h-screen antialiased text-black bg-gradient-to-r from-purple-300 to-blue-500">
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
                    <Link className="flex items-center px-4 py-2 text-gray-600 transition-transform transform rounded-md hover:translate-x-1 focus:ring focus:outline-none">
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
          
<div className="w-full" style={{width:1600}}>

  <div className=" flex items-center justify-center font-sans " style={{marginTop:70}}>

    <div className="w-full" >
    <Link onClick={checklength} class="bg-blue-300 hover:bg-green-100 text-black font-bold py-2 px-4 rounded-md">
        Add Product
    </Link>
      <div className="bg-white shadow-md rounded my-6">
        <table className="min-w-max w-full table-auto "style={{overflow:"auto"}}>
          <thead>
            <tr className="bg-gray-200 text-gray-600  text-sm leading-normal">
              <th className="py-3 px-6 text-left"> ProductImg</th>
              <th className="py-3 px-6 text-left">Titel</th>
              <th className="py-3 px-6 text-center">Description</th>
              <th className="py-3 px-6 text-left"> Price</th>
              <th className="py-3 px-6 text-left">Category</th>
              <th className="py-3 px-6 text-center">Quantity</th>
              <th className="py-3 px-6 text-center">CurrentDate</th>
              <th className="py-3 px-6 text-center">Status</th>
              <th className="py-3 px-6 text-center">Actions</th>
            </tr>
          </thead>
          { listProducts && listProducts.map(item =>(
          <tbody className="text-gray-600 text-sm font-light">
          

            <tr className="border-b border-gray-200 hover:bg-gray-100">

              <td className="py-3 px-6 text-left whitespace-nowrap">
                 
             <img src={item.productImg} style={{width:100,height:90}}/>
              </td>
              <td className="py-3 px-6 text-left">
                 {item.titel}
              </td>
              <td className="py-6 px-9 text-left "style={{width:230}}>
              <textarea class="text-grey-darkest flex-1 p-2 m-1 bg-transparent" style={{width:200,height:90}}>{item.description}</textarea>
    
              </td>
              <td className="py-3 px-6 text-center">
              {item.price}
              </td>
              <td className="py-3 px-6 text-left whitespace-nowrap">
              {item.category}
              </td>
              <td className="py-3 px-6 text-left">
              {item.quantity}
              </td>
              <td className="py-3 px-6 text-left">
              {item.currentDate}
              </td>
              <td className="py-3 px-6 text-center">
              {item.status}
              </td>
              <td className="py-3 px-6 text-center">

                <div className="flex item-center justify-center">               
                  <Link onClick={()=>getIdProduct(item._id)} className="w-4 mr-2 transform hover:text-yellow-500 hover:scale-110 ">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                    </svg>
                  </Link>
                  <Link onClick={()=>deleteProduct(item._id)} className="w-4 mr-2 transform hover:text-red-500 hover:scale-110">
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
export default ListProducts;