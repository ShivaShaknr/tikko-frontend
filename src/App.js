import { Route , Routes } from "react-router-dom";
import "./index.css";
import {Toaster} from "react-hot-toast";
import Maincomp from "./MAIN_COMP/Maincomp";
import Login from "./LOGIN/Login";
import Register from "./REGISTER/Register";
import Nav from "./NAVBAR/navbar";
import AddToCart from "./ADDTOCART/AddToCart";
function App() {
  
  

  return (
    <>
    <Nav/>
    <Routes>
      <Route exact path={"/"} element={<Register/>}/>
      <Route exact path={"/main"} element={<Maincomp/>}/>
      <Route exact path={"/login"} element={<Login/>}/>
      <Route exact path={"/register"} element={<Register/>}/>
      <Route exact path={"/AddToCart"} element={<AddToCart/>}/>
    </Routes>
    <Toaster/>

      
    </>
  );
}

export default App

