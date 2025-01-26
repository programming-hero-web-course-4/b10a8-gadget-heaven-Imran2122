/* eslint-disable react/prop-types */

import { NavLink } from "react-router-dom";

const Categories = ({ categories }) => {
  return (
    <div className="p-4  min-h-screen">
      <h2 className="text-lg font-bold mb-3">Categories</h2>
      <div className="flex flex-col space-y-2">
        <NavLink to="/" className="tab">
          All Products
        </NavLink>
        {categories.map((category) => (
          <NavLink
          to={`/category/${category.category_name}`}
          key={category.category_id}
          className={({ isActive }) =>
            `tab ${isActive ? 'tab-active bg-green-700 text-white' : 'bg-gray-200'}`
          }
        >
          {category.category_name}
        </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Categories;
