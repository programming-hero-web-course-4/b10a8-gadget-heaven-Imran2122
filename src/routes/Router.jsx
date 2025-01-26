import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Statistics from "../components/Statistics";
import DashBoard from "../components/DashBoard";
import ProductCart from "../components/ProductCart";
import CardDetails from "../components/CardDetails";
import Error from "../components/Error";

export const router = createBrowserRouter([
  {
    path: "/",
    errorElement:<Error></Error>,
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
       
        loader:()=>fetch('../categories.json'),
        children:[
          {
            path:'/',
            element:<ProductCart></ProductCart>,
            loader:()=>fetch('../products.json')

          },
          {
            path:'/category/:category',
            element:<ProductCart></ProductCart>,
            loader:()=>fetch('../products.json')

          },
        ]
      },
      {
        path: "/statistics",
        loader:()=>fetch('../products.json'),
        element:<Statistics></Statistics>
      },
      {
        path:'/dashboard',
        element:<DashBoard></DashBoard>
      },
      {
        path:'/product/:product_id',
        element:<CardDetails></CardDetails>,
        loader:()=>fetch('../products.json')
      },
     
    ],
  },
]);
