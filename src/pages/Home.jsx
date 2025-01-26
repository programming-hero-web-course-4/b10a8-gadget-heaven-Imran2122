

import { Outlet, useLoaderData } from "react-router-dom";
import Categories from "../components/Categories";
import Heading from "../components/Heading";

const Home = () => {
  const categories = useLoaderData();

  return (
    <div className="grid grid-cols-4 w-11/12 mx-auto gap-4">
      {/* Sidebar - Category Section */}
      <div className="col-span-1">
        <Categories categories={categories} />
      </div>

      {/* Main Content - Products */}
      <div className="col-span-3">
        {/* Heading */}
        <Heading title="Explore Cutting-Edge Gadgets" subtitle="" />

        {/* Dynamic Content (Products) */}
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
