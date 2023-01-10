import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import ProductDetails from "../pages/ProductDetails";
import Shop from "../pages/Shop";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

const Routers = () => {
  return <>
  <Routes>
    <Route path={Home} element={<Home/>}/>
    <Route path={Cart} element={<Cart/>}/>
    <Route path={Checkout} element={<Checkout/>}/>
    <Route path={ProductDetails} element={<ProductDetails/>}/>
    <Route path={Shop} element={<Shop/>}/>
    <Route path={Login} element={<Login/>}/>
    <Route path={Signup} element={<Signup/>}/>
  </Routes>
  </>;
};

export default Routers
