
import { useLoaderData, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Heart, ShoppingCart } from "lucide-react";
import { addCartData, addWishlistData } from "../utility";

const CardDetails = () => {
  const { product_id } = useParams();
  const data = useLoaderData();
  const [items, setItem] = useState({});

  useEffect(() => {
    const singleProduct = data.find(
      (product) => product.product_id === product_id
    );
    setItem(singleProduct);
  }, [product_id, data]);

  const {
    product_image,
    product_title,
    price,
    availability,
    description,
    rating,
    specification = [],
  } = items;


  const handleAddToCart = () => {
    addCartData(items);
  };


  const handleAddToWishlist = () => {
    addWishlistData(items);
  };

  return (
    <div className="hero bg-base-200 px-10 py-10 ">
      <div className="hero-content flex flex-col lg:flex-row gap-[15px] items-center lg:items-start w-full">
       
        <div className="w-full lg:w-[30%]">
          <img
            src={product_image}
            className="rounded-lg shadow-2xl w-full h-[500px] object-cover"
          />
        </div>

    
        <div className="w-full lg:w-[60%] text-left">
          <h1 className="text-5xl font-bold">{product_title}</h1>
          <p className="py-6 text-xl font-semibold">Price: ${price}</p>
          <div className="flex items-center m-4">
            <p className="rounded-4xl border w-28 flex items-center justify-center">
              {availability}
            </p>
          </div>
          <p>{description}</p>

      
          <div className="mt-4">
            <h2 className="text-xl font-semibold">Specifications:</h2>
            {specification.length > 0 ? (
              <ul className="list-disc list-inside mt-2">
                {specification.map((item, idx) => (
                  <li key={idx} className="text-gray-700">
                    {item}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500">No specifications available</p>
            )}
          </div>

     
          <div className="m-4">Rating :</div>
          <div>
            <div className="rating">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                aria-label="1 star"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                aria-label="2 star"
                defaultChecked
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                aria-label="3 star"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                aria-label="4 star"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                aria-label="5 star"
              />
            </div>
            {rating}
          </div>

      
          <div className="mt-6 flex">
            <button 
              onClick={handleAddToCart} 
              className="btn flex items-center gap-2">
              <ShoppingCart size={20} /> Add to Cart
            </button>
            <button 
              onClick={handleAddToWishlist} 
              className="btn btn-outline ml-2 flex items-center gap-2">
              <Heart size={20} className="text-red-500" /> Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;


