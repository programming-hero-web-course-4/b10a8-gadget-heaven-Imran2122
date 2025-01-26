// /* eslint-disable react/no-unknown-property */
// import { useEffect, useState } from "react";
// import Heading2 from "./Heading2";
// import { getAllData } from "../utility";
// import AddToCart from "./AddToCart";

// const DashBoard = () => {
//   const [products, setProduct] = useState([]);

//   useEffect(() => {
//     const addCart = getAllData();
//     setProduct(addCart);
//   }, []);

//   // Sorting Function
//   const handleShort = (shortBy) => {
//     if (shortBy === "price") {
//       const sortedData = [...products].sort((a, b) => b.price - a.price);
//       setProduct(sortedData);
//     }
//   };

//   return (
//     <>
//       {/* Header Section */}
//       <Heading2
//         title={"Dashboard"}
//         subtitle={
//           "Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
//         }
//       />
//       <div className="flex justify-center items-center bg-[#9538E2] w-11/12 mx-auto gap-4 p-5 rounded-lg shadow-lg">
//         <button className="btn bg-white text-[#9538E2] font-semibold px-6 py-2 rounded-lg   shadow-md">
//           Cart
//         </button>
//         <button className="btn bg-white text-[#9538E2] font-semibold px-6 py-2 rounded-lg   shadow-md">
//           Wishlist
//         </button>
//       </div>

//       {/* Sort and Cart Section */}
//       <div className="flex justify-between w-11/12 mx-auto mt-4">
//         <h4>Cart</h4>
//         <div className="flex gap-2">
//           <button onClick={() => handleShort("price")} className="btn">
//             Sort by Price
//           </button>
//           <button className="btn rounded-4xl bg-[#9538E2]">Purchase</button>
//         </div>
//       </div>

//       {/* Products Display */}
//       <div>
//         {products.map((product) => (
//           <AddToCart key={product.id} product={product} />
//         ))}
//       </div>
//     </>
//   );
// };

// export default DashBoard;
/* eslint-disable react/no-unknown-property */
import { useEffect, useState } from "react";
import Heading2 from "./Heading2";
import { getCartData, getWishlistData } from "../utility";
import AddToCart from "./AddToCart";

const DashBoard = () => {
  const [products, setProducts] = useState([]);
  const [activeTab, setActiveTab] = useState("cart"); // Default view: Cart

  useEffect(() => {
    if (activeTab === "cart") {
      setProducts(getCartData());
    } else {
      setProducts(getWishlistData());
    }
  }, [activeTab]);

  // Sorting Function
  const handleSort = (sortBy) => {
    if (sortBy === "price") {
      const sortedData = [...products].sort((a, b) => b.price - a.price);
      setProducts(sortedData);
    }
  };

  return (
    <>
      {/* Header Section */}
      <Heading2
        title={"Dashboard"}
        subtitle={"Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"}
      />

      {/* Cart / Wishlist Toggle Buttons */}
      <div className="flex justify-center items-center bg-[#9538E2] w-11/12 mx-auto gap-4 p-5 rounded-lg shadow-lg">
        <button
          onClick={() => setActiveTab("cart")}
          className={`btn px-6 py-2 rounded-lg font-semibold shadow-md ${
            activeTab === "cart" ? "bg-white text-[#9538E2]" : "bg-gray-300"
          }`}
        >
          Cart
        </button>
        <button
          onClick={() => setActiveTab("wishlist")}
          className={`btn px-6 py-2 rounded-lg font-semibold shadow-md ${
            activeTab === "wishlist" ? "bg-white text-[#9538E2]" : "bg-gray-300"
          }`}
        >
          Wishlist
        </button>
      </div>

      {/* Sort and Cart Section */}
      <div className="flex justify-between w-11/12 mx-auto mt-4">
     <h1>Cart</h1>
        <div className="flex gap-2">
          <button onClick={() => handleSort("price")} className="btn">
            Sort by Price
          </button>
          <button className="btn rounded-4xl bg-[#9538E2]">Purchase</button>
        </div>
      </div>

      {/* Products Display */}
      <div>
        {products.length > 0 ? (
          products.map((product) => <AddToCart key={product.product_id} product={product} />)
        ) : (
          <p className="text-center text-gray-500 mt-4">No items found in {activeTab}.</p>
        )}
      </div>
    </>
  );
};

export default DashBoard;

