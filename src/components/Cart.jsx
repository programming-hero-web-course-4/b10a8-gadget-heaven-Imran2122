/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const Cart = ({product}) => {
    const {product_title,product_image,price,product_id}=product ||{}
    return (
  
    <div className="card bg-base-100 w-96 shadow-sm ">
  <figure className="px-10 pt-10 shadow-sm">
    <img 
      src={product_image}
      alt={product_title}
      className="rounded-xl h-40" />
  </figure>
  <div className="card-body items-center text-center ">
    <h2 className="card-title">{product_title}</h2>
    <p>Price:{price}</p>
    <div className="card-actions">
    <Link to={`/product/${product_id}`}>
            <button className="btn rounded-4xl">View Details</button>
         </Link>
    </div>
  </div>
</div>
    );
};

export default Cart;



