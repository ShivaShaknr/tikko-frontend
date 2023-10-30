import { FiHeart, FiHome, FiLogOut } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import "./nav.css";
import NameDis from "../COMPONENT/namedisplay";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const Nav = ({ setShow, size }) => {
  let navigate = useNavigate();

  function checkLogin(e) {

    var x = localStorage.getItem("loggedIn");
    console.log(x);
    if (x === "false") {
      toast.error("You need to login to access products");
      e.preventDefault();
    }
  }
  function logoutUser(e) {
    e.preventDefault();
    localStorage.clear();
    window.localStorage.setItem("loggedIn", false);
    localStorage.setItem("TotalAmount", 0);
    toast.success('Logout Successfull');
    navigate('/login')
  }

  return (
    <nav>
      <h1  >T I K K O</h1>
      <NameDis />
      <div className="profile-container">
        <Link to='/main' onClick={checkLogin}>
            <FiHome className="nav-icons" />
        </Link>

          <FiHeart className="nav-icons" />

          <Link to={"/AddToCart"}>
            <AiOutlineShoppingCart className="nav-icons" />
          </Link>

        <Link to='/login'>
          <a href="/">
            <AiOutlineUserAdd className="nav-icons" />
          </a>
        </Link>
        <Link to='/login'>
          <a href="/">
            <FiLogOut className="nav-icons" onClick={logoutUser} />
          </a>
        </Link>


      </div>
    </nav>
  );
};

export default Nav;