
// const getAllData = () => {
//     const allData = localStorage.getItem('favorite');
//     return allData ? JSON.parse(allData) : [];
//   };

import { toast } from "react-toastify";

  
//   // Add a product to local storage
//   const addCartData = (product) => {
//     const favorite = getAllData();
    
//     // Check if the product already exists based on product_id
//     const isExist = favorite.find(item => item.product_id === product.product_id);
//     if (isExist) {
//       alert('Product already exists in cart!');
//       return;
//     }
  
//     favorite.push(product);
//     localStorage.setItem('favorite', JSON.stringify(favorite));
//     alert('Product successfully added to cart!');
//   };
  
//   // Retrieve all wishlist products from local storage
//   const getWishlistData = () => {
//     const wishlist = localStorage.getItem('wishlist');
//     return wishlist ? JSON.parse(wishlist) : [];
//   };
  
//   // Add a product to wishlist in local storage
//   const addWishlistData = (product) => {
//     const wishlist = getWishlistData();
  
//     // Check if the product already exists in the wishlist
//     const isExist = wishlist.find(item => item.product_id === product.product_id);
//     if (isExist) {
//       alert('Product is already in the wishlist!');
//       return;
//     }
  
//     wishlist.push(product);
//     localStorage.setItem('wishlist', JSON.stringify(wishlist));
//     alert('Product added to wishlist!');
//   };
  
//   export { addCartData, getAllData, addWishlistData, getWishlistData };
// Retrieve all Cart products from local storage
const getCartData = () => {
    const cart = localStorage.getItem("cart");
    return cart ? JSON.parse(cart) : [];
  };
  
  // Add a product to cart in local storage
  const addCartData = (product) => {
    const cart = getCartData();
  
    // Check if the product already exists in the cart
    const isExist = cart.find(item => item.product_id === product.product_id);
    if (isExist) {
      toast("Product already exists in cart!");
      return;
    }
  
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    toast("Product successfully added to cart!");
  };
  
  // Retrieve all Wishlist products from local storage
  const getWishlistData = () => {
    const wishlist = localStorage.getItem("wishlist");
    return wishlist ? JSON.parse(wishlist) : [];
  };
  
  // Add a product to wishlist in local storage
  const addWishlistData = (product) => {
    const wishlist = getWishlistData();
  
    // Check if the product already exists in the wishlist
    const isExist = wishlist.find(item => item.product_id === product.product_id);
    if (isExist) {
      toast("Product is already in the wishlist!");
      return;
    }
  
    wishlist.push(product);
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    toast("Product added to wishlist!");
  };
  
  export { getCartData, addCartData, getWishlistData, addWishlistData };
  





  
