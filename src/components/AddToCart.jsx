/* eslint-disable react/prop-types */

const AddToCart = ({ product }) => {
    const { product_title, product_image, description, price } = product;
  
    return (
     <>
    
      <div className="flex items-center justify-center p-6">
        <div className="card w-full lg:w-2/3 bg-white shadow-lg rounded-lg flex flex-col lg:flex-row overflow-hidden border border-gray-200">
          {/* Smaller Image */}
          <figure className="lg:w-1/3 p-4 flex justify-center">
            <img
              src={product_image}
              alt={product_title}
              className="w-32 h-32 object-cover rounded-lg"
            />
          </figure>
  
          {/* Product Details */}
          <div className="card-body lg:w-2/3 p-6 flex flex-col justify-center">
            <h2 className="text-2xl font-semibold text-gray-900">{product_title}</h2>
            <p className="text-gray-600 my-2 text-sm">{description}</p>
            <p className="text-lg font-bold text-green-600">Price:${price}</p>
          </div>
        </div>
      </div></>
    );
  };
  
  export default AddToCart;
  