import { useLoaderData, useParams } from "react-router-dom";
import Cart from "./Cart";
import { useEffect, useState } from "react";

const ProductCart = () => {
    const data=useLoaderData()
    // eslint-disable-next-line no-unused-vars
    const {category}=useParams()

    const [products,setProduct]=useState([])
    useEffect( ()=>{

     if(category){
        const filterProduct=[...data].filter(product=>product.category===category)
        setProduct(filterProduct)
     }
     else{
        setProduct(data)
     }
    },[category,data])
  
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 w-11/12 mx-auto">
          {
            products.map(product=><Cart product={product} key={product.id}></Cart>)
          }
        </div>
    );
};

export default ProductCart;