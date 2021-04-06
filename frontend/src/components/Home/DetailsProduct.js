import React, {useEffect, useState} from 'react';
import { Link,useHistory } from 'react-router-dom';
import axios from 'axios';

const DetailsProduct=()=> {

    const history = useHistory();
    const [product, setProduct] = useState();
    
    const idPdts=localStorage.getItem('idProduct');
  
  // get all admin and show it in table
  
  useEffect(()=>{
  
    axios.get(`http://localhost:3030/Seller/getProductById/${idPdts}`)
      .then(function (response) {
          
        setProduct(response.data)
        console.log(product);
      
      }).catch(function (err) {
        console.log(err);
    });
    
    })





    return (
      
        <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
    <img className="lg:w-1/6 md:w-4/6  mb-10 object-cover object-center rounded" alt="hero" src={product && product.productImg} />
    <div className="text-center lg:w-2/3 w-full">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">{product && product.titel}</h1>
      <h3 className="title-font sm:text-2xl text-3xl mb-4 font-medium text-gray-900">{product && product.category}</h3>
 
      <p className="mb-8 leading-relaxed">{product && product.description}</p>
      <div className="flex items-center pb-5 border-b-2 border-gray-100 mb-5">
                   <div className="flex  items-center">
                   <span className="mr-3  text-gray-900">Quantity</span>
            <input type="number" className="border" name="" id="" aria-describedby="helpId" placeholder=""/>
                   </div>
                 </div>
      <div className="flex justify-center">
         
            <span className="ml-6 title-font font-medium text-2xl text-gray-900">{product && product.price} DH</span>
        <button className="ml-6 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Buy now</button>
     
      </div>
    </div>
  </div>
</section>

    
    )
}
export default  DetailsProduct