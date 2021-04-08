import React,{useEffect,useState} from 'react'
import { Link,useHistory, useParams } from 'react-router-dom';
import axios from 'axios';
import NavBar from '../parts/NavBar';


const SearchProductByCategory=()=> {
    const history = useHistory();
const [products,setProducts] = useState('');
const {category} = useParams();

  useEffect(()=>{
    
    axios.get(`http://localhost:3030/Product/getProductByCategory/${category}`)
      .then(function (response) {
          
        setProducts(response.data)
        console.log(response.data);
   
      }).catch(function (err) {
        console.log(err);
    });
    
    },[category])

    const getIdProduct= (id)=>{
        localStorage.setItem('idProduct',id);
        history.push('/detailsProduct');
      
      }


    return (
        <div>
            <NavBar/>
            <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -mx-4 -mb-10 text-center">
        { products && products.map(item =>(
           <div className="sm:w-1/6 mb-10 px-4">
               <div className="rounded-lg  overflow-hidden ">
                  <img alt="content" className="object-cover object-center " src={item.productImg} style={{width:160,height:160}} />
               </div>
                  <h2 className="title-font text-1xl font-medium text-gray-900 mt-6 mb-3">{item.titel}</h2>
                  <p className="leading-relaxed text-base text-red">{item.price}DH</p>
                  <Link onClick={()=>getIdProduct(item._id)} className="block text-md px-4 py-2 rounded text-blue-700 ml-2 font-bold hover:text-white mt-4 hover:bg-green-700 lg:mt-0">More...</Link>
            </div>
        ))}
        </div>
    </div>
        </div>
    )
}
export default SearchProductByCategory