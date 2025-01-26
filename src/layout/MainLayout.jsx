import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Heading from "../components/Heading";
import { ToastContainer } from 'react-toastify';

const MainLayout = () => {
  return (
    <div>
      <ToastContainer></ToastContainer>
      <Navbar></Navbar>

      <Outlet />
      <Heading title={'Gadget Heaven'} subtitle={'Leading the way in cutting-edge technology and innovation.'}></Heading>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
