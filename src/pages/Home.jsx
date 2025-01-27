

import { Outlet, useLoaderData } from "react-router-dom";
import Categories from "../components/Categories";
import Heading from "../components/Heading";

const Home = () => {
  const categories = useLoaderData();

  return (
    <div className="grid grid-cols-4 w-11/12 mx-auto gap-4">
    
      <div className="col-span-1">
        <Categories categories={categories} />
      </div>

  
      <div className="col-span-3">
      
        <Heading title="Explore Cutting-Edge Gadgets" subtitle="" />

  
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
