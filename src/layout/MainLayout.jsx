import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Heading from "../components/Heading";
import { ToastContainer } from 'react-toastify';
import Heading2 from "../components/Heading2";

const MainLayout = () => {
  return (
    <div>
      <ToastContainer></ToastContainer>
      <Navbar></Navbar>
       <Heading2 title={'Upgrade Your Tech Accessorize with Gadget Heaven Accessories'} subtitle={'Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'}> </Heading2> 
      <Outlet />
      <Heading title={'Gadget Heaven'} subtitle={'Leading the way in cutting-edge technology and innovation.'} button={'add'}></Heading>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
