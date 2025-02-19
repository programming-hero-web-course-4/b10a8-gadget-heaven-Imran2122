

/* eslint-disable react/no-unknown-property */
import { useEffect, useState } from "react";
import Heading2 from "./Heading2";
import { getCartData, getWishlistData } from "../utility";
import AddToCart from "./AddToCart";

const DashBoard = () => {
  const [products, setProducts] = useState([]);
  const [activeTab, setActiveTab] = useState("cart"); 
  const [totalPrice, setTotalPrice] = useState(0); 

  useEffect(() => {
    if (activeTab === "cart") {
      const cartData = getCartData();
      setProducts(cartData);
      calculateTotalPrice(cartData);
    } else {
      setProducts(getWishlistData());
    }
  }, [activeTab]);


  const calculateTotalPrice = (items) => {
    const total = items.reduce((sum, item) => sum + item.price, 0);
    setTotalPrice(total);
  };


  const handleSort = (sortBy) => {
    if (sortBy === "price") {
      const sortedData = [...products].sort((a, b) => b.price - a.price);
      setProducts(sortedData);
    }
  };

  return (
    <>
    
      <div className="flex justify-center items-center bg-[#9538E2] w-11/12 mx-auto gap-4 p-5 rounded-lg shadow-lg">
        <button
          onClick={() => {
            setActiveTab("cart");
            calculateTotalPrice(getCartData()); 
          }}
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


      <div className="flex justify-between w-11/12 mx-auto mt-4">
        <h1>Cart</h1>
        <div className="flex gap-2">
          <button onClick={() => handleSort("price")} className="btn">
            Sort by Price
          </button>
          <button  
            onClick={() => document.getElementById("my_modal_4").showModal()} 
            className="btn rounded-4xl bg-[#9538E2]"
          >
            Purchase
          </button>
        </div>
      </div>

 
      <div>
        {products.length > 0 ? (
          products.map((product) => <AddToCart key={product.product_id} product={product} />)
        ) : (
          <p className="text-center text-gray-500 mt-4">No items found in {activeTab}.</p>
        )}
      </div>

     
      <dialog id="my_modal_4" className="modal">
        <div className="modal-box w-11/12 flex justify-center items-center flex-col">
        <div>
        <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 72 72" fill="none">
  <path d="M68.1715 41.9631L68.1505 41.9735C65.6826 43.8661 64.6369 47.0869 65.5154 50.0673L65.5258 50.0882C66.927 54.8253 63.4553 59.6041 58.5194 59.7296H58.4986C55.3823 59.8133 52.6425 61.8001 51.6073 64.7386V64.749C49.9549 69.4128 44.3292 71.2427 40.2614 68.4297C37.7355 66.7049 34.3963 66.6149 31.7388 68.4297H31.7284C27.6607 71.2322 22.0347 69.4127 20.3929 64.7384C19.3483 61.7926 16.6126 59.813 13.5017 59.7295H13.4807C8.54508 59.6039 5.07319 54.8252 6.47452 50.0881L6.48492 50.0671C7.36312 47.0867 6.31744 43.866 3.84975 41.9733L3.8288 41.9629C-0.0926719 38.9512 -0.0926719 33.0535 3.8288 30.0419L3.84975 30.0315C6.31744 28.1388 7.36312 24.9179 6.47452 21.9376V21.9167C5.06264 17.1797 8.54494 12.4007 13.4807 12.2753H13.5017C16.6074 12.1916 19.3576 10.2047 20.3929 7.26638V7.25598C22.0345 2.59215 27.6607 0.762194 31.7284 3.57526H31.7388C34.3007 5.34249 37.6888 5.34249 40.2614 3.57526C44.3701 0.737866 49.9646 2.62013 51.6073 7.25598V7.26638C52.6425 10.1943 55.3822 12.1918 58.4986 12.2753H58.5194C63.4552 12.4007 66.927 17.1797 65.5258 21.9167L65.5154 21.9376C64.6369 24.9179 65.6826 28.1388 68.1505 30.0315L68.1715 30.0419C72.093 33.0535 72.093 38.9513 68.1715 41.9631Z" fill="#3EB655"/>
  <path d="M36.0004 55.479C46.7584 55.479 55.4794 46.7579 55.4794 36C55.4794 25.2421 46.7584 16.5211 36.0004 16.5211C25.2425 16.5211 16.5215 25.2421 16.5215 36C16.5215 46.7579 25.2425 55.479 36.0004 55.479Z" fill="#8BD399"/>
  <path opacity="0.1" d="M50.9569 23.5312C47.5876 20.7595 43.2771 19.0935 38.5779 19.0935C27.8201 19.0935 19.0943 27.8193 19.0943 38.5771C19.0943 43.2762 20.7603 47.5868 23.5319 50.956C19.2511 47.3851 16.5244 42.0137 16.5244 35.9997C16.5244 25.2417 25.2427 16.5236 36.0006 16.5236C42.0145 16.5236 47.386 19.2503 50.9569 23.5312Z" fill="black"/>
  <path d="M31.3659 43.6256L27.0584 39.0429C25.9303 37.8425 25.9886 35.9552 27.1885 34.8271C28.3885 33.6976 30.2766 33.7582 31.4037 34.9577L33.46 37.1444L42.2002 27.1547C43.2836 25.915 45.168 25.7893 46.4087 26.8742C47.6485 27.9591 47.7736 29.8429 46.6893 31.0827L35.7831 43.547C34.6212 44.8735 32.5708 44.9082 31.3659 43.6256Z" fill="white"/>
</svg>
        </div>
          <h3 className="text-lg font-bold">Congratulations</h3>
          <p className="py-4">Payment Successfully</p>
          <h4>Thanks for purchasing.</h4>
          <p className="text-lg font-semibold">Total: ${totalPrice}</p> 
          <div className="modal-action flex justify-center items-center">
            <button
              className="btn btn-error"
              onClick={() => document.getElementById("my_modal_4").close()}
            >
              Close Confirmation
            </button>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default DashBoard;


