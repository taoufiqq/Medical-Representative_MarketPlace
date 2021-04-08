import React, {useEffect, useState} from 'react';
import { Link,useHistory } from 'react-router-dom';
import axios from 'axios';
import NavBar from '../parts/NavBar';
import Footer from '../parts/Footer';

const DetailsProduct=()=> {

    const history = useHistory();
    const [product, setProduct] = useState();
    const [price, setprice] = useState();
    const idPdts=localStorage.getItem('idProduct');


  




  // get all admin and show it in table
  
  useEffect(()=>{
  
    axios.get(`http://localhost:3030/Seller/getProductById/${idPdts}`)
      .then(function (response) {
          
        setProduct(response.data)
        setprice(response.data.price)
        console.log(product);
      
      }).catch(function (err) {
        console.log(err);
    });
    
    },[idPdts])


// -------------------Parite Exchange currency-------------------

    const [ToCurrency, setToCurrency] = useState('MAD');


    let currency = ToCurrency && ToCurrency;

    const [exchangeRate, setExchangeRate] = useState();

    useEffect(async()=>{


      fetch('http://data.fixer.io/api/latest?access_key=afe4bd8abcfd1a927150d247ad43ac84')
      .then(currencyRes => currencyRes.json())
      .then(data => {
      

        setExchangeRate(data.rates[currency]);

        
        console.log(data.rates[currency]);
        
      });
    
      axios.get(`http://localhost:3030/Seller/getProductById/${idPdts}`)
      .then(function (response) {
          
        setProduct(response.data)
        console.log(product);
      
      }).catch(function (err) {
        console.log(err);
    });
    
    
      },[currency])


  

    return (
      
        <section className="text-gray-600 body-font">
          <NavBar/>
  <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
    <img className="lg:w-1/6 md:w-4/6  mb-10 object-cover object-center rounded" alt="hero" src={product && product.productImg} />
    <div className="text-center lg:w-2/3 w-full">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">{product && product.titel}</h1>
      <h3 className="title-font sm:text-2xl text-3xl mb-4 font-medium text-gray-900">{product && product.category}</h3>
 
      <p className="mb-8 leading-relaxed w-30">{product && product.description}</p>
      <div className="flex items-center pb-5 border-b-2 border-gray-100 mb-5">
      <div className="custom-number-input h-10 w-92">


          </div>
          <span className="ml-9 title-font  text-2xl text-red-900">Choose the currency </span>
          <select onChange={(e)=>setToCurrency(e.target.value)} className="pl-3 inline-block no-underline  hover:text-black" name="" id="">
                        <option  value='MAD'>MAD</option>
                        <option  value='EUR'>EUR</option>
                        <option  value='USD'>USD</option>
          </select>
          </div>
           
      <div className="flex justify-center">
         

      <span className="title-font font-medium text-2xl text-gray-900">{product && (product.price * exchangeRate).toFixed(0) } {currency}</span>
   
        <button className="ml-6 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Buy now</button>
     
      </div>
    </div>
  </div>
  <Footer/>
</section>

    
    )
}
export default  DetailsProduct